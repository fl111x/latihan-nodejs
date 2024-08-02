// const fs = require(`node:fs`);
// // import {writeFile} from `node:fs`;
// // fs.writeFileSync(`test.txt`,`hello world secara synchronus`);

// fs.writeFile('test.txt', `Mengisi file secara asynchronus`, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// const {pertanyaan, simpan} = require(`./contact.js`);

// const main =  async () => {
//     const nama = await pertanyaan(`Nama Lengkap : `);
//     const noHp = await pertanyaan(`Nomor HP : `);
//     const email = await pertanyaan(`Email : `);

//     simpan(nama,noHp,email);

//     console.log(`Kontak tersimpan`);
// }

// main();

const yargs = require(`yargs`);
const { simpan, list, detail, remove } = require(`./contact`);
yargs
  .command({
    command: `add`,
    describe: `Menambahkan contact`,
    builder: {
      nama: {
        describe: `Nama lengkap`,
        demandOption: true,
        type: `string`,
      },
      email: {
        describe: `Email`,
        demandOption: false,
        type: `string`,
      },
      noHP: {
        describe: `Nomor HP`,
        demandOption: true,
        type: `string`,
      },
    },
    handler(argv) {
      const contact = {
        nama: argv.nama,
        email: argv.email,
        noHP: argv.noHP,
      };
      simpan(contact.nama, contact.noHP, contact.email);
    },
  })
  .demandCommand();

yargs.command({
  command: `list`,
  describe: `Menampilkan semua contact`,
  handler() {
    list();
  },
});

yargs.command({
  command: `detail`,
  describe: `Melihat isi detail contact dengan parameter nama`,
  builder: {
    nama: {
      describe: `Nama lengkap`,
      demandOption: true,
      type: `string`,
    },
  },
  handler(argv) {
    detail(argv.nama);
  },
});

yargs.command({
  command: `rm`,
  describe: `Menghapus data contact`,
  builder: {
    nama: {
      describe: `Nama lengkap`,
      demandOption: true,
      type: `string`,
    },
  },
  handler(argv) {
    remove(argv.nama);
  },
});

yargs.parse();
