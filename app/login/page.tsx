"use client"
import FormInput from "../components/input";
import FormButton from "../components/button";
import SocialLogin from "../components/social-login";
import { useFormState } from "react-dom";
import { login } from "./action";

export default function Login() {
    
    const [state, action] = useFormState(login, null)
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">빈칸을 채우세요</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput name="loginid" type="email" placeholder="email" required errors={state?.fieldErrors.email}></FormInput>
                <FormInput name="loginpw" type="password" placeholder="password" required errors={state?.fieldErrors.password}></FormInput>
                <FormButton text="login" />
            </form>
            <SocialLogin />
        </div>
    )
}