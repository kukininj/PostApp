import * as React from "react";

interface Props {
    name: string;
}

const Input: React.FC<{ label: string; type: string; }> = ({ label, type }) => {
    let id = `form_${label}`
    return (
        <div className="form-outline mb-4">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input type={type} id={id} className="form-control" />
        </div>
    );
};

const Login: React.FC<Props> = () => {
    return (
        <main>
            <form method="POST" action="/login">
                <Input label="Email address" type="text"/>
                <Input label="Password" type="password"/>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
        </main>
    );
}

export default Login;
