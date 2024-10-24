// dialog boxes
function openDialog(selectorID){
    const selector = document.getElementById(selectorID)
    selector.showModal()
}
function closeDialog(selectorID){
    const selector = document.getElementById(selectorID)
    selector.close()
}

document.getElementById('show-projects').addEventListener('click', ()=>{
    openDialog("project-dialog")
})
document.getElementById('close-projects').addEventListener('click', ()=>{
    closeDialog("project-dialog")
})
document.getElementById('show-videos').addEventListener('click', ()=> {
    openDialog('videos-dialog')
})
document.getElementById("close-videos").addEventListener('click', ()=> {
    closeDialog('videos-dialog')
})
