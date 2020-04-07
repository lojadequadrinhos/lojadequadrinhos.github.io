fs = require("fs");
const data = require("./comics");

function normalizePrice(price) {
    return price === null ? null : price.match(/[0-9,]+/)[0].replace(",", ".");
}

function slugify(text) {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"

    const newText = !text ? null : text.split('').map(
        (letter, i) => letter.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i)));

    return newText
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-y-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

function snakeCasefy(word) {
    return word.toLowerCase()
        .replace(/ç/g, "c")
        .replace(/[áãâ]/g, "a")
        .replace(/[éê]/g, "e")
        .replace(/[íî]/g, "i")
        .replace(/[ôõ]/g, "o")
        .replace(/[ûú]/g, "u")
        .replace(/\W/g, "_")
        .replace(/_$/g, "")
        .replace(/[_]{2,}/g, "_");
}

const comics = data.map(item => {
    item["Preço"] = normalizePrice(item["Preço"]);
    return item;
}).map(item => {
    return Object.keys(item).reduce((total, key) => {
        total[snakeCasefy(key)] = item[key];
        return total;
    }, {});
});


function _prepareMarkdownFile(data) {
    return `---
layout: post
titulo:  "${data.titulo}"
preco:  ${data.preco}
capa: ${data.capa}
---

${data.descricao}`;

}

comics.filter(item => {
    return item.titulo !== null && (item.titulo.indexOf("aranha") > 0 || item.titulo.indexOf("atman") > 0)
}).forEach(item => {
    fs.writeFile(`../_comics/${slugify(item.titulo)}.md`, _prepareMarkdownFile(item), function (err, data) {
        if (err) {
            return console.log(err);
        }
    });
});