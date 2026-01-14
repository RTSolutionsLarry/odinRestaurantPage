const displayMenu = () => {
    
    const mainContent = document.getElementsByClassName('mainSection')[0];

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const menuItems = [
        {
            name: 'Cheeto Surprise',
            price: '7.99',
            type: 'appetizer',
            description: 'Test Description'
        },
        {
            name: 'Jazzy Wings',
            price: '9.99',
            type: 'appetizer',
            description: 'Test Description'
        },
        {
            name: 'Baked Potato',
            price: '12.99',
            type: 'appetizer',
            description: 'Test Description'
        },
        {
            name: 'Kale Krunch',
            price: '7.99',
            type: 'appetizer',
            description: 'Test Description'
        },
        {
            name: 'Gluten Pizza',
            price: '9.99',
            type: 'appetizer',
            description: 'Test Description'
        },
        {
            name: 'Bowl of the Gods',
            price: '$20',
            type: 'entree',
            description: 'A divine mix of fresh, vibrant ingredients like tender lamb, creamy tzatziki, and a burst of lemon. This bowl brings the flavors of ancient Greece straight to your table, fit for the gods themselves.'
        },
        {
            name: 'Mediterranean Mirage',
            price: '$16',
            type: 'entree',
            description: 'A colorful, refreshing bowl that combines crisp veggies, roasted chickpeas, and aromatic spices. It’s a quick getaway to the Mediterranean, with every bite offering a taste of paradise.'
        },
        {
            name: 'The Olive Grove Bowl',
            price: '$14',
            type: 'entree',
            description: 'Featuring a mix of earthy olives, velvety hummus, and hearty grains, this bowl celebrates the region’s rich agricultural roots. Every ingredient is handpicked to bring the warmth and charm of an olive grove right to your plate.'
        },
        {
            name: 'Sunset on the Sea',
            price: '$17',
            type: 'entree',
            description: "Inspired by the golden hues of Mediterranean sunsets, this bowl layers sun-drenched tomatoes, grilled fish, and fresh herbs. It's a celebration of the sea’s bounty and the region’s vibrant culinary tradition."},
        {
            name: "Baba’s Feast",
            price: '$15',
            type: 'entree',
            description: "A hearty bowl that combines rich lamb, smoky baba ghanoush, and roasted veggies, creating the ultimate comfort food. Named after a loving grandmother’s feast, it’s a plate full of Mediterranean heart and soul."
        },
        {
            name: 'Aegean Bliss Bowl',
            price: '$13',
            type: 'entree',
            description: 'A refreshing blend of crisp greens, quinoa, feta, and a tangy dressing that evokes the peaceful waters of the Aegean Sea. Each bite is a reminder of the blissful, laid-back Mediterranean lifestyle.'
        },
        {
            name: 'Old Fashioned',
            price: '$15',
            type: 'drink',
            description: 'A classic cocktail made with muddled sugar, bitters, and bourbon or rye, offering a perfect balance of sweetness, bitterness, and strength.'
        },
        {
            name: 'Negroni',
            price: '$14',
            type: 'drink',
            description: 'A bold and aromatic mix of gin, vermouth rosso, and Campari, delivering a slightly bitter and sophisticated taste.'
        },            
        {
            name: 'French 75',
            price: '$15',
            type: 'drink',
            description: 'A refreshing combination of gin, champagne, lemon juice, and sugar, creating a bubbly, citrusy cocktail that’s perfect for celebrations.'
        },
        {
            name: 'Dirty Martini',
            price: '$13',
            type: 'drink',
            description: 'A savory twist on the martini with gin or vodka, dry vermouth, and a splash of olive brine for a salty, briny kick.'
        },                          
    ];
    
    const appetizerItems = menuItems.filter(item => {
        return item.type === 'appetizer';
    });
    const appetizerItemsElements = [];

    const entreeItems = menuItems.filter(item => {
        return item.type === 'entree';
    });    
    const entreeItemsElements = [];

    const drinkItems = menuItems.filter(item =>  {
        return item.type === 'drink';
    });
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
        appetizerItemsElements.push(appetizerItem);
    }

    let appetizerItemIndex = 0;
    for (let element of appetizerItemsElements) {
        const appetizerName = document.createElement('div');
        const appetizerPrice = document.createElement('div');
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
    entreeContainer.classList.add('entree');


    for (let i = 0; i < 6 ; i++) {
        const entreeItem = document.createElement('div');
        entreeItem.classList.add('entreeItem');
        entreeSection.appendChild(entreeItem);
        entreeItemsElements.push(entreeItem);
    }

    let entreeItemIndex = 0;    
    for (let element of entreeItemsElements) {

        const entreeName = document.createElement('div');
        entreeName.classList.add('entreeName');
        entreeName.innerText = entreeItems[entreeItemIndex].name;

        const entreePrice = document.createElement('div');
        entreePrice.classList.add('entreePrice');
        entreePrice.innerText = entreeItems[entreeItemIndex].price;

        const entreeDescription = document.createElement('div');
        entreeDescription.classList.add('entreeDescription');
        entreeDescription.innerText = entreeItems[entreeItemIndex].description;

        element.appendChild(entreeName);
        element.appendChild(entreePrice);
        element.appendChild(entreeDescription);
        entreeItemIndex++;
    }

    //drink Section

    const drinkContainer = document.createElement('div');

    const drinkHeader = document.createElement('div');
    drinkHeader.classList.add('drinkHeader');
    drinkHeader.innerText = 'Drinks';
    drinkContainer.appendChild(drinkHeader);

    const drinkSection = document.createElement('div');
    drinkSection.classList.add("drinkSection");
    drinkContainer.appendChild(drinkSection);    

    drinkContainer.classList.add('menuSection');
    drinkContainer.classList.add('drink');

    for (let i = 0; i < 4 ; i++) {
        const drinkItem = document.createElement('div');
        drinkItem.classList.add('drinkItem');
        drinkSection.appendChild(drinkItem);
        drinkItemsElements.push(drinkItem);
    }
    
    let drinkItemIndex = 0;    
    for (let element of drinkItemsElements) {

        const drinkName = document.createElement('div');
        drinkName.classList.add('drinkName');
        drinkName.innerText = drinkItems[drinkItemIndex].name;

        const drinkPrice = document.createElement('div');
        drinkPrice.classList.add('drinkPrice');
        drinkPrice.innerText = drinkItems[drinkItemIndex].price;

        const drinkDescription = document.createElement('div');
        drinkDescription.classList.add('drinkDescription');
        drinkDescription.innerText = drinkItems[drinkItemIndex].description;

        element.appendChild(drinkName);
        element.appendChild(drinkPrice);
        element.appendChild(drinkDescription);
        drinkItemIndex++;
    }    

    //append Section

    mainContent.appendChild(menuContainer);
    menuContainer.appendChild(appetizerContainer);

    appetizerContainer.appendChild(appetizerTop);
    appetizerContainer.appendChild(appetizerBottom);

    menuContainer.appendChild(entreeContainer);


    menuContainer.appendChild(drinkContainer);        
}

export {displayMenu};
