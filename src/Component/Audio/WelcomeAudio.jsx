import  { useEffect } from 'react';

const WelcomeAudio = () => {
  useEffect(() => {
    const audio = new Audio('/src/assets/music.mp3');
    console.log(audio)

    // Try to play the audio muted
    audio.muted = true;
    audio.play().then(() => {
      // If playback succeeds, unmute the audio
      audio.muted = false;
    }).catch(error => {
      console.error('Autoplay was prevented:', error);
      // Provide a fallback interaction
      document.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <h1>Welcome to my website</h1>
    </div>
  );
};

export default WelcomeAudio;
