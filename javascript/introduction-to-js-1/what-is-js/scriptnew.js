
//Javascript goes here
function createParagraph() {
    const para = document.createElement('p');
    para.textContent = 'You clicked the button!';
    document.body.appendChild(para);
}
const btns = document.querySelectorAll("button");

for (const btn of btns) {
    btn.addEventListener('click', createParagraph);
}
