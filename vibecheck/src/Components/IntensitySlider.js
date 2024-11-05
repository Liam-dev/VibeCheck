import React from 'react';
import { Slider, Typography } from '@mui/material';

const IntensitySlider = ({ value, onChange }) => {
  return (
    <div>
      <Typography gutterBottom>Intensity of Emotion</Typography>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="intensity-slider"
        step={1}
        marks
        min={1}
        max={5}
      />
    </div>
  );
};

export default IntensitySlider;