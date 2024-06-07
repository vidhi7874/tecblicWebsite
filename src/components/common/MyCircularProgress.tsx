// Import necessary libraries
'use client';
import CircularSlider from '@fseehawer/react-circular-slider';
import React, { useState } from 'react';

const MyCircularProgress = ({
  progressColorFrom,
  progressColorTo,
  trackColor,
  trackSize,
  knobSize,
  knobColor,
}: any) => {
  const [valueData, setValueData] = useState(70);

  return (
    <>
      <CircularSlider
        label=" "
        labelColor="#ffffff"
        progressColorFrom={progressColorFrom ? progressColorFrom : '#00ff00'}
        progressColorTo={progressColorTo ? progressColorTo : '#00ff00'}
        trackColor={trackColor || '#ffffff'}
        trackSize={trackSize ? trackSize : 5}
        progressSize={5}
        min={0}
        max={100}
        valueFontSize={'1rem'}
        appendToValue={'+'}
        progressLineCap={'round'}
        verticalOffset={'0rem'}
        knobSize={knobSize ? knobSize : 18}
        knobColor={knobColor ? knobColor : '#1DBD6E'}
        width={70}
        dataIndex={valueData}
        onChange={(value) => {
          console.log(value);
          setValueData(value);
        }}
      />
    </>
  );
};

export default MyCircularProgress;
