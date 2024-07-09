const tombol2 = document.getElementById("btnCB2")
const elemen2 = document.getElementById("containerBesar2")
const elemen3 = document.getElementById("divBack")

tombol2.addEventListener('click', function(){
    elemen2.style.display = 'flex'
    tombol2.style.display = 'none'
    elemen3.style.display = 'flex'
})