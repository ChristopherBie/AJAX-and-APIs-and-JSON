let button = document.querySelector('button');
let displayInspiration = document.querySelector('p');
let displayAuthor = document.querySelector('span');

button.addEventListener('click', function() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState < 4) {
            displayInspiration.innerText = 'loading...';
        }
        if(this.status !== 200) {
            displayInspiration.innerText += 'There was an error.';
        }
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let inspiration = JSON.parse(this.responseText);
            displayInspiration.innerText = inspiration.content;
            displayAuthor.innerText = inspiration.author;
        }
    }
    ajax.open("GET", "https://api.quotable.io/random", true);
    ajax.send();
});