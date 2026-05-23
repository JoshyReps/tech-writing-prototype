interface SetCardRowProps {
  right: string;
  left: string;
}

export default function SetCardHeader({ left, right }: SetCardRowProps) {
  return (
    <>
      <div></div>
      <div className="flex w-full justify-around bg-olive-200 px-3 text-center text-xl font-semibold shadow-md shadow-black/30">
        <div className="w-full border-r py-4 text-center">{left}</div>
        <div className="broder-l w-full py-4 text-center">{right}</div>
      </div>
    </>
  );
}
