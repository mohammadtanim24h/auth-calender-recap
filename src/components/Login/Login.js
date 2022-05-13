import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div className="h-[60vh] flex justify-center mt-12 md:mt-24">
            <form onSubmit={handleSubmit} className="w-96">
                <h2 className="text-neutral text-2xl text-center mb-4">
                    Login
                </h2>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full max-w-lg mb-2"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-lg mb-2"
                />
                <input
                    type="submit"
                    className="w-full max-w-lg btn btn-outline"
                    value="Login"
                />
                {error && <p className="text-center text-red-600">{error.message}</p> }
                <p className="text-base mt-2 ml-2 text-neutral">
                    New user?{" "}
                    <Link to="/register" className="text-primary">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
