const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].insertAdjacentHTML('beforebegin', '<span>Nombre de caractères : ' + p[i].textContent.length + '</span>');
}