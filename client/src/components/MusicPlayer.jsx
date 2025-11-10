import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import sunflowerAudio from "../assets/sunflower.mp3";
import yellowAudio from "../assets/yellow.mp3";

const MusicPlayer = () => {
  const songs = [
    {
      title: "Sunflower",
      artist: "Post Malone",
      posterUrl: "https://imgs.search.brave.com/OAv5IuUaSpCmkoRO4INXB0ozDXO9pvHSnrRhw905Mc8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/c3VuZmxvd2VyLXNo/b3VsZC1iZS10aGUt/ZW5kLWNyZWRpdHMt/c29uZy1mb3ItYmV5/b25kLXRoZS12MC1v/bm9oaWFibDdyZGIx/LmpwZz93aWR0aD02/NDAmY3JvcD1zbWFy/dCZhdXRvPXdlYnAm/cz00YmVlNjVkY2Fl/ZmM3MTkwMThlNTZk/YjU2ZmY2ODIxZGNm/NGNlYTI0",
      audioUrl: sunflowerAudio,
    },
    {
      title: "Yellow",
      artist: "Coldplay",
      posterUrl: "https://imgs.search.brave.com/YMkQmQsw5ehBdzafT5CfyAqJINyxUtFpMlG7ShNY1Wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8y/NTQvUGFyYWNodXRl/cy1FbmdsaXNoLTIw/MDAtMjAyNDA1Mjkx/MDQ3MTctNTAweDUw/MC5qcGc",
      audioUrl: yellowAudio,
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      // Auto-play next song when current ends
      nextSong();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    // Reset and load new song when index changes
    const audio = audioRef.current;
    if (audio) {
      audio.load();
      setCurrentTime(0);
      if (isPlaying) {
        audio.play();
      }
    }
  }, [currentSongIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };

  return (
    <div className="w-60 bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-3 text-white">
      <audio ref={audioRef} src={currentSong.audioUrl} />

      {/* Horizontal Layout */}
      <div className="flex items-center gap-3">
        {/* Album Art */}
        <div className="w-16 h-16 rounded-lg overflow-hidden shadow-lg flex">
          <img
            src={currentSong.posterUrl || "https://via.placeholder.com/80x80?text=No+Poster"}
            alt={currentSong.title || "Album Cover"}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Song Info & Controls */}
        <div className="flex-1 min-w-0">
          {/* Song Info */}
          <div className="mb-2">
            <h3 className="text-[0.875rem] font-bold truncate">
              {currentSong.title || "Song Title"}
            </h3>
            <p className="text-[0.75rem] text-gray-400 truncate">
              {currentSong.artist || "Artist Name"}
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prevSong}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faBackward} size="sm" />
            </button>

            <button
              onClick={togglePlay}
              className="bg-purple-500 hover:bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} size="sm" />
            </button>

            <button
              onClick={nextSong}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faForward} size="sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;