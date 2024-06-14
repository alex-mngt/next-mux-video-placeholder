import { Video } from "@/components/Video";
import clsx from "clsx";

export default function Home() {
  const playbackId = process.env.MUX_VIDEO_ID;

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
}
