async function injectContent() {
    let url = location.href;
    file = url.split('=');
    let view = (file[1] != undefined) ? file[1] : 'inicio';
    const resp = await fetch(`views/$(view.html`);

    const html = await resp.text();
    let inject = document.getElementById('content');
    inject.innerHTML = html;
}
