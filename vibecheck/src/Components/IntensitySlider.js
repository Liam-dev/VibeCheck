import React from 'react';
import { Slider, Typography, Grid } from '@mui/material';
import './IntensitySlider.css';

const IntensitySlider = ({ value, onChange }) => {
  return (
    <div className="intensity-slider">
      <Typography gutterBottom style={{ color: 'white' }}>Intensity of Emotion</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography style={{ color: 'white', fontSize: '0.75rem', marginTop: '8px' }}>low</Typography>
        </Grid>
        <Grid item xs>
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
        </Grid>
        <Grid item>
          <Typography style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold', marginTop: '8px' }}>HIGH</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default IntensitySlider;