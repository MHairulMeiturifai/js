let harga = parseFloat(prompt("Harga makanan:"));
let pajak = harga * 0.1;
let fee = harga * 0.05;
let bayar = harga + pajak + fee;
console.log("Harga makanan : " + harga);
console.log("Pajak : " + pajak);
console.log("Fee : " + fee);
console.log("Harga bayar : " + bayar);