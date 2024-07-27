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
    onEnterPress: () => {},
    onEnterRelease: () => {},
    onArrowPress: () => true,
    onFocus: () => {},
    onBlur: () => {},
    extraProps: { foo: "bar" },
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="sidebar" ref={ref}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">CodingLab</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <SideBarItem text="Home">
            <TbHomeFilled />
          </SideBarItem>
          <SideBarItem text="Dispositivos">
            <MdDevicesOther />
          </SideBarItem>
          <SideBarItem text="Salir">
            <VscSignOut />
          </SideBarItem>
        </ul>
      </div>
    </FocusContext.Provider>
  );
}

export default Sidebar;
