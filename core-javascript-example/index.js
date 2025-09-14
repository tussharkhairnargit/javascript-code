const _document = document.getRootNode();
console.log(_document)
let body = _document.body;

let section = document.createElement('section');
section.innerHTML = defineSectionElement();
body.appendChild(section);


function defineSectionElement() {
    return `
    <p>
    This is simple tempalte , injected through javascript code.
    <p>
       <strong style="background-color: yellow">
    This is simple tempalte , injected through javascript code.
    <strong>
    `
}