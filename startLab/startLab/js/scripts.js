const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogueBox");
const closebutton = document.querySelector('#closeButton')
const dialogBoxText = document.querySelector("#dialogueBox div");

openButton1.addEventListener('click', ()=> {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `apples have 96  calories`
})
openButton2.addEventListener('click', ()=> {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `i like bannanas`
})
openButton3.addEventListener('click', ()=> {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `oranges are not yellow`
})
closebutton.addEventListener('click', ()=>{
    dialogBox.close();
})