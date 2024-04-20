import HomeCarlosRaul from '../views/CarlosRaul/HomeCarlosRaul';
import LondresCarlosRaul from '../views/CarlosRaul/LondresCarlosRaul';
import HacedorCarlosRaul from '../views/CarlosRaul/HacedorCarlosRaul';
import VillanuevaCarlosRaul from '../views/CarlosRaul/VillanuevaCarlosRaul';
import UltimosCarlosRaul from '../views/CarlosRaul/UltimosCarlosRaul';
import VideoCarlosRaul from '../views/CarlosRaul/VideoCarlosRaul';
import LineadetiempoCarlosRaul from '../views/CarlosRaul/LineadetiempoCarlosRaul';
import ScrollToTop from '../components/ScrollToTop';
import FooterHome from '../components/FooterHome';
import HeaderHome from '../components/HeaderHome';
import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'

const CarlosRaulPage = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, []);

    return (
        <div>
            <ScrollToTop/>
            <HeaderHome />
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
                <HomeCarlosRaul/>
                <LondresCarlosRaul/>
                <HacedorCarlosRaul/>
                <VillanuevaCarlosRaul/>
                <UltimosCarlosRaul/>
                <VideoCarlosRaul/>
                <LineadetiempoCarlosRaul/>
                <FooterHome/>
            </>
        )}
        </div>
    );
};

export default CarlosRaulPage;