import Skeleton from "react-loading-skeleton";

interface SetCardSkeletonProps {
  cards: number;
}

export default function SetCardSkeleton({ cards }: SetCardSkeletonProps) {
  return Array(cards)
    .fill(0)
    .map(() => (
      <div className="flex w-full justify-between gap-10 bg-olive-400/50 px-8 py-3 text-[15px] font-semibold shadow-md shadow-black/25">
        <div className="w-[40%]">
          <Skeleton
            style={{
              width: "100%",
              height: "100%",
            }}
            baseColor="#a3a3a3"
            highlightColor="#cfcfcf"
          />
        </div>
        <div className="w-[40%] min-w-[100px]">
          <Skeleton
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            baseColor="#a3a3a3"
            highlightColor="#cfcfcf"
          />
        </div>
      </div>
    ));
}
