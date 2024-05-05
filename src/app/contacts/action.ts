'use server'
import axios from 'axios'
export async function fetchCall(token: string) {
    let data;
    await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_SECRET_CAPTCHA_KEY}&response=${token}`)
    .then(response => data = response.data);
    return data
}