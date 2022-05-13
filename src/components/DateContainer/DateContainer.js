import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Calender from '../Calender/Calender';
import SelectedDate from '../SelectedDate/SelectedDate';

const DateContainer = () => {
    const [date, setDate] = useState(new Date());


    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    if(!user) {
        navigate("/login")
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center mt-16">
                <button type="button" disabled>
                    Loading...
                </button>
            </div>
        );
    }
    if (!user?.emailVerified) {
        return (
            <div className="container mx-auto text-center">
                <p className="text-red-500 text-3xl">You are not verified</p>
                <p className="text-neutral text-xl">
                    Please verify your email we sent you.
                </p>
            </div>
        );
    }
    return (
        <div>
            <Calender date={date} setDate={setDate}></Calender>
            <SelectedDate date={date}></SelectedDate>
        </div>
    );
};

export default DateContainer;