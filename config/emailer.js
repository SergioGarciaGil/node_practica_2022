const nodemailer = require('nodemailer');


const createTrans = () => {
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "fbc5ce45cecedd",
            pass: "c25c3a07657ce7"
        }

    });
    return transport
}
const sendMail = async () => {
    const transporter = createTrans()
    const info = await transporter.sendMail({
        from: '"Sergio pract" <sergio.cuerda@gmail.com>',
        to: "sergioindustrial@hotmail.com",
        subject: "hello ",
        html: "<b>Hello world</b>",

    });
    console.log("Message sent: %s", info.messageId)
    return

};

exports.sendMail = () => sendMail()