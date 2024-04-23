
import FormInput from "../components/input";
import FormButton from "../components/button";

export default function SMSLogin() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">SMS Login</h1>
                <h2 className="text-xl">Verify your phone number</h2>
            </div>
            <form className="flex flex-col gap-3">
                <FormInput type="number" placeholder="Phone numver" required errors={[]}></FormInput>
                <FormInput type="number" placeholder="verification code" required errors={[]}></FormInput>
                <FormButton loading={false} text="Verify" />
            </form>
        </div>
    )
}