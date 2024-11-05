import React from 'react';
import { Grid, Typography } from '@mui/material';

const WordCloud = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((entry, index) => (
        <Grid item key={index} style={{ fontSize: `${entry.intensity * 10}px` }}>
          <Typography>
            {entry.emoji} {entry.name && `- ${entry.name}`}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default WordCloud;