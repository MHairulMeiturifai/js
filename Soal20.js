let huruf = prompt("Masukkan huruf A-Z:").toLowerCase();
let vokal = "aiueo";
if (huruf >= 'a' && huruf <= 'z') {
    if (vokal.includes(huruf)) console.log(huruf + " adalah vokal");
    else console.log(huruf + " adalah konsonan");
} else console.log("Bukan huruf");