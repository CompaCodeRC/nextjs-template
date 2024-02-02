import AuthLayout from "@layouts/auth_layout";
import LoginView from "@views/auth/login";

export default function Login() {
    return (
        <LoginView/>
    )
}

Login.getLayout = function getLayout(page) {
    return <AuthLayout>{page}</AuthLayout>;
};