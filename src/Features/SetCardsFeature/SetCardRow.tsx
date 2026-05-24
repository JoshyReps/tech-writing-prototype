interface SetCardRowProps {
  right: string;
  left: string;
}

export default function SetCardRow({ left, right }: SetCardRowProps) {
  return (
    <div className="flex w-full justify-between bg-olive-400/50 px-8 py-3 text-[15px] font-semibold shadow-md shadow-black/25">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
