import {
  FocusableComponentLayout,
  FocusDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { device } from "../types";
import { deleteDevice } from "../services/api";
import { confirmNotification } from "../utils/utils";
import { getIconDevice } from "../utils/deviceUtils";
import { useNavigate } from "react-router-dom";

interface deviceCardProps extends device {
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}

function DeviceCard({ device, name, onFocus, id }: deviceCardProps) {

  const navigate = useNavigate()

  const onEnterPress = async () => {
    confirmNotification({
      title: "Desea eliminar el dispositivo?",
      icon: "question",
      onConfirm: async () => {
        let data = new FormData();
        data.append("device", id)
        await deleteDevice(data)
        navigate(0)
      },
    });
  };

  const { ref, focused } = useFocusable({
    onFocus,
    onEnterPress,
  });

  const srcIcon = getIconDevice(device)

  return (
    <div className={`movie-card ${focused ? "active" : ""}`} ref={ref}>
      {}

      <img src={srcIcon} alt="" />

      <div className="movie-info">
        <h3 className="movie-title">{name}- {device}</h3>
      </div>
    </div>
  );
}

export default DeviceCard;
