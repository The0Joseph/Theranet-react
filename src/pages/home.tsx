import { useEffect, useState } from 'react';
import '../assets/style.css'
import { categorieChannel, ChannelResponse } from "../types";
import { fetchData } from '../utils/utils';
import Loader from '../components/loader';
import Sidebar from '../components/sidebar';
import CategoriesContent from '../components/categoriesContent';


function HomePage() {

    const [categoriesData, setCategoriesData] = useState< categorieChannel[]>([]);
    const [loading, setLoading] = useState(true);

    const getCategoryeData = async () => {
        const res: ChannelResponse = await fetchData("channels/")
        setCategoriesData(res.data)
        setLoading(false)
    }

    useEffect(() => {
        getCategoryeData()

    }, []);


    if (loading) return <Loader />


    return (

        <>

            <div className="container">
                <header>
                    <div className="search-bar">
                        <input type="text" placeholder="Search Movies" />
                    </div>
                    <div className="user-profile">
                        <img src="https://placehold.co/50x50" alt="User Profile" />
                    </div>
                </header>

                < CategoriesContent data={categoriesData} />

                
                <Sidebar/>

            </div>


        </>
    );
}

export default HomePage;