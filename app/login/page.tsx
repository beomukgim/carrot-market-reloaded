"use client"
import FormInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

export default function Login() {
    
    const [state, action] = useFormState(handleForm, {
        errors: []
    })
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">빈칸을 채우세요</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput name="loginid" type="email" placeholder="email" required></FormInput>
                <FormInput name="loginpw" type="password" placeholder="password" required></FormInput>
                <FormButton text="login" />
            </form>
            <SocialLogin />
        </div>
    )
}