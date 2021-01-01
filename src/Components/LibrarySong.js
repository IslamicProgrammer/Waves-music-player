import React from "react";

function LibrarySong({
  song,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = async () => {
    const selected = songs.filter((state) => state.id === id);
    await setCurrentSong(selected[0]);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
