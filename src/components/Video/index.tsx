import { FC, Suspense } from "react";
import { VideoWithPlaceholder } from "./VideoWithPlaceholder";
import clsx from "clsx";
import { Skeleton } from "../ui/skeleton";

type Props = {
  className?: string;
  playbackId: string;
  aspectRatioWidth: number;
  aspectRatioHeight: number;
};

export const Video: FC<Props> = async (props) => {
  const { className, playbackId, aspectRatioWidth, aspectRatioHeight } = props;

  return (
    <Suspense
      fallback={
        <Skeleton
          className={clsx(className, "rounded-none")}
          style={{ aspectRatio: `${aspectRatioWidth}/${aspectRatioHeight}` }}
        />
      }
    >
      <VideoWithPlaceholder
        className={className}
        playbackId={playbackId}
        aspectRatioWidth={aspectRatioWidth}
        aspectRatioHeight={aspectRatioHeight}
      />
    </Suspense>
  );
};
