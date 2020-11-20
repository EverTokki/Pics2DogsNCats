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
        for (image of images) {
            if (image.dataset.replaced == undefined) {
                changeImg(image);
            }
        }
    }

    function changeImg(img) {
        img.dataset.replaced = true;
        width = img.width - (img.width%10);
        height = img.height - (img.height%10);
        img.src = makeURL(width, height);
        // let ran = Math.floor(Math.random() * 10);
        // let file = 'cat/' + ran + '.jpg';
        // let url = chrome.extension.getURL(file);
        // img.src = url;
        return;
    }

    function makeURL(x, y) {
        let ran = Math.floor(Math.random() * 2);
        if(ran===0)
            return 'http://placekitten.com/'+x+'/'+y;
        if(ran===1)
            return 'https://placedog.net/'+x+'/'+y+'?random';
    }






