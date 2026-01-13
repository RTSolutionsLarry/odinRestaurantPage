const displayMainOffer = () => {
    console.log('Inside Main Content');

    const mainContent = document.getElementsByClassName('mainSection')[0];

    const mainOfferContainer = document.createElement('div');
    mainOfferContainer.classList.add('mainOfferContainer');      
    mainContent.appendChild(mainOfferContainer);

    for (let i = 1; i < 5; i++) {
        const mainOfferImage = document.createElement('div');
        mainOfferImage.classList.add(`mainOfferImage${i}`);
        mainOfferContainer.appendChild(mainOfferImage);
    }
    
//    const videoBackground = document.createElement('video');
//    videoBackground.src = 'https://dam.tacobell.com/asset/13c214ee-cac4-4b72-9876-63097ca7f796/1080p_High/E126_NAT_CDB_Digital_VIDEO_web-desktop-1-mp4.mp4';
//    videoBackground.autoplay = true;
//    videoBackground.load();
//    videoBackground.loop = true;
//    videoBackground.muted = true;
//    videoBackground.classList.add('offerVideo')
//    mainOfferContainer.appendChild(videoBackground);

}

export {displayMainOffer};
