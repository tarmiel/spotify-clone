import { AudioHTMLAttributes, FC, useEffect, useRef } from 'react';

interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement> {
  isPlaying?: boolean;
  seekValue?: number;
  volume?: number;
}

export const Audio: FC<AudioProps> = ({
  src,
  isPlaying,
  volume = 50,
  seekValue,
  onEnded,
  onTimeUpdate,
  onLoadedData,
  loop,
  ...props
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  // console.log('Render audio');

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  useEffect(() => {
    // default audio volume 0 to 1: use 0 to 100
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    if (audioRef.current && seekValue) audioRef.current.currentTime = seekValue;
  }, [seekValue]);

  return (
    <audio
      // src={activeSong?.hub?.actions[1]?.uri}
      src={src}
      ref={audioRef}
      loop={loop}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
      {...props}
    />
  );
};
