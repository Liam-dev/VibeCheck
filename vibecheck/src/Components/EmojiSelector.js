import React from 'react';
import { Button, Grid } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const emojis = [
  { icon: <EmojiEmotionsIcon />, label: 'Happy' },
  { icon: <SentimentDissatisfiedIcon />, label: 'Sad' },
  { icon: <SentimentVeryDissatisfiedIcon />, label: 'Angry' },
  { icon: <SentimentSatisfiedIcon />, label: 'Excited' },
  { icon: <SentimentSatisfiedAltIcon />, label: 'Bored' },
  { icon: <SentimentVerySatisfiedIcon />, label: 'Melting Face' },
];

const EmojiSelector = ({ onSelect }) => {
  return (
    <Grid container spacing={2}>
      {emojis.map((emoji, index) => (
        <Grid item key={index}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSelect(emoji.label)}
          >
            {emoji.icon}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default EmojiSelector;