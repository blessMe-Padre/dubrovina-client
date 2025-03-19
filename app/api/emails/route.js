import sendEmail from './../../utils/mail';

export async function POST(request) {
    try {
        // Если вы ожидаете данные из тела запроса, извлеките их
        const body = await request.json();
        console.log("Received data:", body);

        // Вызов функции отправки email
        const result = await sendEmail();

        return Response.json({
            accepted: result.accepted,
            message: "Email sent successfully",
        });
    } catch (error) {
        console.error("Error in API route:", error);
        return Response.json({
            message: 'что-то сломалось в роуте апи emails',
            error: error.message, // Добавьте больше информации об ошибке
        }, { status: 500 });
    }
}