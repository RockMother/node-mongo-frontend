import AuthForm from "./AuthForm";

export default class Login extends AuthForm {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                { type: "text", placeholder: "Username or email" },
                { type: "password", placeholder: "Password" },
            ],
            links: [
                { value: "Register", path: '/register' },
                { value: "Forgot password", path: '/restore' }
            ],
            primaryButtonValue: "Log in",
            title: "Login",
            onSubmitClicked: () => {
                alert("login clicked");
            }
        }
    }
}