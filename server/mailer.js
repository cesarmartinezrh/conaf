const nodemailer = require('nodemailer')



async function main(){

    let transporter = nodemailer.createTransport({
        host: '10.254.253.1',
        port: 2525,
        secure: false
    })

    let info = await transporter.sendMail({
        from: '"CONAF TÉCNICA" <conaf.tecnica@conafor.gob.mx>"',
        to: 'cesar.martinez@conafor.gob.mx',
        subject: 'Prueba',
        html: '<b>Hello world?</b>'
    })




}

main().catch(console.error)