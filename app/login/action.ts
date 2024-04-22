"use server"

export async function handleForm (prevState:any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("i run in the server baby!");
    return {
        errors: ["wrong password", "password too short"]
    }
}