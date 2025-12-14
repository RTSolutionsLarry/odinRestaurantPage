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
    const entreeItems = menuItems.filter((item) => item.type = 'entree');
    const drinkItems = menuItems.filter((item) => item.type = 'drink');

    //Appetizer Section

    const appetizerContainer = document.createElement('div');
    appetizerContainer.classList.add('menuSection');
    appetizerContainer.classList.add('appetizer');
    const appetizerTop = document.createElement('div');
    appetizerTop.classList.add('appetizerTop');
    for (let i = 0; i < 3 ; i++) {
        const appetizerItem = document.createElement('div');
        appetizerItem.classList.add('appetizerItem')
        appetizerTop.appendChild(appetizerItem);
    }
    const appetizerBottom = document.createElement('div');
    appetizerBottom.classList.add('appetizerBottom');    
    for (let i = 0; i < 2; i++) {
        const appetizerItem = document.createElement('div');
        appetizerItem.classList.add('appetizerItem')
        appetizerBottom.appendChild(appetizerItem);
    }

    //entree Section

    const entreeContainer = document.createElement('div');
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
