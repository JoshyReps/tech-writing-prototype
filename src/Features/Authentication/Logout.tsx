import SpinnerMini from "../../Components/SpinnerMini";
import { useLogout } from "./useLogout";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";

export default function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <button onClick={() => logout()} disabled={isPending}>
      {isPending ? <SpinnerMini /> : <HiArrowLeftStartOnRectangle size={30} />}
    </button>
  );
}
