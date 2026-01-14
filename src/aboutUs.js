const displayAboutUs = () => {

    const mainContent = document.getElementsByClassName('mainSection')[0];

    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.classList.add('aboutUsContainer');
    mainContent.appendChild(aboutUsContainer);

    const bioPicture = document.createElement('div');
    bioPicture.classList.add('bioPicture');
    aboutUsContainer.appendChild(bioPicture);

    const bioContainer = document.createElement('div');
    bioContainer.classList.add('bioContainer');
    const bioMessageHeader = document.createElement('div');
    bioMessageHeader.classList.add('bioMessageHeader');
    bioMessageHeader.innerText = "The Journey to Jazzy Jay’s";
    const bioMessage = document.createElement('div');
    bioMessage.classList.add('bioMessage');
    bioMessage.innerText = "From humble beginnings to a thriving restaurant empire, Jazzy’s story is one of passion, perseverance, and a love for great food. Growing up in a small apartment in the heart of the city, Jazzy spent years working in kitchens, learning the ropes of the restaurant world. Despite facing long hours, limited resources, and countless obstacles, they never lost sight of their dream: to open a place where people could experience the vibrant, fresh flavors of Mediterranean cuisine in a welcoming, down-to-earth setting. After years of saving, experimenting with recipes, and perfecting each dish, Jazzy Jay’s was born. What started as a tiny, neighborhood spot quickly became a local favorite, thanks to Jazzy’s dedication to quality ingredients, bold flavors, and creating an atmosphere that felt like home. Today, Jazzy Jay’s is more than just a restaurant; it’s a testament to what happens when hard work and heart come together to create something truly special.";
    aboutUsContainer.appendChild(bioContainer);
    bioContainer.appendChild(bioMessageHeader);
    bioContainer.appendChild(bioMessage);    
}

export {displayAboutUs};
