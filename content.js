//Prevents code from running before page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replace);
} else {
    replace();
}

function replace() {
    console.log("wopp");
    let imgs = document.getElementsByTagName('img');
    console.log(imgs);
    console.log(imgs.length);
    for (image of imgs) {
        let ran = Math.floor(Math.random() * 10);
        console.log(ran);

        let file = 'cat/' + ran + '.jpg';
        let url = chrome.extension.getURL(file);
        image.src = url;
    }
}






