function openDialog(selectorID){
    const selector = document.getElementById(selectorID)
    
    selector.showModal()

}
function closeDialog(selectorID){
    const selector = document.getElementById(selectorID)
    selector.close()

}
// nonprofit dialog
document.getElementById('show-nonprofit').addEventListener('click', ()=>{
    openDialog('nonprofit-dialog')
})
document.getElementById('close-nonprofit').addEventListener('click', ()=>{
    closeDialog('nonprofit-dialog')
})
// bronze dialog
document.getElementById('show-bronze').addEventListener('click', ()=> {
    openDialog('bronze-dialog')
})
document.getElementById('close-bronze').addEventListener('click', ()=> {
    closeDialog('bronze-dialog')
})
// silver dialog
document.getElementById('show-silver').addEventListener('click', ()=> {
    openDialog('silver-dialog')
})
document.getElementById('close-silver').addEventListener('click', ()=> {
    closeDialog('silver-dialog')
})
// gold dialog
document.getElementById('show-gold').addEventListener('click', ()=> {
    openDialog('gold-dialog')
})
document.getElementById('close-gold').addEventListener('click', ()=> {
    closeDialog('gold-dialog')
})


// timestamp creation
document.querySelector('.form1').addEventListener('submit', ()=> {
    const currenttimestamp = new Date();
    const formattedDate = currenttimestamp.toLocaleDateString('en-US')

    document.getElementById('timestamp').value = formattedDate

})



