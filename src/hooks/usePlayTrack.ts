import React, { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { useSelector } from "react-redux";
import { activeTrackDataTypes } from "../redux/activeTrack.slice";

declare module "howler" {
  interface Howl {
    _src: string;
  }
}

const usePlayTrack = () => {
  const [isLoop, setLoop] = useState<boolean>(true);
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const currentPlay: activeTrackDataTypes = useSelector(
    (state: any) => state.activeTrack.audioData
  );
  Howler.usingWebAudio = true;

  const sound = useRef(
    new Howl({
      src: [""],
    })
  );

  useEffect(() => {
    console.log("we are inside player effect ", currentPlay);
    if (currentPlay.dataUrl) {
      // sound.current
      sound.current.stop();
      sound.current.unload();
      sound.current._src = currentPlay.dataUrl;
      sound.current.load();

      // Play Audio
      sound.current.play();
    }

    if (sound.current.playing()) {
      setPlaying(true);
    } else {
      setPlaying(true);
    }
  }, [currentPlay]);

  const pause = () => {
    sound.current.pause();
    setPlaying(false);
  };

  const play = () => {
    sound.current.play();
    let seeks = sound.current.seek();
    console.log("seek : ", seeks);
    setPlaying(true);
  };

  const changePosition = (pos: number) => {
    sound.current.seek(pos);
  };

  const getCurrentPosition = () => {
    return sound.current.seek();
  };

  const duration = sound.current.duration();

  const toggleLoop = () => {
    if (isLoop) {
      setLoop(false);
      sound.current.loop(false);
    } else {
      setLoop(true);
      sound.current.loop(true);
    }
  };

  return {
    currentPlay,
    play,
    isPlaying,
    pause,
    isLoop,
    toggleLoop,
    duration,
    getCurrentPosition,
    changePosition,
  };
};

export default usePlayTrack;
