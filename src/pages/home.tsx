import { useEffect, useState } from "react";
import "../assets/style.css";
import { categorieChannel, ChannelResponse } from "../types";
import { fetchData } from "../utils/utils";
import Loader from "../components/loader";
import Sidebar from "../components/sidebar";
import CategoriesContent from "../components/categoriesContent";
import Devices from "./devices";

function HomePage() {
  const [categoriesData, setCategoriesData] = useState<categorieChannel[]>([]);
  const [loading, setLoading] = useState(true);

  const getCategoryeData = async () => {
    const res: ChannelResponse = await fetchData("channels/");
    setCategoriesData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getCategoryeData();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Sidebar focusKey="SIDEBAR" />


      <div className="container">
        <div className="title">
            <h1>Theranet</h1>

        </div>

        
        {/* <CategoriesContent data={categoriesData} /> */}

    <Devices/>

      </div>
    </>
  );
}

export default HomePage;
