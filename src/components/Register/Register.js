import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    if (user) {
        console.log(user);
    }
    return (
        <div className="h-[60vh] flex justify-center mt-12 md:mt-24">
            <form onSubmit={handleSubmit} className="w-96">
                <h2 className="text-neutral text-2xl text-center mb-4">
                    Register
                </h2>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-lg mb-2"
                />
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
                    value="Register"
                />
                <p className="text-base mt-2 ml-2 text-neutral">
                    Already an user?{" "}
                    <Link to="/login" className="text-primary">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
