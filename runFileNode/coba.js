/*node js menggunakan system module dalam javascript yang dimana setiap file javascript adalah 1 module 
atau 1 file 1 module yang dimana file atau module yang berbeda tidak dapat sembarangan mengakses file atau module yang lain nya
jika file atau module akan di akses melalui file atau module lain dapat menggunakan fungsi require() */
const coba = require(`./function.js`);
const nama = `Ammar`;
const umur = 19;
console.log(
    coba.kelas,
    coba.mahasiswa.sapa(),
    coba.sayHello(nama,umur)
);