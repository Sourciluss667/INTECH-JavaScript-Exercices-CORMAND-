const all = document.getElementsByTagName('*');
console.log(all)
for (let i = 0; i < all.length; i++) {
    if (all[i].nodeName !== 'HTML' && all[i].nodeName !== 'HEAD' && all[i].nodeName !== 'BODY') {
        all[i].textContent = all[i].textContent.toUpperCase();
    }
}