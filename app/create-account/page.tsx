"use client"

import FormInput from "../components/form-input";
import FormButton from "../components/form-btn";
import SocialLogin from "../components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./action";

export default function CreateAccount() {
    const [state, action] = useFormState(createAccount, null)
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">빈칸을 채우세요</h2>
            </div>
            <form action={action} className="flex flex-col gap-3">
                <FormInput name="username" type="text" placeholder="유저이름" required errors={state?.fieldErrors.username}></FormInput>
                <FormInput name="email" type="email" placeholder="email" required errors={state?.fieldErrors.email}></FormInput>
                <FormInput name="password" type="password" placeholder="password" required errors={state?.fieldErrors.password}></FormInput>
                <FormInput name="confirm_password" type="password" placeholder="password confirm" required errors={state?.fieldErrors.confirm_password}></FormInput>
                <FormButton text="create-account" />
            </form>
            <SocialLogin />
        </div>
    )
}