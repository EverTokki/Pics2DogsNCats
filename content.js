//Prevents code from running before page
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', replace);
} else {
    replace();
}

function replace() {
    console.log("wopp");
    let filenames = [
        "0.jpg",
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5.jpg",
        "6.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg"
    ];

    let imgs = document.getElementsByTagName('img');
    console.log(imgs);
    console.log(imgs.length);
    for (image of imgs) {
        let ran = Math.floor(Math.random() * 10);
        console.log(ran);

        let file = 'cat/' + filenames[ran];
        let url = chrome.extension.getURL(file);
        //image.setAttribute("src", url);
        image.src = url;
        //image.src = file;
        console.log(url);
    }
    setTimeout(replace, 5000);
}





