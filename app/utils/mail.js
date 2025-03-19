import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "subbotinnd@mail.ru",
        pass: "nmsbtxXtchCuNtpeJihR",
    },
});

async function sendEmail() {
    console.log('Начинается работа функции sendEmail');

    try {
        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
            to: "subbotinnd@mail.ru",
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Перебрасываем ошибку, чтобы её можно было поймать в API роуте
    }
}

export default sendEmail;
