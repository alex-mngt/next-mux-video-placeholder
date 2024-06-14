import { FC, PropsWithChildren } from "react";
import { VideoInteractive } from "../VideoInteractive";
import { getMuxPlaceholder } from "@/lib/mux/utils";
import { getPlaceholderSVG } from "./internal/VideoWithPlaceholder.helpers";
import clsx from "clsx";

type Props = {
  className?: string;
  playbackId: string;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
} & PropsWithChildren;

export const VideoWithPlaceholder: FC<Props> = async (props) => {
  const { className, aspectRatioWidth, aspectRatioHeight, playbackId } = props;

  const LQIPPlaceholder = await getMuxPlaceholder({
    playbackId,
    aspectRatioWidth,
    aspectRatioHeight,
    method: "LQUIP",
  });

  const LQIPPlaceholderSVG = getPlaceholderSVG(LQIPPlaceholder);

  return (
    <div
      className={clsx(className, "relative")}
      style={{
        aspectRatio: `${aspectRatioWidth}/${aspectRatioHeight}`,
        backgroundImage: `url('data:image/svg+xml;charset=utf-8,${encodeURIComponent(
          LQIPPlaceholderSVG
        )}')`,
      }}
    >
      <VideoInteractive playbackId={playbackId} />
    </div>
  );
};
