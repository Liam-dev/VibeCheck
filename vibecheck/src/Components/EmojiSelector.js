import React from 'react';
import { Button, Grid } from '@mui/material';

const emojis = [
  { icon: '😊', label: 'Happy' },
  { icon: '😔', label: 'Sad' },
  { icon: '😠', label: 'Angry' },
  { icon: '😃', label: 'Excited' },
  { icon: '😒', label: 'Bored' },
  { icon: '😵', label: 'Melting Face' },
];

const EmojiSelector = ({ onSelect }) => {
  return (
    <Grid container spacing={2}>
      {emojis.map((emoji, index) => (
        <Grid item key={index}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#3F4652',
              color: 'white',
              fontSize: '2rem', // Increase font size
              padding: '20px', // Increase padding
              minWidth: '60px', // Ensure minimum button size
              minHeight: '60px'
            }}
            onClick={() => onSelect(emoji.label)}
          >
            <span role="img" aria-label={emoji.label}>{emoji.icon}</span>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmojiSelector;