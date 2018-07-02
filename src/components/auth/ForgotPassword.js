import AuthForm from "./AuthForm";

export default class ForgotPassword extends AuthForm {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                { type: "text", placeholder: "Username or email" }
            ],
            links: [
                { value: "Login", path: '/login' },
                { value: "Register", path: '/register' }
            ],
            primaryButtonValue: "Restore",
            title: "Forgot password",
            onSubmitClicked: () => {
                alert("Restore clicked");
            }
        }
    }
}