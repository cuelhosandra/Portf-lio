async function injectContent() {
    let url = location.href;
    file = url.split('=');
    const resp = await fetch(`views/${file[1]}.html`);
    const html = await resp.text();
    let inject = document.getElementById('content');
    // document.inject.insertAdjacentHTML("content", html);
    inject.innerHTML =html;
}


injectContent();


function activelink(){
    let url = location.href;
    let view = url.split('=');
    let sessao = (view[1] != undefined) ? view[1] : 'inicio'; 
    document.getElementById(sessao).className += ' active ';


}

activeLink();

let elem = document.getElementById('teste');

console.log(elem);

elem.addEventListener("click", function() {
    alert ('cliquei no link')
})