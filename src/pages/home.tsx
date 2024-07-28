import "../assets/style.css";
import Sidebar from "../components/sidebar";
import CategoriesContent from "../components/categoriesContent";
import Devices from "./devices";
import { init, setKeyMap } from "@noriginmedia/norigin-spatial-navigation";
import { homePageStore } from "../store/homePageStore";

init({
  // debug: true,
  // visualDebug: true,
});
setKeyMap({
  left: 37, // 'ArrowLeft'
  up: 38, // 'ArrowUp'
  right: 39, // 'ArrowRight'
  down: 40, // 'ArrowDown'
  enter: 13, // 'Enter'
});

function HomePage() {
  const homePageState = homePageStore((state) => state.page);

  return (
    <>
      <Sidebar focusKey="SIDEBAR" />

      <div className="container">
        <div className="title">
          <h1>Theranet</h1>
        </div>
        {homePageState == "channels" ? <CategoriesContent /> : <Devices />}
      </div>
    </>
  );
}

export default HomePage;
