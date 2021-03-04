import * as Tone from "tone";

export const getRandomNote = () => {
  const notes = ["A4", "B4", "C4", "D4", "E4", "F4", "G4"];
  return notes[Math.floor(Math.random() * notes.length)];
};

export const numberTone = () => {
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease(getRandomNote(), "10n");
};

export const backgroundMusic = () => {
  const player = new Tone.Player({
    url: "https://www.midiworld.com/download/3733",
    autostart: true,
  });
  // const synth = new Tone.FatOscillator().toDestination().start();
  return player;
};
