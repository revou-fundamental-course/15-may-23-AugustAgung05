// KELILING
// TEMPAT DIV DENGAN ID BERADA
let tempatkeliling = document.getElementById("hasil-keliling");

// MEMBUAT PERHITUNGAN UNTUK KELILING S x 4 & MENAMBAHKAN CHILD KE TAG HTML
function hitungkeliling(){
    let keliling = document.getElementById("hitungan").value;
    keliling = parseInt(keliling);
    resultkel = keliling * 4;
    tempatkeliling.appendChild(tampilankeliling(keliling));
    tempatkeliling.appendChild(tampilanhasilkel(resultkel));
}

// MEMBUAT CHILD UNTUK INPUT KELILING
function tampilankeliling(keliling){
    let tampilank = document.createElement("div");
    tampilank.innerHTML = `
        <p>L = S x S</p>
        <p>L = ${keliling} x 4</p>
    `
    return tampilank;
}

// MEMBUAT CHILD UNTUK HASIL INPUT KELILING 
function tampilanhasilkel(resultkel){
    let hasil2 = document.createElement("div");
    hasil2.innerHTML = `
        <p>L = ${resultkel}</p>
        <button class="button" onclick="resetKeliling()">Reset</button>
    `
    return hasil2;
}

// BUTTON RESET UNTUK KELILING 
function resetKeliling() {
    document.getElementById("hasil-keliling").remove();
};


// LUAS
// TEMPAT DIV DENGAN ID BERADA
let tempathasilluas = document.getElementById("hasil-luas");

// MEMBUAT PERHITUNGAN UNTUK LUAS S x S & MENAMBAHKAN CHILD KE TAG HTML
function hitungluas(){
    let luas = document.getElementById("hitungan-luas").value
    luas = parseInt(luas);
    resultluas = luas * luas;
    tempathasilluas.appendChild(tampilanluas(luas));
    tempathasilluas.appendChild(tampilanhasiluas(resultluas));
}

// MEMBUAT CHILD UNTUK INPUT LUAS
function tampilanluas(luas){
    let tampilan1 = document.createElement("div");
    tampilan1.innerHTML = `
        <p>L = S x S</p>
        <p>L = ${luas} x ${luas}</p>
    `
    return tampilan1;
}

// MEMBUAT CHILD UNTUK HASIL INPUT LUAS
function tampilanhasiluas(resultluas){
    let hasil1 = document.createElement("div");
    hasil1.innerHTML = `
        <p>L = ${resultluas}</p>
        <button class="button" onclick="resetLuas()">Reset</button>
    `
    return hasil1;
}

// BUTTON RESET UNTUK LUAS
function resetLuas(){
    document.getElementById("hasil-luas").remove();
}
