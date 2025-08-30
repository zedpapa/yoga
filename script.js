document.addEventListener('DOMContentLoaded', () => {

    // --- State Variables ---
    let cardsData = {};
    let flows = [];
    let activeFlowId = null;
    const paletteColors = [
        '#d1a3a4', '#d4b9a3', '#e8d5a3', '#a3d1b8', '#a3c1d1', '#b8a3d1',
        '#c94c4c', '#e59a64', '#f0c987', '#73a580', '#5a98b1', '#8f6da8'
    ];

    // --- DOM Elements ---
    const newCardForm = document.getElementById('new-card-form');
    const cardGrid = document.getElementById('card-grid');
    const sortByColorBtn = document.getElementById('sort-by-color-btn');
    const newFlowForm = document.getElementById('new-flow-form');
    const flowDisplay = document.getElementById('flow-display');
    const colorPalette = document.getElementById('color-palette');
    const editModal = document.getElementById('edit-modal');
    const editCardForm = document.getElementById('edit-card-form');
    const cancelEditBtn = document.getElementById('cancel-edit-btn');
    const editColorPalette = document.getElementById('edit-color-palette');

    // --- Persistence Functions ---

    function saveData() {
        localStorage.setItem('yogaAppData_cards', JSON.stringify(cardsData));
        localStorage.setItem('yogaAppData_flows', JSON.stringify(flows));
    }

    function loadData() {
        const savedCards = localStorage.getItem('yogaAppData_cards');
        const savedFlows = localStorage.getItem('yogaAppData_flows');

        if (savedCards && savedCards !== '{}' && savedCards !== 'null') {
            cardsData = JSON.parse(savedCards);
        } else {
            cardsData = {}; // Ensure it's a fresh object
            initialAsanaData.forEach((asana, index) => {
                const cardId = `card-initial-${index}`;
                cardsData[cardId] = {
                    id: cardId,
                    name: asana.name,
                    photoSrc: asana.photoSrc,
                    bodyParts: asana.bodyParts,
                    organs: asana.connectedOrgans,
                    traditions: asana.traditions,
                    color: paletteColors[index % paletteColors.length]
                };
            });
        }

        if (savedFlows) {
            flows = JSON.parse(savedFlows);
        }
    }

    // --- Render Functions ---

    function renderCard(cardData) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = cardData.id;

        card.innerHTML = `
            <div class="card-header">
                <h3>${cardData.name}</h3>
                <button class="edit-card-btn" title="Edit Card">✏️</button>
            </div>
            <div class="card-image">${cardData.photoSrc ? `<img src="${cardData.photoSrc}" alt="${cardData.name}">` : ''}</div>
            <div class="card-content" style="display: none;">
                <p><strong>Body Parts Targeted:</strong> ${cardData.bodyParts}</p>
                <p><strong>Connected Organs:</strong> ${cardData.organs}</p>
                <p><strong>Relevant Traditions:</strong> ${cardData.traditions}</p>
            </div>
            <div class="card-footer" style="background-color: ${cardData.color};"></div>
        `;
        cardGrid.appendChild(card);
    }

    function renderAllCards() {
        cardGrid.innerHTML = '';
        for (const cardId in cardsData) {
            renderCard(cardsData[cardId]);
        }
    }

    function renderFlows() {
        const h3 = flowDisplay.querySelector('h3');
        flowDisplay.innerHTML = '';
        if (h3) flowDisplay.appendChild(h3);

        flows.forEach(flow => {
            const flowElement = document.createElement('div');
            flowElement.classList.add('flow');
            if (flow.id === activeFlowId) {
                flowElement.classList.add('active');
            }
            flowElement.dataset.id = flow.id;

            let asanasHtml = '<div class="flow-asanas">';
            flow.asanas.forEach(cardId => {
                const cardData = cardsData[cardId];
                if (cardData) {
                    asanasHtml += `
                        <div class="flow-card" data-id="${cardId}">
                            <div class="flow-card-header">
                                <img src="${cardData.photoSrc || 'placeholder.png'}" alt="${cardData.name}" class="flow-card-thumbnail">
                                <span>${cardData.name}</span>
                            </div>
                            <div class="flow-card-content" style="display: none;">
                                <p><strong>Body Parts Targeted:</strong> ${cardData.bodyParts}</p>
                                <p><strong>Connected Organs:</strong> ${cardData.organs}</p>
                                <p><strong>Relevant Traditions:</strong> ${cardData.traditions}</p>
                            </div>
                        </div>
                    `;
                }
            });
            asanasHtml += '</div>';

            flowElement.innerHTML = `
                <h4>${flow.name}</h4>
                <p>${flow.description}</p>
                ${asanasHtml}
                <button class="delete-flow-btn">Delete Flow</button>
            `;
            flowDisplay.appendChild(flowElement);
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
                    card.querySelector('.card-header').appendChild(btn);
                }
            } else {
                if (btn) {
                    btn.remove();
                }
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

    // --- Edit Modal Functions ---
    function showEditModal(cardId) {
        const cardData = cardsData[cardId];
        if (!cardData) return;

        document.getElementById('edit-card-id').value = cardId;
        document.getElementById('edit-asana-name').value = cardData.name;
        document.getElementById('edit-body-parts').value = cardData.bodyParts;
        document.getElementById('edit-organs').value = cardData.organs;
        document.getElementById('edit-traditions').value = cardData.traditions;
        document.getElementById('edit-card-color-hidden').value = cardData.color;

        // Set active color in palette
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

        const asanaName = document.getElementById('asana-name').value;
        const photoInput = document.getElementById('asana-photo');
        const bodyParts = document.getElementById('body-parts').value;
        const organs = document.getElementById('organs').value;
        const traditions = document.getElementById('traditions').value;
        const cardColor = document.getElementById('card-color-hidden').value;

        const photo = photoInput.files[0];
        const reader = new FileReader();

        const processCardCreation = (photoSrc) => {
            const cardId = `card-${Date.now()}`;

            const newCardData = {
                id: cardId, name: asanaName, photoSrc: photoSrc, bodyParts: bodyParts,
                organs: organs, traditions: traditions, color: cardColor
            };

            cardsData[cardId] = newCardData;
            renderCard(newCardData);
            updateCardButtons();
            saveData();
        };

        if (photo) {
            reader.onload = (e) => processCardCreation(e.target.result);
            reader.readAsDataURL(photo);
        } else {
            processCardCreation(null);
        }

        newCardForm.reset();
    });

    cardGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-flow-btn')) {
            const cardElement = e.target.closest('.card');
            const activeFlow = flows.find(f => f.id === activeFlowId);

            if (cardElement && activeFlow) {
                const cardId = cardElement.dataset.id;
                if (!activeFlow.asanas.includes(cardId)) {
                    activeFlow.asanas.push(cardId);
                    saveData();
                }
                renderFlows();
            }
            return;
        }

        if (e.target.classList.contains('edit-card-btn')) {
            const cardId = e.target.closest('.card').dataset.id;
            showEditModal(cardId);
            return;
        }

        const card = e.target.closest('.card');
        if (card) {
            const cardContent = card.querySelector('.card-content');
            if (cardContent) {
                const isHidden = cardContent.style.display === 'none';
                cardContent.style.display = isHidden ? 'block' : 'none';
            }
        }
    });

    sortByColorBtn.addEventListener('click', () => {
        const cardElements = Array.from(cardGrid.children);

        cardElements.sort((a, b) => {
            const cardA_data = cardsData[a.dataset.id];
            const cardB_data = cardsData[b.dataset.id];
            if (!cardA_data || !cardB_data) return 0;
            return cardA_data.color.localeCompare(cardB_data.color);
        });

        cardGrid.innerHTML = '';
        cardElements.forEach(card => cardGrid.appendChild(card));
        updateCardButtons(); // Re-apply buttons after sorting
    });

    newFlowForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const flowName = document.getElementById('flow-name').value;
        const flowDescription = document.getElementById('flow-description').value;
        const newFlow = {
            id: Date.now(), name: flowName, description: flowDescription, asanas: []
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
            if (content) {
                const isHidden = content.style.display === 'none';
                content.style.display = isHidden ? 'block' : 'none';
            }
            return;
        }
        const flowElement = e.target.closest('.flow');
        if (!flowElement) return;
        const flowId = Number(flowElement.dataset.id);
        if (e.target.classList.contains('delete-flow-btn')) {
            flows = flows.filter(f => f.id !== flowId);
            if (activeFlowId === flowId) {
                activeFlowId = null;
                updateCardButtons();
            }
            renderFlows();
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

        const onUpdateReady = (newPhotoSrc) => {
            const updatedData = {
                id: cardId,
                name: document.getElementById('edit-asana-name').value,
                photoSrc: newPhotoSrc,
                bodyParts: document.getElementById('edit-body-parts').value,
                organs: document.getElementById('edit-organs').value,
                traditions: document.getElementById('edit-traditions').value,
                color: document.getElementById('edit-card-color-hidden').value
            };
            cardsData[cardId] = updatedData;
            saveData();
            renderAllCards();
            renderFlows(); // Re-render flows in case a card in a flow was updated
            updateCardButtons();
            hideEditModal();
        };

        if (photoFile) {
            const reader = new FileReader();
            reader.onload = (e) => onUpdateReady(e.target.result);
            reader.readAsDataURL(photoFile);
        } else {
            // Keep the old photo if no new one is selected
            const oldPhotoSrc = cardsData[cardId].photoSrc;
            onUpdateReady(oldPhotoSrc);
        }
    });

    // --- Initial Load ---
    loadData();
    populateColorPalette(editColorPalette); // Populate the edit palette once
    renderAllCards();
    renderFlows();
    updateCardButtons();
});
