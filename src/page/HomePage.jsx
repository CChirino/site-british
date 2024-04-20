import FirstView from '../views/FirstView';
import HomeView from '../views/HomeView';
import CiudadUniversitariaHomeView from '../views/CiudadUniversitariaHomeView';
import CarlosHomeView from '../views/CarlosHomeView';
import ArteHomeView from '../views/ArteHomeView';
import EvaHomeView from '../views/EvaHomeView';
import ScrollToTop from "../components/ScrollToTop";
import HeaderHome from '../components/HeaderHome';
import { Oval } from 'react-loader-spinner'
import React, { useState, useEffect } from 'react';


const HomePage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    return (
        <>
            <HeaderHome />
            <ScrollToTop/>
            {loading ? (
                <div className="fixed bottom-1/2 left-1/2">
                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="rgb(189 189 189)"
                        secondaryColor="rgb(189 189 189)"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </div>
            ) : (
            <>
                <FirstView />
                <HomeView />
                <CiudadUniversitariaHomeView/>
                <CarlosHomeView/>
                <ArteHomeView/>
                <EvaHomeView/>
            </>
            )}
        </>
    );
};

export default HomePage;