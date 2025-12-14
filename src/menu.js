const displayMenu = () => {
    console.log('Inside menu js');
    
    const mainContent = document.getElementsByClassName('mainSection')[0];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const menuItems = [
        {
            name: 'Cheeto Surprise',
            price: '7.99',
            type: 'appetizer'
        },
        {
            Name: 'Jazzy Wings',
            price: '9.99',
            type: 'appetizer'
        },
        {
            name: 'Baked Potato',
            price: '12.99',
            type: 'appetizer'
        },
        {
            name: 'Kale Krunch',
            price: '7.99',
            type: 'appetizer'
        },
        {
            name: 'Gluten Pizza',
            price: '9.99',
            type: 'appetizer'
        }
    ];
    
    const appetizerItems = menuItems.filter((item) => item.type = 'appetizer');
    const appetizerItemsElements = [];
    const entreeItems = menuItems.filter((item) => item.type = 'entree');
    const entreeItemsElements = [];
    const drinkItems = menuItems.filter((item) => item.type = 'drink');
    const drinkItemsElements = [];

    //Appetizer Section

    const appetizerContainer = document.createElement('div');

    const appetizerHeader = document.createElement('div');
    appetizerHeader.classList.add('appetizerHeader');
    appetizerHeader.innerText = 'Appetizers';
    appetizerContainer.appendChild(appetizerHeader)

    appetizerContainer.classList.add('menuSection');
    appetizerContainer.classList.add('appetizer');
    const appetizerTop = document.createElement('div');
    appetizerTop.classList.add('appetizerTop');
    for (let i = 0; i < 3 ; i++) {
        const appetizerItem = document.createElement('div');
        appetizerItem.classList.add('appetizerItem')
        appetizerTop.appendChild(appetizerItem);
        appetizerItemsElements.push(appetizerItem)
    }
    const appetizerBottom = document.createElement('div');
    appetizerBottom.classList.add('appetizerBottom');    
    for (let i = 0; i < 2; i++) {
        const appetizerItem = document.createElement('div');
        appetizerItem.classList.add('appetizerItem')
        appetizerBottom.appendChild(appetizerItem);
        appetizerItemsElements.push(appetizerItem)
    }

    let appetizerItemIndex = 0;
    for (let element of appetizerItemsElements) {
        const appetizerName = document.createElement('p');
        const appetizerPrice = document.createElement('p');
        appetizerName.classList.add('appetizerName');
        appetizerName.innerText = appetizerItems[appetizerItemIndex].name;
        appetizerPrice.classList.add('appetizerPrice');
        appetizerPrice.innerText = appetizerItems[appetizerItemIndex].price;
        element.appendChild(appetizerName);
        element.appendChild(appetizerPrice);
        appetizerItemIndex++;
    }

    //entree Section

    const entreeContainer = document.createElement('div');

    const entreeHeader = document.createElement('div');
    entreeHeader.classList.add('entreeHeader');
    entreeHeader.innerText = 'Entrees';
    entreeContainer.appendChild(entreeHeader);
    
    const entreeSection = document.createElement('div');
    entreeSection.classList.add("entreeSection");
    entreeContainer.appendChild(entreeSection);

    entreeContainer.classList.add('menuSection')
    const drinkContainer = document.createElement('div');
    drinkContainer.classList.add('menuSection')

    mainContent.appendChild(menuContainer);
    menuContainer.appendChild(appetizerContainer);

    appetizerContainer.appendChild(appetizerTop);
    appetizerContainer.appendChild(appetizerBottom);

    menuContainer.appendChild(entreeContainer);


    menuContainer.appendChild(drinkContainer);        
}

export {displayMenu};
