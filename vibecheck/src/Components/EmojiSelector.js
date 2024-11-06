// vibecheck/src/Components/EmojiSelector.js
import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { emojis } from './EmojiList';

const EmojiSelector = ({ onSelect }) => {
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleSelect = (emoji) => {
    setSelectedEmoji(emoji);
    onSelect(emoji);
  };

  return (
    <Grid container spacing={2}>
      {emojis.map((emoji, index) => (
        <Grid item key={index}>
          <Button
            variant="contained"
            style={{
              backgroundColor: selectedEmoji === emoji.icon ? '#747981' : '#3F4652',
              color: 'white',
              fontSize: '2rem',
              padding: '20px',
              minWidth: '60px',
              minHeight: '60px'
            }}
            onClick={() => handleSelect(emoji.icon)}
          >
            <span role="img" aria-label={emoji.label}>{emoji.icon}</span>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmojiSelector;