let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/josh-allen.png'){
        myImage.setAttribute('src', 'images/josh-allen.png');
    } else {
        myImage.setAttribute ('src', 'images/josh-allen.png');
    
    }
}