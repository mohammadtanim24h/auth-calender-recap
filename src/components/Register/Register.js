import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
    }
    return (
        <div className='h-[60vh] flex justify-center mt-12 md:mt-24'>
            <form onSubmit={handleSubmit} className="w-96">
                <h2 className='text-neutral text-2xl text-center mb-4'>Register</h2>
                <input type="text" name='name' placeholder='Name' className="input input-bordered w-full max-w-lg mb-2" />
                <input name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-lg mb-2" />
                <input name='password' type="password" placeholder="Password" className="input input-bordered w-full max-w-lg mb-2" />
                <input type="submit" className='w-full max-w-lg btn btn-outline' value="Register" />
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