document.addEventListener('DOMContentLoaded', () => {

    // --- State Variables ---
    let cardsData = {};
    let flows = [];
    let activeFlowId = null;

    // --- DOM Elements ---
    const newCardForm = document.getElementById('new-card-form');
    const cardGrid = document.getElementById('card-grid');
    const sortByColorBtn = document.getElementById('sort-by-color-btn');
    const newFlowForm = document.getElementById('new-flow-form');
    const flowDisplay = document.getElementById('flow-display');

    // --- Persistence Functions ---

    function saveData() {
        localStorage.setItem('yogaAppData_cards', JSON.stringify(cardsData));
        localStorage.setItem('yogaAppData_flows', JSON.stringify(flows));
    }

    function loadData() {
        const savedCards = localStorage.getItem('yogaAppData_cards');
        const savedFlows = localStorage.getItem('yogaAppData_flows');

        if (savedCards) {
            cardsData = JSON.parse(savedCards);
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
            <div class="card-header"><h3>${cardData.name}</h3></div>
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
                    btn.textContent = 'Add to Active Flow';
                    btn.classList.add('add-to-flow-btn');
                    card.appendChild(btn);
                }
            } else {
                if (btn) {
                    btn.remove();
                }
            }
        });
    }

    // --- Event Listeners ---

    newCardForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const asanaName = document.getElementById('asana-name').value;
        const photoInput = document.getElementById('asana-photo');
        const bodyParts = document.getElementById('body-parts').value;
        const organs = document.getElementById('organs').value;
        const traditions = document.getElementById('traditions').value;
        const cardColor = document.getElementById('card-color').value;

        const photo = photoInput.files[0];
        const reader = new FileReader();

        const processCardCreation = (photoSrc) => {
            const cardId = `card-${Date.now()}`;

            const newCardData = {
                id: cardId,
                name: asanaName,
                photoSrc: photoSrc,
                bodyParts: bodyParts,
                organs: organs,
                traditions: traditions,
                color: cardColor
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
    });

    newFlowForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const flowName = document.getElementById('flow-name').value;
        const flowDescription = document.getElementById('flow-description').value;

        const newFlow = {
            id: Date.now(),
            name: flowName,
            description: flowDescription,
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

    // --- Initial Load ---
    loadData();
    renderAllCards();
    renderFlows();
    updateCardButtons();
});
