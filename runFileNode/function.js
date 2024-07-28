function sayHello(nama,umur) {
    return `hallo nama saya ${nama}, dan umur saya adalah ${umur}`;
}

const kelas = 13;
const mahasiswa = {
    nama:`Ammar`,
    kelas:`A`,
    golonganDarah:`AB`,
    sapa() {
        return `halo nama saya ${this.nama}, saya kelas ${this.kelas}, dan golongan darah ${this.golonganDarah}`;
    }
}


module.exports = {sayHello,kelas,mahasiswa};