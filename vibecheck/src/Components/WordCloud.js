import React from 'react';
import { Grid, Typography } from '@mui/material';

const emojis = ['😊', '😔', '😠', '😃', '😒', '😵'];

const WordCloud = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((entry, index) => (
        <Grid item key={index} style={{ textAlign: 'center' }}>
          <Typography style={{ fontSize: `${entry.intensity * 10}px` }}>
            <span role="img" aria-label={entry.emoji} style={{ fontSize: `${entry.intensity * 10}px` }}>
              {emojis.includes(entry.emoji) ? entry.emoji : '❓'}
            </span>
          </Typography>
          {entry.name && (
            <Typography style={{ fontSize: '14px', color: 'white' }}> {/* Ensure text color is visible */}
              {entry.name}
            </Typography>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default WordCloud;