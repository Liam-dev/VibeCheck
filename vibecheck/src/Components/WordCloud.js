import React from 'react';
import { Grid, Typography } from '@mui/material';

const emojis = [
  { icon: '😊', label: 'Happy' },
  { icon: '😔', label: 'Sad' },
  { icon: '😠', label: 'Angry' },
  { icon: '😃', label: 'Excited' },
  { icon: '😒', label: 'Bored' },
  { icon: '😵', label: 'Melting Face' },
];

const emojiIcons = emojis.map(emoji => emoji.icon);

const WordCloud = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((entry, index) => (
        <Grid item key={index} style={{ textAlign: 'center' }}>
          <Typography style={{ fontSize: `${entry.intensity * 15}px` }}>
            <span role="img" aria-label={entry.emoji} style={{ fontSize: `${entry.intensity * 20}px` }}>
              {emojiIcons.includes(entry.emoji) ? entry.emoji : '❓'}
            </span>
          </Typography>
          {entry.name && (
            <Typography style={{ fontSize: '14px', color: 'white' }}>
              {entry.name}
            </Typography>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default WordCloud;