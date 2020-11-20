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
        width = img.width;
        height = img.height;
        img.src = makeURL(width, height);
        // let ran = Math.floor(Math.random() * 10);
        // let file = 'cat/' + ran + '.jpg';
        // let url = chrome.extension.getURL(file);
        // img.src = url;
    }

    function makeURL(x, y) {
        return 'http://placekitten.com/'+x+'/'+y;
    }






