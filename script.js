document.addEventListener('DOMContentLoaded', () => {

    // --- State Variables ---
    let appData = {};
    let activeDiscipline = "Yoga";
    let activeFlowId = null;
    let activeFilter = 'All';
    let currentProfile = null;

    const disciplines = ["Yoga", "Strength Training", "Pilates", "Tai Chi", "Nei Kung", "Calisthenics", "Mobility & Flexibility Drills", "Plyometrics", "Corrective & Rehabilitation Exercises"];

    const categoryColorMap = {
        "Yoga": "#5a98b1", "Hatha": "#5a98b1", "Ashtanga": "#5a98b1", "Vinyasa": "#5a98b1", "Restorative": "#a3d1b8", "Yin": "#a3d1b8",
        "Strength Training": "#c94c4c", "Powerlifting": "#c94c4c", "Bodybuilding": "#c94c4c",
        "Pilates": "#b8a3d1",
        "Calisthenics": "#e59a64",
        "Mobility & Flexibility Drills": "#a3c1d1",
        "Plyometrics": "#f0c987",
        "Corrective & Rehabilitation Exercises": "#73a580",
        "Tai Chi": "#d4b9a3",
        "Nei Kung": "#d1a3a4",
        "Beginner": "#ccc",
        "Default": "#6c757d"
    };

    const allLabels = [...new Set(Object.keys(categoryColorMap))];

    // --- DOM Elements ---
    const cardGrid = document.getElementById('card-grid');
    const flowDisplay = document.getElementById('flow-display');
    const newCardForm = document.getElementById('new-card-form');
    const newFlowForm = document.getElementById('new-flow-form');
    const editModal = document.getElementById('edit-modal');
    const editCardForm = document.getElementById('edit-card-form');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const profileBtn = document.getElementById('profile-btn');
    const usernameInput = document.getElementById('username-input');
    const welcomeMessage = document.getElementById('welcome-message');
    const appContainer = document.querySelector('.app-container');
    const disciplineNav = document.getElementById('discipline-nav');
    const sidebar = document.getElementById('sidebar');
    const traditionsSelect = document.getElementById('traditions-select');
    const editTraditionsSelect = document.getElementById('edit-traditions-select');

    // --- Data Access ---
    function getActiveData() {
        if (!currentProfile || !appData[currentProfile]) return null;
        return appData[currentProfile][activeDiscipline];
    }

    function getActiveCardsData() {
        const activeData = getActiveData();
        return activeData ? activeData.cardsData : {};
    }

    function getActiveFlows() {
        const activeData = getActiveData();
        return activeData ? activeData.flows : [];
    }

    // --- Persistence & Initialization ---
    function saveData() {
        if (!currentProfile) return;
        localStorage.setItem(`wellnessAppData_${currentProfile}`, JSON.stringify(appData[currentProfile]));
    }

    function loadData() {
        if (!currentProfile) {
            appData = {};
            return;
        }
        const savedProfileData = localStorage.getItem(`wellnessAppData_${currentProfile}`);
        if (savedProfileData) {
            appData[currentProfile] = JSON.parse(savedProfileData);
        } else {
            appData[currentProfile] = {};
            disciplines.forEach(discipline => {
                appData[currentProfile][discipline] = { cardsData: {}, flows: [], favorites: [] };
            });
            const initialDataMap = {
                "Yoga": typeof initialAsanaData !== 'undefined' ? initialAsanaData : [],
                "Strength Training": typeof initialStrengthData !== 'undefined' ? initialStrengthData : [],
                "Pilates": typeof initialPilatesData !== 'undefined' ? initialPilatesData : [],
            };
            for (const discipline in initialDataMap) {
                const initialData = initialDataMap[discipline];
                initialData.forEach((item, index) => {
                    const cardId = `card-initial-${discipline.replace(/\s+/g, '-')}-${index}`;
                    const tradition = item.traditions.split(',')[0].trim();
                    appData[currentProfile][discipline].cardsData[cardId] = {
                        ...item,
                        id: cardId,
                        traditions: tradition,
                        color: categoryColorMap[tradition] || categoryColorMap["Default"]
                    };
                });
            }
            saveData();
        }
    }

    // --- Render Functions ---
    function renderApp() {
        if (!currentProfile) {
            appContainer.style.display = 'none';
            welcomeMessage.textContent = 'Please enter a username to begin.';
            return;
        }
        appContainer.style.display = 'flex';
        welcomeMessage.textContent = `Welcome, ${currentProfile}!`;
        renderDisciplineNav();
        renderAllCards();
        renderFlows();
        renderTraditionFilters();
    }

    function renderCard(cardData) {
        const activeData = getActiveData();
        if (!activeData) return;
        const isFavorite = activeData.favorites.includes(cardData.id);
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = cardData.id;
        card.innerHTML = `
            <div class="card-header">
                <h3>${cardData.name}</h3>
                <div class="card-buttons">
                    <button class="favorite-btn ${isFavorite ? 'is-favorite' : ''}" title="Toggle Favorite">★</button>
                    <button class="edit-card-btn" title="Edit Card">✏️</button>
                </div>
            </div>
            <div class="card-image">${cardData.photoSrc ? `<img src="${cardData.photoSrc}" alt="${cardData.name}">` : ''}</div>
            <div class="card-content" style="display: none;">
                <p><strong>Body Parts Targeted:</strong> ${cardData.bodyParts}</p>
                <p><strong>Connected Organs:</strong> ${cardData.connectedOrgans}</p>
                <p><strong>Label:</strong> ${cardData.traditions}</p>
            </div>
            <div class="card-footer" style="background-color: ${cardData.color};"></div>`;
        cardGrid.appendChild(card);
    }

    function renderAllCards() {
        cardGrid.innerHTML = '';
        const activeData = getActiveData();
        if (!activeData) return;
        let cardsToRender = activeData.cardsData;
        if (activeFilter !== 'All') {
            const favorites = activeData.favorites || [];
            cardsToRender = {};
            for (const cardId in activeData.cardsData) {
                const card = activeData.cardsData[cardId];
                if (activeFilter === 'Favorites') {
                    if (favorites.includes(cardId)) cardsToRender[cardId] = card;
                } else {
                    if (card.traditions === activeFilter) cardsToRender[cardId] = card;
                }
            }
        }
        for (const cardId in cardsToRender) {
            renderCard(cardsToRender[cardId]);
        }
        updateCardButtons();
    }

    function renderFlows() {
        const h3 = flowDisplay.querySelector('h3');
        flowDisplay.innerHTML = '';
        if (h3) flowDisplay.appendChild(h3);
        const activeData = getActiveData();
        if (!activeData) return;
        activeData.flows.forEach(flow => {
            const flowElement = document.createElement('div');
            flowElement.classList.add('flow');
            if (flow.id === activeFlowId) flowElement.classList.add('active');
            flowElement.dataset.id = flow.id;
            let asanasHtml = '<div class="flow-asanas">';
            flow.asanas.forEach(cardId => {
                const cardData = activeData.cardsData[cardId];
                if (cardData) {
                    asanasHtml += `<div class="flow-card" data-id="${cardId}"><div class="flow-card-header"><img src="${cardData.photoSrc || 'placeholder.png'}" alt="${cardData.name}" class="flow-card-thumbnail"><span>${cardData.name}</span></div><div class="flow-card-content" style="display: none;"><p><strong>Body Parts Targeted:</strong> ${cardData.bodyParts}</p><p><strong>Connected Organs:</strong> ${cardData.connectedOrgans}</p><p><strong>Label:</strong> ${cardData.traditions}</p></div></div>`;
                }
            });
            asanasHtml += '</div>';
            flowElement.innerHTML = `<h4>${flow.name}</h4><p>${flow.description}</p>${asanasHtml}<button class="delete-flow-btn">Delete</button>`;
            flowDisplay.appendChild(flowElement);
        });
    }

    function renderDisciplineNav() {
        disciplineNav.innerHTML = '';
        disciplines.forEach(discipline => {
            const tab = document.createElement('div');
            tab.classList.add('discipline-tab');
            tab.textContent = discipline;
            tab.dataset.discipline = discipline;
            if (discipline === activeDiscipline) tab.classList.add('active');
            disciplineNav.appendChild(tab);
        });
    }

    function renderTraditionFilters() {
        const filtersContainer = document.getElementById('tradition-filters');
        const cardsData = getActiveCardsData();
        if (!cardsData) return;
        const labels = new Set();
        for (const cardId in cardsData) {
            const tradition = cardsData[cardId].traditions;
            if(tradition) labels.add(tradition);
        }
        filtersContainer.innerHTML = '';
        ['Show All', 'Favorites'].forEach(filterName => {
            const el = document.createElement('div');
            el.className = 'filter-label';
            el.textContent = filterName;
            el.dataset.filter = filterName;
            if (filterName === activeFilter) el.classList.add('active');
            filtersContainer.appendChild(el);
        });
        if (labels.size > 0) filtersContainer.appendChild(document.createElement('hr'));
        Array.from(labels).sort().forEach(label => {
            const el = document.createElement('div');
            el.className = 'filter-label';
            el.textContent = label;
            el.dataset.filter = label;
            if (label === activeFilter) el.classList.add('active');
            filtersContainer.appendChild(el);
        });
    }

    function updateCardButtons() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let btn = card.querySelector('.add-to-flow-btn');
            if (activeFlowId) {
                if (!btn) {
                    btn = document.createElement('button');
                    btn.textContent = 'Add to Flow';
                    btn.title = 'Add to Active Flow';
                    btn.classList.add('add-to-flow-btn');
                    card.querySelector('.card-buttons').appendChild(btn);
                }
            } else {
                if (btn) btn.remove();
            }
        });
    }

    function populateCategoryDropdowns() {
        [traditionsSelect, editTraditionsSelect].forEach(selectElement => {
            if (!selectElement) return;
            selectElement.innerHTML = '';
            allLabels.forEach(label => {
                if (label !== 'Favorites' && label !== 'Show All') {
                    const option = document.createElement('option');
                    option.value = label;
                    option.textContent = label;
                    selectElement.appendChild(option);
                }
            });
        });
    }

    function showEditModal(cardId) {
        const cardData = getActiveCardsData()[cardId];
        if (!cardData) return;
        editCardForm.querySelector('#edit-card-id').value = cardId;
        editCardForm.querySelector('#edit-asana-name').value = cardData.name;
        editCardForm.querySelector('#edit-body-parts').value = cardData.bodyParts;
        editCardForm.querySelector('#edit-connected-organs').value = cardData.connectedOrgans;
        editCardForm.querySelector('#edit-traditions-select').value = cardData.traditions;
        editModal.style.display = 'flex';
    }

    function hideEditModal() {
        editModal.style.display = 'none';
        editCardForm.reset();
    }

    // --- Event Listeners ---
    profileBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            currentProfile = username;
            usernameInput.value = '';
            init();
        } else {
            alert('Please enter a username.');
        }
    });

    disciplineNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('discipline-tab')) {
            const newDiscipline = e.target.dataset.discipline;
            if (newDiscipline !== activeDiscipline) {
                activeDiscipline = newDiscipline;
                activeFlowId = null;
                activeFilter = 'All';
                renderApp();
            }
        }
    });

    newCardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const photoInput = document.getElementById('asana-photo');
        const photo = photoInput.files[0];
        const processCardCreation = (photoSrc) => {
            const cardId = `card-${Date.now()}`;
            const cardsData = getActiveCardsData();
            const selectedTradition = traditionsSelect.value;
            cardsData[cardId] = {
                id: cardId,
                name: document.getElementById('asana-name').value,
                photoSrc: photoSrc,
                bodyParts: document.getElementById('body-parts').value,
                connectedOrgans: document.getElementById('connected-organs').value,
                traditions: selectedTradition,
                color: categoryColorMap[selectedTradition] || categoryColorMap['Default']
            };
            renderCard(cardsData[cardId]);
            updateCardButtons();
            saveData();
        };
        if (photo) {
            const reader = new FileReader();
            reader.onload = (e) => processCardCreation(e.target.result);
            reader.readAsDataURL(photo);
        } else {
            processCardCreation(null);
        }
        newCardForm.reset();
    });

    cardGrid.addEventListener('click', (e) => {
        const cardElement = e.target.closest('.card');
        if (!cardElement) return;
        const cardId = cardElement.dataset.id;
        const activeData = getActiveData();
        if (e.target.classList.contains('add-to-flow-btn')) {
            const activeFlow = activeData.flows.find(f => f.id === activeFlowId);
            if (activeFlow && !activeFlow.asanas.includes(cardId)) {
                activeFlow.asanas.push(cardId);
                saveData();
                renderFlows();
            }
            return;
        }
        if (e.target.classList.contains('favorite-btn')) {
            const favIndex = activeData.favorites.indexOf(cardId);
            if (favIndex > -1) {
                activeData.favorites.splice(favIndex, 1);
            } else {
                activeData.favorites.push(cardId);
            }
            saveData();
            e.target.classList.toggle('is-favorite');
            if (activeFilter === 'Favorites') renderAllCards();
            return;
        }
        if (e.target.classList.contains('edit-card-btn')) {
            showEditModal(cardId);
            return;
        }
        const cardContent = cardElement.querySelector('.card-content');
        if (cardContent) {
            cardContent.style.display = cardContent.style.display === 'none' ? 'block' : 'none';
        }
    });

    newFlowForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const flows = getActiveFlows();
        const newFlow = {
            id: Date.now(),
            name: document.getElementById('flow-name').value,
            description: document.getElementById('flow-description').value,
            asanas: []
        };
        flows.push(newFlow);
        activeFlowId = newFlow.id;
        renderFlows();
        newFlowForm.reset();
        updateCardButtons();
        saveData();
    });

    flowDisplay.addEventListener('click', (e) => {
        const flowCard = e.target.closest('.flow-card');
        if (flowCard) {
            const content = flowCard.querySelector('.flow-card-content');
            if (content) content.style.display = content.style.display === 'none' ? 'block' : 'none';
            return;
        }
        const flowElement = e.target.closest('.flow');
        if (!flowElement) return;
        const flowId = Number(flowElement.dataset.id);
        if (e.target.classList.contains('delete-flow-btn')) {
            getActiveData().flows = getActiveFlows().filter(f => f.id !== flowId);
            if (activeFlowId === flowId) activeFlowId = null;
            renderFlows();
            updateCardButtons();
            saveData();
            return;
        }
        activeFlowId = flowId;
        renderFlows();
        updateCardButtons();
    });

    cancelEditBtn.addEventListener('click', hideEditModal);

    editCardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cardId = document.getElementById('edit-card-id').value;
        const photoInput = document.getElementById('edit-asana-photo');
        const photoFile = photoInput.files[0];
        const cardsData = getActiveCardsData();
        const onUpdateReady = (newPhotoSrc) => {
            const selectedTradition = editTraditionsSelect.value;
            cardsData[cardId] = {
                id: cardId,
                name: document.getElementById('edit-asana-name').value,
                photoSrc: newPhotoSrc,
                bodyParts: document.getElementById('edit-body-parts').value,
                connectedOrgans: document.getElementById('edit-connected-organs').value,
                traditions: selectedTradition,
                color: categoryColorMap[selectedTradition] || categoryColorMap['Default']
            };
            saveData();
            renderApp();
            hideEditModal();
        };
        if (photoFile) {
            const reader = new FileReader();
            reader.onload = (e) => onUpdateReady(e.target.result);
            reader.readAsDataURL(photoFile);
        } else {
            const oldPhotoSrc = cardsData[cardId].photoSrc;
            onUpdateReady(oldPhotoSrc);
        }
    });

    sidebar.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-label')) {
            const newFilter = e.target.dataset.filter;
            if (newFilter !== activeFilter) {
                activeFilter = newFilter;
                renderApp();
            }
        }
    });

    // --- Initial Load ---
    function init() {
        loadData();
        populateCategoryDropdowns();
        renderApp();
    }

    init();
});
