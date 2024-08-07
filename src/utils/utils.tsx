import Swal, { SweetAlertIcon } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const notification = withReactContent(Swal);

type confirmNotificationType = {
  title: string;
  icon: SweetAlertIcon;
  onConfirm: () => void;
};

export const confirmNotification = ({
  title,
  icon,
  onConfirm,
}: confirmNotificationType) => {
  notification
    .fire({
      title,
      icon,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar",
      cancelButtonText: "No, cancelar",
    })
    .then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    });
};
