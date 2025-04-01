import './App.css'
import Drum from './Drum.tsx'
import { AudioClip } from './types.ts'

const audioClips: AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater 1',
  },
  {
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater 2',
  },
  {
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater 3',
  },
  {
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater 4',
  },
  {
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap',
  },
  {
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
    description: 'Open-HH',
  },
  {
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
    description: "Kick n' Hat",
  },
  {
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    description: "Kick",
  },
  {
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    description: "Closed HH",
  }
];

function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);

    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById("display")!.innerText = clip.description;
 };

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>FCC Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip}  key={clip.keyTrigger}/>
        ))}
      </div>
      <div id="display"></div>
    </div>
    

  );
}

export default App
