import AuthForm from "./AuthForm";

export default class Registration extends AuthForm {
    constructor(props) {
        super(props);
        this.state = {
            fields: [
                { type: "text", placeholder: "Username" },
                { type: "email", placeholder: "Email" },
                { type: "password", placeholder: "Password" },
                { type: "password", placeholder: "Confirm password" }
            ],
            links: [
                { value: "Login", path: '/login' },
                { value: "Forgot password", path: '/restore' }
            ],
            primaryButtonValue: "Sign up",
            title: "Sing Up",
            onSubmitClicked: () => {
                alert("Sign up clicked");
            }
        }
    }
}