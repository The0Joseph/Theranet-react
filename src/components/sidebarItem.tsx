import {
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import { authStatusStore } from "../store/authStatusStore";
type sidebarItemProps = {
  text: string;
  children: React.ReactNode;
  to: string;
};



function SideBarItem({ text, children, to }: sidebarItemProps) {

  const navigate = useNavigate()
  const { logout } = authStatusStore()

  const onEnterPress = () => {
    if (to == "") logout()
    navigate(to)
  }

  const { ref, focused } = useFocusable({ onEnterPress });

  return (
    <li>
      <div ref={ref} className={focused ? "a active" : " a"} onClick={() => onEnterPress()}>
        <i>{children}</i>
        <span className="tooltip">{text}</span>
      </div>
    </li>
  );
}

export default SideBarItem;
