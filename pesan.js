const tombol = document.getElementById("btnCB")
const elemen = document.getElementById("containerBesar")
const elemen2 = document.getElementById("containerBesar2")

tombol.addEventListener('click', function(){
    tombol.style.display = 'none'
    elemen.style.display = 'none'
    elemen2.style.display = 'flex'
})