import {
  FocusableComponentLayout,
  FocusDetails,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { device } from "../types";
import { deleteDevice } from "../services/api";

interface deviceCardProps extends device {
  onFocus: (
    layout: FocusableComponentLayout,
    props: object,
    details: FocusDetails
  ) => void;
}

function DeviceCard({ device, name, onFocus,id }: deviceCardProps) {

    const onEnterPress = async () =>{
        alert("press")
        let data = new FormData()
        data.append("device", id)
        await deleteDevice(data)
    }

  const { ref, focused } = useFocusable({
    onFocus,
    onEnterPress
  });

  let srcIcon = "";
  switch (device) {
    case "pc":
      srcIcon =
        "https://w7.pngwing.com/pngs/935/326/png-transparent-cable-television-computer-icons-advertisement-film-tv-miscellaneous-television-rectangle-thumbnail.png";
      break;
    case "mobile":
      srcIcon =
        "https://i.pinimg.com/736x/85/7e/19/857e1977ee87256455b9b597a1529522.jpg";
      break;
    case "smarttv":
      srcIcon =
        "https://i.pinimg.com/736x/85/7e/19/857e1977ee87256455b9b597a1529522.jpg";
      break;
  }

  return (
    <div className={`movie-card ${focused ? "active" : ""}`} ref={ref}>
      {}

      <img src={srcIcon} alt="" />

      <div className="movie-info">
        <h3 className="movie-title">{name}</h3>
      </div>
    </div>
  );
}

export default DeviceCard;
