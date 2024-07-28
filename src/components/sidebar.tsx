import {
  FocusContext,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
import SideBarItem from "./sidebarItem";
import { useEffect } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { MdDevicesOther } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { authStatusStore } from "../store/authStatusStore";
import { logout } from "../services/api";
import { homePageStore } from "../store/homePageStore";

type SideBarProps = {
  focusKey: string;
};

function Sidebar({ focusKey: focusKeyParam }: SideBarProps) {
  const setAuthStatus = authStatusStore((state) => state.setStatus);
  const setHomePageStatus = homePageStore((state) => state.setpage);

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

  const handleSingOut = async () => {
    await logout();
    setAuthStatus("not-authenticated");
    localStorage.token = null;
  };

  return (
    <FocusContext.Provider value={focusKey}>
      <div className="sidebar" ref={ref}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus icon"></i>
          <div className="logo_name">CodingLab</div>
          <i className="bx bx-menu" id="btn"></i>
        </div>
        <ul className="nav-list">
          <SideBarItem
            text="Home"
            onEnterPress={() => setHomePageStatus("channels")}
          >
            <TbHomeFilled />
          </SideBarItem>

          <SideBarItem
            text="Dispositivos"
            onEnterPress={() => setHomePageStatus("devices")}
          >
            <MdDevicesOther />
          </SideBarItem>

          <SideBarItem text="Salir" onEnterPress={handleSingOut}>
            <VscSignOut />
          </SideBarItem>
        </ul>
      </div>
    </FocusContext.Provider>
  );
}

export default Sidebar;
