import React, { Fragment, useState } from 'react';
import TimeKeeper from 'react-timekeeper';


const TimePickerThree = () => {
  const [time, setTime] = useState('12:34pm');
  const [time1, setTime1] = useState('12:34pm');
  // eslint-disable-next-line
  const [isValid, setIsValid] = useState(true)

  return (
    <Fragment>
      <TimeKeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted12)}
        hour24Mode
        coarseMinutes={15}
        forceCoarseMinutes
      />

      <TimeKeeper
        time={time1}
        onChange={(newTime) => {
          setIsValid(newTime.isValid)
          setTime1(newTime.formatted12)
        }}
        disabledTimeRange={{ from: '6:20', to: '20:45' }}
      />

    </Fragment>
  )
}

export default TimePickerThree;