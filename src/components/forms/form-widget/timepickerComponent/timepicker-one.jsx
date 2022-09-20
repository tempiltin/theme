import React, { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

function TimePickerOne() {
    const [time, setTime] = useState('12:34pm')

    return (
        <div className="app-light">
            <TimeKeeper
                time={time}
                onChange={(newTime) => setTime(newTime.formatted12)}
                switchToMinuteOnHourSelect
            />
        </div>
    )
}

export default TimePickerOne;