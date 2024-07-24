function Sidebar() {
    return ( 
        <div className="sidebar" id="sidebar">
          <div className="user-profile">
            <img src="https://placehold.co/60x60" alt="Sofie Turner" />
            <span>Sofie Turner</span>
          </div>
          <ul className="sidebar-menu" id="sidebar-menu">
            <li>
              <a href="#" className="active"><i className="fas fa-user"></i> Mi Cuenta</a>
            </li>
            <li>
              <a href="#"><i className="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
            </li>
          </ul>
        </div> 
        );
}

export default Sidebar;