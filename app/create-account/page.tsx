"use client"

import Input from "../components/input";
import Button from "../components/button";
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
                <Input 
                    name="username" type="text" placeholder="유저이름" 
                    required errors={state?.fieldErrors.username}
                    minLength={3} maxLength={10}></Input>
                <Input name="email" type="email" placeholder="email" required
                    errors={state?.fieldErrors.email}></Input>
                <Input name="password" type="password" placeholder="password" required 
                    errors={state?.fieldErrors.password} minLength={4} ></Input>
                <Input name="confirm_password" type="password" placeholder="password confirm" 
                    required errors={state?.fieldErrors.confirm_password} minLength={4}></Input>
                <Button text="create-account" />
            </form>
            <SocialLogin />
        </div>
    )
}