let total = parseFloat(prompt("Total harga barang:"));
let diskon = 0;
if (total >= 200000) diskon = total * 0.075;
let bayar = total - diskon;
console.log("Diskon : " + diskon);
console.log("Total bayar : " + bayar);