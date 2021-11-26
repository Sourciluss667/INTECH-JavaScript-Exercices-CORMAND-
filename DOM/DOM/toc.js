const allHeaders = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

let html = '';
let olCount = 0;
let ilCount = 0;

for (let i = 0; i < allHeaders.length; i++) {
    if (i === 0) {
        html += '<ol><li>' + allHeaders[i].textContent;
        olCount++;
        ilCount++;
    } else {
        const diff = Number(allHeaders[i].tagName[1]) - Number(allHeaders[i-1].tagName[1]);

        if (diff === 0) {
            html += '</li>'
            ilCount--;
        } else if (diff > 0) {
            for (let j = 0; j < Math.abs(diff); j++) {
                html += '</li><ol>';
                olCount++;
                ilCount--;
            }
        } else if (diff < 0) {
            for (let j = 0; j < Math.abs(diff); j++) {
                html += '</li></ol>';
                olCount--;
                ilCount--;
            }
        }

        html += '<li>' + allHeaders[i].textContent;
        ilCount++;
    }
}

html += '</li>';
ilCount--;
while (olCount > 0) {
    html += '</ol>';
    olCount--;
}

document.getElementsByTagName('body')[0].innerHTML = html + document.getElementsByTagName('body')[0].innerHTML;