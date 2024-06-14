"use client";

import clsx from "clsx";
import { FC, lazy, useRef, useState } from "react";

const MuxVideo = lazy(() => import("@mux/mux-video-react"));

type Props = {
  playbackId: string;
};

export const VideoInteractive: FC<Props> = (props) => {
  const { playbackId } = props;

  const [canPlay, setCanPlay] = useState(false);

  const unblur = () => {
    setCanPlay(true);
  };

  return (
    <>
      {/* @ts-ignore */}
      <MuxVideo
        autoPlay="muted"
        controls={false}
        loop
        playbackId={playbackId}
        playsInline
        streamType="on-demand"
        className={clsx("h-full w-full", "object-cover object-center")}
        onCanPlay={unblur}
      />
      <div
        className={clsx(
          "absolute top-0 left-0",
          "h-full w-full",
          "transition-all",
          canPlay ? "backdrop-blur-0" : "backdrop-blur-xl"
        )}
      />
    </>
  );
};
