import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { green } from '@mui/material/colors';

function App() {
  const [turn1, setTurn1] = useState(0);
  const [turn2, setTurn2] = useState(0);
  const [place1, setPlace1] = useState(0);
  const [place2, setPlace2] = useState(0);
  const [round1, setRound1] = useState(true);
  const [round2, setRound2] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // const [introPage, setIntroPage] = useState(true);

  const [player1, setPlayer1] = useState("Ilgin");
  const [player2, setPlayer2] = useState("Simon");

  const item = [
    "START",
    "TAKE A SHOT",
    "TWERK 30 SECONDS OR SHOW THE LAST PICTURE :)",
    "GROUP SELFIE",
    "SAFE ZONE",
    "MIX IT UP!",
    "TRUTH OR DARE",
    "MAKE A RULE",
    "PICK A PERSON TO TAKE 3 SHOTS",
    "SPIN THE BOTTLE AND GIVE A LAB DANCE...",
    "BOTH NEIGHBOURS DRINK",
    "EVERYONE TAKE A SHOT",
    "WHAT IS YOUR BIGGEST TURN ON ?",
    "DRAW A TATTOO ON SOMEONE",
    "ROCK PAPER SCISSORS (LOSERS TAKES A SHOT)",
    "2 + 1 = 3 SHOTS !",
    "SAFE ZONE",
    "SHARE A FUNNY STORY",
    "FLIP A COIN (HEADS: 1 SHOT, TAILS: 2 SHOTS)",
    "BOYS ONLY ! DRINK UP :)",
    "2 TRUTHS, 1 LIE (LOSERS DRINK UP)",
    "TAKE A SHOT WITH NO HANDS",
    "ASK A QUESTION TO WHO YOU WANT",
    "DO 10 SQUATS TAKING 3 SHOTS",
    "NEVER HAVE I EVER",
    "EVERYONE TAKE A SHOT",
    "GIRLS ONLY ! DRINK UP :)",
    "GUESS THE WORD",
    "FINISH EVERYONE'S DRINK",
    "SAFE ZONE",
    "SHOT GUN",
    "TAKE A BLUE TICKET",
    "TAKE A GREEN TICKET",
    "TAKE AN ORANGE TICKET",
    "TAKE A PURPLE TICKET",
    "FINISH"
  ];

  //Math.floor(Math.random() * 6 + 1)
  const playing1 = () => {
    if (!isFinished) {
      setRound1(true);
      setRound2(false);
      const dice = Math.floor(Math.random() * 6 + 1);
      const place = place1;
      setTurn1(dice);
      setPlace1(dice + place);
      if (item[place === "FINISH"] || setPlace1 > item.length) {
        setIsFinished(true);
        setPlace1(item.length - 1);
      }
    }
  }

  const playing2 = () => {
    if (!isFinished) {
      setRound1(false);
      setRound2(true);
      const dice = Math.floor(Math.random() * 6 + 1);
      const place = place2;
      setTurn2(dice);
      setPlace2(dice + place);
      if (item[place === "FINISH"] || setPlace2 > item.length) {
        setIsFinished(true);
        setPlace2(item.length - 1);
      }
    }
  }


  return (
    <Container>
      <br />
      <Typography variant="h2" component="h2" align="center" pb={10}>Single Shipment Calculation</Typography>
      <br />
      <Grid container direction="column" justifyContent="space-evenly">
        <Grid item p={5} sx={{ width: "%100", height: 500 }}>
          <Grid container direction="row" justifyContent="space-evenly">
            <Button item variant="contained" onClick={playing1} sx={{ width: 300, height: 300 }}>{player1}</Button>
            <Button item variant="contained" onClick={playing2} sx={{ width: 300, height: 300 }}>{player2}</Button>
          </Grid>
        </Grid>
        <Grid item p={5} sx={{ width: "%100", height: 500 }}>
          <Grid container direction="column" justifyContent="space-beteen">
            <Typography item variant="h4" component="h4" align="center" sx={{ color: green, fontWeight: 'bold' }}>{round1 ? player1 : player2}'s Turn</Typography>
            <Typography item variant="h6" component="h6" align="center" sx={{ color: green, fontWeight: 'bold' }}>{round1 ? item[place1] : item[place2]}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
