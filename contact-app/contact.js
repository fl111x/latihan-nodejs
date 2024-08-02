// File System
const fs = require(`node:fs`);
const val = require(`validator`);
const chalk = require(`chalk`);
// Readline
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
// const rl = readline.createInterface({ input, output });
// function pertanyaan(isiPertanyaan) {
//     return new Promise((resolve,reject) => {
//         rl.question(isiPertanyaan,(jawaban) => {
//             resolve(jawaban);

//         })
//     })
// }

if (!fs.existsSync(`./data`)) {
  fs.mkdirSync(`./data`);
}

if (!fs.existsSync(`data/contact.json`)) {
  fs.writeFileSync(`data/contact.json`, `[]`);
}

function loadContact() {
  return JSON.parse(fs.readFileSync(`data/contact.json`, `utf-8`));
}

function simpan(nama, noHp, email) {
  const contact = { nama, noHp, email };
  const fileBuffer = loadContact();
  const duplikat = fileBuffer.find((contact) => contact.nama == nama);
  if (duplikat) {
    console.log(`Nama contact sudah terdaftar silahkan daftarkan nama lain`);
    return false;
  }
  if (!val.isEmail(email)) {
    console.log(chalk.red.inverse.bold(`Email tidak valid`));
    return false;
  }
  if (!val.isMobilePhone(noHp, `id-ID`)) {
    console.log(chalk.red.inverse.bold(`Nomor HP tidak valid`));
    return false;
  }
  fileBuffer.push(contact);
  fs.writeFileSync(`data/contact.json`, JSON.stringify(fileBuffer));
  console.log(chalk.green.inverse.bold(`Contact berhasil di simpan`));
}

function list() {
  const contacts = loadContact();
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} -- ${contact.noHp}`);
  });
}

function detail(nama) {
  const contacts = loadContact();
  const contact = contacts.find(
    (cont) => cont.nama.toLowerCase() == nama.toLowerCase()
  );

  if (!contact) {
    console.log(
      chalk.red.inverse.bold(`${nama} tidak ada di dalam daftar contact`)
    );
    return false;
  }

  console.log(contact.nama);
  console.log(contact.noHp);
  if (!contact.email) {
    return false;
  } else {
    console.log(contact.email);
  }
}

function remove(nama) {
  const contacts = loadContact();
  const newContact = contacts.filter((contact) => contact.nama != nama);
  if (contacts.length == newContact.length) {
    console.log(
      chalk.red.inverse.bold(`${nama} tidak ada di dalam daftar contact`)
    );
    return false;
  }

  fs.writeFileSync(`data/contact.json`, JSON.stringify(newContact));
  console.log(chalk.green.inverse.bold(`Contact berhasil di hapus`));
}

module.exports = { simpan, list, detail, remove };
