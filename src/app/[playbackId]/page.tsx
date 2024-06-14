import { Video } from "@/components/Video";
import clsx from "clsx";
import { FC } from "react";

type Params = {
  playbackId: string;
};

type Props = {
  params: Params;
};

const PlaybackIdPage: FC<Props> = (props) => {
  const { playbackId } = props.params;

  if (!playbackId) {
    throw new Error("MUX_VIDEO_ID env variable must be set");
  }

  return (
    <main
      className={clsx(
        "p-10",
        "h-screen",
        "flex flex-col items-center justify-center"
      )}
    >
      <Video
        playbackId={playbackId}
        aspectRatioWidth={1}
        aspectRatioHeight={1}
        className={clsx("w-[400px]")}
      />
    </main>
  );
};

export default PlaybackIdPage;
