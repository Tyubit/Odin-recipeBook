function loadHtml(id, filename) {
    let xhr;
    let element = document.getElementById(id);
    let file = filename;

    if (file) {
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                element.innerHTML = this.responseText;
            }
        };
        xhr.open("GET", `pages/${file}`, true)
        xhr.send();
        return;
    }
}