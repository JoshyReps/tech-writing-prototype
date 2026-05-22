import Spinner from "../Components/Spinner";

export default function LoadingPage() {
  return (
    <div className="grid h-full w-full place-content-center bg-none">
      <Spinner />
    </div>
  );
}
