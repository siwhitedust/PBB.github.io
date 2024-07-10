const tombol = document.getElementById("btnCK2");
const elemen = document.getElementById("containerKecil2")
const elemenAtas = document.getElementById("containerBesar")

tombol.addEventListener('click', function(){
    elemen.style.display = 'flex'
    elemenAtas.style.display = 'none'
})