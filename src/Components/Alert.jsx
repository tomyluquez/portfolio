import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Alert = ({ openAlert, setOpenAlert }) => {
  useEffect(() => {
    if (setOpenAlert) {
      setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }
  }, [openAlert, setOpenAlert]);

  return (
    <div
      className={`bg-naranja border-2 border-blanco p-4 text-blanco rounded-lg fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        openAlert ? "alert-success" : "alert-closed"
      }`}
    >
      <div className="flex items-center justify-start gap-4">
        <AiOutlineCheckCircle />
        <span className="w-[165px]">Gracias por contactarte</span>
      </div>
    </div>
  );
};

export default Alert;
