import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
type sidebarItemProps = {
    text : string
    children: React.ReactNode; 
}

function SideBarItem({text, children}:sidebarItemProps) {

    const { ref, focused } = useFocusable();

    return ( 
        <li>
            <a href="#" ref={ref} className={focused ? "active" : ""}>
                <i>

            {children}
                </i>
            <span className= "tooltip">{text}</span>
            </a>
        </li>
     );
}

export default SideBarItem;