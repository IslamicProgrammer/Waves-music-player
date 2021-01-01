export const audioPlay = (isPlaying, audioRef) => {
  if (isPlaying) {
    const PlayPromise = audioRef.current.play();
    if (PlayPromise !== undefined) {
      PlayPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
