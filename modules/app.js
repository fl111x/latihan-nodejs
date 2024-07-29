// const fs = require(`node:fs`);
// // import {writeFile} from `node:fs`;
// // fs.writeFileSync(`test.txt`,`hello world secara synchronus`);

// fs.writeFile('test.txt', `Mengisi file secara asynchronus`, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

// File System
const fs = require(`node:fs`);

// Readline
const readline = require('node:readline');
// Object process destruc
const { stdin: input, stdout: output } = require('node:process');
const { json } = require('stream/consumers');

const rl = readline.createInterface({ input, output });

rl.question('Masukan nama kontak: ', (nama) => {
    rl.question(`Masukan nomor Telepon : `, (noTlp) =>{
        const contact = {nama,noTlp};
        const fileCont = JSON.parse(fs.readFileSync(`./contact.json`));
        fileCont.push(contact);
        fs.writeFile(`./contact.json`,JSON.stringify(fileCont),(err) => {
            if (err) throw err;
            console.log('successfully');
        })

        rl.close();
    })

});