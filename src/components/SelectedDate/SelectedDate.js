import { format } from 'date-fns';
import React from 'react';

const SelectedDate = ({date}) => {
    return (
        <div>
            <h2 className='text-4xl text-center text-white'>You have selected {date && format(date, "PP")}</h2>
        </div>
    );
};

export default SelectedDate;