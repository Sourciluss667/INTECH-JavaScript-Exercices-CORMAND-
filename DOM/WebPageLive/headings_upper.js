document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(tag => {
    tag.textContent = tag.textContent.charAt(0).toUpperCase() + tag.textContent.slice(1);
});