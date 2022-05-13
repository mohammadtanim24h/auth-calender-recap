import React, { useState } from 'react';
import Calender from '../Calender/Calender';
import SelectedDate from '../SelectedDate/SelectedDate';

const DateContainer = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Calender date={date} setDate={setDate}></Calender>
            <SelectedDate date={date}></SelectedDate>
        </div>
    );
};

export default DateContainer;