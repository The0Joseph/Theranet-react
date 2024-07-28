import {
  EnterPressHandler,
  useFocusable,
} from "@noriginmedia/norigin-spatial-navigation";
type sidebarItemProps = {
  text: string;
  children: React.ReactNode;
  onEnterPress: EnterPressHandler;
};

function SideBarItem({ text, children, onEnterPress }: sidebarItemProps) {
  const { ref, focused } = useFocusable({ onEnterPress });

  return (
    <li>
      <a href="#" ref={ref} className={focused ? "active" : ""}>
        <i>{children}</i>
        <span className="tooltip">{text}</span>
      </a>
    </li>
  );
}

export default SideBarItem;
