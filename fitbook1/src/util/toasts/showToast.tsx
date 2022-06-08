import { toast } from "react-toastify";
export const showToast = (toastType: string, toastMessage: string) => {
  switch (toastType) {
    case "SUCCESS":
      toast.success(toastMessage);
      break;

    case "ERROR":
      toast.error(toastMessage);
      break;

    case "WARNING":
      toast.warn(toastMessage);
      break;

    default:
      toast.success(toastMessage);
  }
};
