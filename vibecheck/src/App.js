// vibecheck/src/App.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import EmojiSelector from './Components/EmojiSelector';
import IntensitySlider from './Components/IntensitySlider';
import WordCloud from './Components/WordCloud';
import './App.css';

const App = () => {
  const [emoji, setEmoji] = useState('');
  const [intensity, setIntensity] = useState(1);
  const [name, setName] = useState('');
  const [entries, setEntries] = useState([]);

  const handleAddEntry = () => {
    if (emoji === '') {
      alert('Please select an emoji before adding emotion.');
      return;
    }
    setEntries([...entries, { emoji, intensity, name }]);
    setEmoji('');
    setIntensity(1);
    setName('');
  };

  return (
    <Container>
      <h1>VibeCheck 😎</h1>
      <Typography variant="h6" style={{ color: 'white' }}>
        Select an emoji to represent your current vibe
      </Typography>
      <EmojiSelector onSelect={setEmoji} />
      <IntensitySlider value={intensity} onChange={(e, newValue) => setIntensity(newValue)} />
      <TextField
        label={<i>Your Name (optional)</i>}
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          style: { color: 'white', backgroundColor: '#5d626b' }
        }}
        InputLabelProps={{
          style: { color: 'white' }
        }}
      />
      <Button variant="contained" color="primary" onClick={handleAddEntry} style={{ backgroundColor: '#3F4652' }}>
        Add Emotion
      </Button>
      <WordCloud data={entries} />
    </Container>
  );
};

export default App;