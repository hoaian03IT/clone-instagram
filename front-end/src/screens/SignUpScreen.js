import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogoIcon } from "~/assets/icons/LogoIcon";
import { InputForm } from "~/components/InputForm";
import { path } from "~/configs/path";

import "~/styles/login_screen_sign_up_screen.scss";
import { isValidEmail, isValidFullName, isValidPassword, isValidPhoneNumber } from "~/utils/validInput";

export const SignUpScreen = () => {
    const [accountValue, setAccountValue] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (
            (isValidEmail(accountValue) || isValidPhoneNumber(accountValue)) &&
            isValidPassword(password, 6) &&
            isValidFullName(fullName) &&
            username
        )
            setCanSubmit(true);
        else setCanSubmit(false);
    }, [password, accountValue, username, fullName]);

    const handleChangeAccountValue = (e) => {
        setAccountValue(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeFullName = (e) => {
        setFullName(e.target.value);
    };

    const handleChangeUsername = (e) => {
        setUsername(e.target.value.trim());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="sign-up-screen d-flex justify-content-center align-items-center">
            <div className="wrapper w-100">
                <form
                    className="form-login px-5 d-flex flex-column align-items-center"
                    onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <LogoIcon className="instagram-logo my-5" />
                    </div>
                    {/* account */}
                    <InputForm
                        type="text"
                        value={accountValue}
                        onChange={handleChangeAccountValue}
                        label="Mobile Number or Email"
                    />
                    {/* full name */}
                    <InputForm type="text" value={fullName} onChange={handleChangeFullName} label="Full Name" />
                    {/* username */}
                    <InputForm type="text" value={username} onChange={handleChangeUsername} label="Username" />
                    {/* password */}
                    <InputForm type="password" value={password} onChange={handleChangePassword} label="Password" />

                    <Button
                        type="submit"
                        className={`${canSubmit ? "" : "disabled"} btn-submit my-3 fw-semibold w-100`}>
                        Sign up
                    </Button>
                    <p className="more-information text-center">
                        People who use our service may have uploaded your contact information to Instagram.&nbsp;
                        <Link className="text-primary">Learn More</Link>
                    </p>
                    <p className="more-information text-center mb-4">
                        By signing up, you agree to our <Link className="text-primary">Terms</Link>, &nbsp;
                        <Link className="text-primary">Privacy Policy</Link> and &nbsp;
                        <Link className="text-primary">Cookies Policy</Link>.
                    </p>
                </form>

                <div className="more-part mt-2 py-3 text-center">
                    <span>Don't have an account?</span>&nbsp;
                    <Link className="text-primary fw-semibold" to={path.login}>
                        Login
                    </Link>
                </div>
            </div>
        </section>
    );
};
