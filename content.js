window.addEventListener('load', onWindowLoaded, false);

function onWindowLoaded() {
    const target = document.body;
    const config = { attributes: false, childList: true, subtree: true };
    const observer = new MutationObserver(checkSubtree);
    observer.observe(target, config);

    function checkSubtree(mutationsList, observer) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                replace();
            }
        }
    }
}


    function replace() {
        let images = document.getElementsByTagName('img');
        console.log(images);
        for (image of images) {
            if (image.dataset.replaced == undefined) {
                changeImg(image);
            }
        }
    }

    function changeImg(img) {
        img.dataset.replaced = true;
        let ran = Math.floor(Math.random() * 10);
        let file = 'cat/' + ran + '.jpg';
        let url = chrome.extension.getURL(file);
        img.src = url;
    }







