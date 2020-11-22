window.addEventListener('load', onWindowLoaded, false);

// Checks for new image loads into page
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

    // Checks if image should be replaced
    function replace() {
        let imgList = document.getElementsByTagName('img');
        for (img of imgList) {
            if (img.dataset.replaced == undefined) {
                changeImg(img);
            }
        }
    }

    // Sets image replaced flag to true
    function changeImg(img) {
        img.dataset.replaced = true;
        width = img.width - (img.width%10);
        height = img.height - (img.height%10);
        img.src = makeURL(width, height);
        return;
    }

    // Makes URL to retrieve image of same size
    function makeURL(x, y) {
        let ran = Math.floor(Math.random() * 2);
        if(ran===0)
            return 'http://placekitten.com/'+x+'/'+y;
        if(ran===1)
            return 'https://placedog.net/'+x+'/'+y+'?random';
    }






