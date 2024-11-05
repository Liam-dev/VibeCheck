import React from 'react';
import { Slider, Typography } from '@mui/material';
import './IntensitySlider.css';

const IntensitySlider = ({ value, onChange }) => {
  return (
    <div className="intensity-slider">
      <Typography gutterBottom style={{ color: 'white' }}>Intensity of Emotion</Typography>
      <Slider
        value={value}
        onChange={onChange}
        aria-labelledby="intensity-slider"
        step={1}
        marks
        min={1}
        max={5}
        style={{ color: '#687386' }} // Update slider color
      />
    </div>
  );
};

export default IntensitySlider;