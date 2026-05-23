import { useNavigate } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";

type BackContainerPropsForNavigationOnly = {
  addPaginationLabel: false;
};

type BackContainerPropsWithNavigation = {
  addPaginationLabel: true;
  initialLength: number;
  currentPage: number;
};

type BackContainerProps =
  | BackContainerPropsForNavigationOnly
  | BackContainerPropsWithNavigation;

export default function BackContainer(props: BackContainerProps) {
  const navigate = useNavigate();

  const { addPaginationLabel } = props;

  let initialLength = 0;
  let currentPage = 0;

  if (addPaginationLabel) {
    initialLength = props.initialLength;
    currentPage = props.currentPage;
  }

  function handleBackHome() {
    navigate("/home");
  }

  return (
    <div className="flex h-14 w-full items-center justify-between bg-olive-600 px-4 py-3 shadow-md shadow-black/50">
      <button
        onClick={handleBackHome}
        className="brightness-100 transition-all hover:cursor-pointer hover:brightness-70"
      >
        <div className="flex items-center gap-3 text-white">
          <HiArrowSmallLeft size={30} color="#FFFFFF" /> Home
        </div>
      </button>
      {addPaginationLabel && (
        <div className="flex justify-around gap-2 font-bold text-white">
          <p>{currentPage}</p>
          <p>of</p>
          <p>{initialLength}</p>
        </div>
      )}
    </div>
  );
}
