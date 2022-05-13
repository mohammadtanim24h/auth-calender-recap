import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = ({date, setDate}) => {
    return (
        <div className="h-[60vh] flex justify-center items-center">
            <div className="bg-slate-700 w-max h-min p-6 rounded-lg">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    modifiersStyles={{
                        selected: { color: "white", borderColor: "cornflowerblue", backgroundColor: "cornflowerblue" },
                    }}
                />
            </div>
        </div>
    );
};

export default Calender;
