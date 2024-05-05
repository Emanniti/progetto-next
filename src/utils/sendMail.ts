import emailjs from "emailjs-com";

export default function sendMail(name: string, email: string, message: string) {
    if (
        process.env.NEXT_PUBLIC_SERVICE !== undefined &&
        process.env.NEXT_PUBLIC_TEMPLATE !== undefined &&
        process.env.NEXT_PUBLIC_USER_ID !== undefined
    ) {
        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE,
                process.env.NEXT_PUBLIC_TEMPLATE,
                {
                    from_name: name,
                    to_name: email,
                    message: message,
                },
                process.env.NEXT_PUBLIC_USER_ID
            )
            .then(
                (_result) => {},
                (error) => {
                    console.log(error.text);
                }
            );
    } else {
        console.log(`Errore nella lettura delle variabili d'ambiente`);
    }
}