import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LogoIcon } from "~/assets/icons/LogoIcon";
import { InputForm } from "~/components/InputForm";
import { path } from "~/configs/path";

import "~/styles/login_screen_sign_up_screen.scss";
import { isValidEmail, isValidPassword, isValidPhoneNumber } from "~/utils/validInput";

export const LoginScreen = () => {
    const [accountValue, setAccountValue] = useState("");
    const [password, setPassword] = useState("");
    const [canSubmit, setCanSubmit] = useState(false);

    useEffect(() => {
        if (
            (isValidPhoneNumber(accountValue) && isValidPassword(password, 6)) ||
            (isValidEmail(accountValue) && isValidPassword(password, 6))
        )
            setCanSubmit(true);
        else setCanSubmit(false);
    }, [password, accountValue]);

    const handleChangeAccountValue = (e) => {
        setAccountValue(e.target.value.trim());
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (canSubmit) {
                console.log("Account: ", accountValue);
                console.log("Password: ", password);
            }
        },
        [accountValue, password, canSubmit]
    );

    return (
        <section className="login-screen d-flex justify-content-center align-items-center">
            <div className="wrapper w-100">
                <form
                    className="form-login px-5 d-flex flex-column align-items-center"
                    onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <LogoIcon className="instagram-logo my-5" />
                    </div>
                    {/* Account */}
                    <InputForm
                        type="text"
                        value={accountValue}
                        onChange={handleChangeAccountValue}
                        label="Phone number, username, or email"
                    />
                    {/* Password */}
                    <InputForm type="password" value={password} onChange={handleChangePassword} label="Password" />

                    <Button
                        type="submit"
                        className={`${canSubmit ? "" : "disabled"} btn-submit my-3 fw-semibold w-100`}>
                        Log in
                    </Button>
                    <div className="separator fw-semibold w-100 text-center">OR</div>
                    <div className="forgot-password py-4">
                        <Link className="text-primary">Forgot password?</Link>
                    </div>
                </form>

                <div className="more-part mt-2 py-3 text-center">
                    <span>Don't have an account?</span>&nbsp;
                    <Link className="text-primary fw-semibold" to={path.signUp}>
                        Sign up
                    </Link>
                </div>
            </div>
        </section>
    );
};
