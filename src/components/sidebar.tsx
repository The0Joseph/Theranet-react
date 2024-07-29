import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import SideBarItem from "./sidebarItem";
import { useEffect } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";

type SideBarProps = {
  focusKey: string;
};

function Sidebar({ focusKey: focusKeyParam }: SideBarProps) {

  const { ref, focusSelf, focusKey } = useFocusable({
    focusable: true,
    saveLastFocusedChild: false,
    trackChildren: true,
    autoRestoreFocus: true,
    isFocusBoundary: false,
    focusKey: focusKeyParam,
    onArrowPress: () => true,
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);


  return (
    <FocusContext.Provider value={focusKey}>
      <div className="sidebar" ref={ref}>
        <div className="logo-details">
        <img src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png" alt="usuario"  width={40}/>
        </div>
        <ul className="nav-list">
          <SideBarItem
            text="Home"
            to="/"
          >
            <TbHomeFilled  className="iconTv" />
          </SideBarItem>

          <SideBarItem
            text="Dispositivos"
            to="/devices"
          >
            <MdDevicesOther className="iconTv" />
          </SideBarItem>

          <SideBarItem text="Salir"
            to=""
          >
            <VscSignOut className="iconTv" />
          </SideBarItem>
        </ul>
      </div>
    </FocusContext.Provider>
  );
}

export default Sidebar;
