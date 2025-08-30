document.addEventListener('DOMContentLoaded', () => {

    // --- State Variables ---
    let appData = {};
    let activeDiscipline = "Yoga";
    let activeFlowId = null;
    let activeFilter = 'All';
    let currentProfile = null; // New state for the current user profile

    const paletteColors = [
        '#d1a3a4', '#d4b9a3', '#e8d5a3', '#a3d1b8', '#a3c1d1', '#b8a3d1',
        '#c94c4c', '#e59a64', '#f0c987', '#73a580', '#5a98b1', '#8f6da8'
    ];
    const disciplines = ["Yoga", "Tai Chi", "Nei Kung", "Strength Training", "Pilates", "Calisthenics", "Mobility & Flexibility Drills", "Plyometrics", "Corrective & Rehabilitation Exercises"];

    // --- DOM Elements ---
    const cardGrid = document.getElementById('card-grid');
    const flowDisplay = document.getElementById('flow-display');
    const newCardForm = document.getElementById('new-card-form');
    const newFlowForm = document.getElementById('new-flow-form');
    const editModal = document.getElementById('edit-modal');
    const editCardForm = document.getElementById('edit-card-form');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const colorPalette = document.getElementById('color-palette');
    const editColorPalette = document.getElementById('edit-color-palette');
    const sortByColorBtn = document.getElementById('sort-by-color-btn');
    const profileBtn = document.getElementById('profile-btn');
    const usernameInput = document.getElementById('username-input');
    const welcomeMessage = document.getElementById('welcome-message');
    const appContainer = document.querySelector('.app-container');

    // --- Data Access Functions ---
    function getActiveCardsData() {
        if (!currentProfile || !appData[currentProfile] || !appData[currentProfile][activeDiscipline]) return {};
        return appData[currentProfile][activeDiscipline].cardsData;
    }

    function getActiveFlows() {
        if (!currentProfile || !appData[currentProfile] || !appData[currentProfile][activeDiscipline]) return [];
        return appData[currentProfile][activeDiscipline].flows;
    }

    // --- Persistence Functions ---
    function saveData() {
        if (!currentProfile) return;
        localStorage.setItem(`wellnessAppData_${currentProfile}`, JSON.stringify(appData[currentProfile]));
    }

    function loadData() {
        if (!currentProfile) {
            appData[currentProfile] = {}; // Clear data if no profile
            return;
        };
        const savedProfileData = localStorage.getItem(`wellnessAppData_${currentProfile}`);
        if (savedProfileData) {
            appData[currentProfile] = JSON.parse(savedProfileData);
        } else {
            // Initialize profile for the first time
            appData[currentProfile] = {};
            disciplines.forEach(discipline => {
                appData[currentProfile][discipline] = { cardsData: {}, flows: [], favorites: [] };
            });

            // Pre-populate Yoga for the new profile
            const yogaData = appData[currentProfile]["Yoga"];
            const initialData = typeof initialAsanaData !== 'undefined' ? initialAsanaData : [];
            initialData.forEach((item, index) => {
                const cardId = `card-initial-${index}`;
                yogaData.cardsData[cardId] = { ...item, id: cardId, color: paletteColors[index % paletteColors.length]};
            });
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

    // ... (rest of render functions are mostly the same, just use getActiveCardsData() etc.)
    function renderCard(cardData) {
        const favorites = appData[currentProfile][activeDiscipline].favorites || [];
        const isFavorite = favorites.includes(cardData.id);

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
                <p><strong>Connected Organs:</strong> ${cardData.organs}</p>
                <p><strong>Relevant Traditions:</strong> ${cardData.traditions}</p>
            </div>
            <div class="card-footer" style="background-color: ${cardData.color};"></div>`;
        cardGrid.appendChild(card);
    }

    function renderAllCards() {
        cardGrid.innerHTML = '';
        const cardsData = getActiveCardsData();
        let cardsToRender = cardsData;

        if (activeFilter !== 'All') {
            const favorites = appData[currentProfile][activeDiscipline].favorites || [];
            cardsToRender = {};
            for (const cardId in cardsData) {
                const card = cardsData[cardId];
                if (activeFilter === 'Favorites') {
                    if (favorites.includes(cardId)) {
                        cardsToRender[cardId] = card;
                    }
                } else {
                    const cardLabels = card.traditions.split(',').map(t => t.trim());
                    if (cardLabels.includes(activeFilter)) {
                        cardsToRender[cardId] = card;
                    }
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
        const flows = getActiveFlows();
        const cardsData = getActiveCardsData();
        flows.forEach(flow => {
            const flowElement = document.createElement('div');
            flowElement.classList.add('flow');
            if (flow.id === activeFlowId) flowElement.classList.add('active');
            flowElement.dataset.id = flow.id;
            let asanasHtml = '<div class="flow-asanas">';
            flow.asanas.forEach(cardId => {
                const cardData = cardsData[cardId];
                if (cardData) {
                    asanasHtml += `<div class="flow-card" data-id="${cardId}"><div class="flow-card-header"><img src="${cardData.photoSrc || 'placeholder.png'}" alt="${cardData.name}" class="flow-card-thumbnail"><span>${cardData.name}</span></div><div class="flow-card-content" style="display: none;"><p><strong>Body Parts Targeted:</strong> ${cardData.bodyParts}</p><p><strong>Connected Organs:</strong> ${cardData.organs}</p><p><strong>Relevant Traditions:</strong> ${cardData.traditions}</p></div></div>`;
                }
            });
            asanasHtml += '</div>';
            flowElement.innerHTML = `<h4>${flow.name}</h4><p>${flow.description}</p>${asanasHtml}<button class="delete-flow-btn">Delete Flow</button>`;
            flowDisplay.appendChild(flowElement);
        });
    }

    function renderDisciplineNav() {
        const navContainer = document.getElementById('discipline-nav');
        navContainer.innerHTML = '';
        disciplines.forEach(discipline => {
            const tab = document.createElement('div');
            tab.classList.add('discipline-tab');
            tab.textContent = discipline;
            tab.dataset.discipline = discipline;
            if (discipline === activeDiscipline) tab.classList.add('active');
            navContainer.appendChild(tab);
        });
    }

    function renderTraditionFilters() {
        const filtersContainer = document.getElementById('tradition-filters');
        const cardsData = getActiveCardsData();
        const labels = new Set();
        for (const cardId in cardsData) {
            const traditions = cardsData[cardId].traditions.split(',').map(t => t.trim());
            traditions.forEach(t => { if(t) labels.add(t); });
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
        labels.forEach(label => {
            const el = document.createElement('div');
            el.className = 'filter-label';
            el.textContent = label;
            el.dataset.filter = label;
            if (label === activeFilter) el.classList.add('active');
            filtersContainer.appendChild(el);
        });
    }

    // --- Other Functions (unchanged logic, but now use data accessors) ---
    // (updateCardButtons, populateColorPalette, showEditModal, hideEditModal)
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
                    card.querySelector('.card-header').appendChild(btn);
                }
            } else {
                if (btn) btn.remove();
            }
        });
    }

    function populateColorPalette(paletteElement) {
        paletteElement.innerHTML = '';
        paletteColors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.classList.add('color-swatch');
            swatch.dataset.color = color;
            swatch.style.backgroundColor = color;
            paletteElement.appendChild(swatch);
        });
    }

    function showEditModal(cardId) {
        const cardData = getActiveCardsData()[cardId];
        if (!cardData) return;
        document.getElementById('edit-card-id').value = cardId;
        document.getElementById('edit-asana-name').value = cardData.name;
        document.getElementById('edit-body-parts').value = cardData.bodyParts;
        document.getElementById('edit-organs').value = cardData.organs;
        document.getElementById('edit-traditions').value = cardData.traditions;
        document.getElementById('edit-card-color-hidden').value = cardData.color;
        const swatches = editColorPalette.children;
        for (const swatch of swatches) {
            swatch.classList.toggle('active', swatch.dataset.color === cardData.color);
        }
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

    document.getElementById('discipline-nav').addEventListener('click', (e) => {
        if (e.target.classList.contains('discipline-tab')) {
            const newDiscipline = e.target.dataset.discipline;
            if (newDiscipline !== activeDiscipline) {
                activeDiscipline = newDiscipline;
                activeFlowId = null;
                activeFilter = 'All';
                renderApp();
                renderDisciplineNav();
            }
        }
    });

    // ... (rest of event listeners are largely the same)
    // All listeners that modify data must now call saveData()
    // All listeners that read data must now use getActiveCardsData() or getActiveFlows()
    colorPalette.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-swatch')) {
            const currentActive = colorPalette.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            e.target.classList.add('active');
            document.getElementById('card-color-hidden').value = e.target.dataset.color;
        }
    });

    editColorPalette.addEventListener('click', (e) => {
        if (e.target.classList.contains('color-swatch')) {
            const currentActive = editColorPalette.querySelector('.active');
            if (currentActive) currentActive.classList.remove('active');
            e.target.classList.add('active');
            document.getElementById('edit-card-color-hidden').value = e.target.dataset.color;
        }
    });

    newCardForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const photoInput = document.getElementById('asana-photo');
        const photo = photoInput.files[0];
        const processCardCreation = (photoSrc) => {
            const cardId = `card-${Date.now()}`;
            const cardsData = getActiveCardsData();
            cardsData[cardId] = {
                id: cardId,
                name: document.getElementById('asana-name').value,
                photoSrc: photoSrc,
                bodyParts: document.getElementById('body-parts').value,
                organs: document.getElementById('organs').value,
                traditions: document.getElementById('traditions').value,
                color: document.getElementById('card-color-hidden').value
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
        if (e.target.classList.contains('add-to-flow-btn')) {
            const flows = getActiveFlows();
            const activeFlow = flows.find(f => f.id === activeFlowId);
            if (activeFlow) {
                const cardId = cardElement.dataset.id;
                if (!activeFlow.asanas.includes(cardId)) {
                    activeFlow.asanas.push(cardId);
                    saveData();
                    renderFlows();
                }
            }
            return;
        }
        if (e.target.classList.contains('favorite-btn')) {
            const cardId = cardElement.dataset.id;
            const favorites = appData[currentProfile][activeDiscipline].favorites || [];
            const favIndex = favorites.indexOf(cardId);

            if (favIndex > -1) {
                favorites.splice(favIndex, 1); // Unfavorite
            } else {
                favorites.push(cardId); // Favorite
            }
            appData[currentProfile][activeDiscipline].favorites = favorites;
            saveData();

            // Toggle visual state
            e.target.classList.toggle('is-favorite');
            return;
        }

        if (e.target.classList.contains('edit-card-btn')) {
            showEditModal(cardElement.dataset.id);
            return;
        }
        const cardContent = cardElement.querySelector('.card-content');
        if (cardContent) {
            cardContent.style.display = cardContent.style.display === 'none' ? 'block' : 'none';
        }
    });

    sortByColorBtn.addEventListener('click', () => {
        renderAllCards(); // Re-render to apply sort
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
            appData[activeDiscipline].flows = getActiveFlows().filter(f => f.id !== flowId);
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
            cardsData[cardId] = {
                id: cardId,
                name: document.getElementById('edit-asana-name').value,
                photoSrc: newPhotoSrc,
                bodyParts: document.getElementById('edit-body-parts').value,
                organs: document.getElementById('edit-organs').value,
                traditions: document.getElementById('edit-traditions').value,
                color: document.getElementById('edit-card-color-hidden').value
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

    document.getElementById('sidebar').addEventListener('click', (e) => {
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
        populateColorPalette(editColorPalette);
        renderApp();
    }

    init();
});
