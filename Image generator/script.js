let img = document.getElementById('img');
let button = document.getElementById('button');

function getnewImg(){
    button.textContent = "Loading..."
    img.src = "https://thispersondoesnotexist.com"
    img.onload = ()=>{
        button.textContent = "New Image"
    }
}

getnewImg();

button.addEventListener('click',getnewImg)
