console.log('Hello World!');
chrome.runtime.onMessage.addListener(replace);

function replace()
{
let imgs = document.getElementsByTagName('img');
for(imgElt of imgs) {
    let ran = Math.random%6;
    let file = 'cat/'+ran+'.jpg';
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
}
}



