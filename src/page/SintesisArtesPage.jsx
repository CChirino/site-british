import HomeSintesisArtes from "../views/SintesisArtes/HomeSintesisArtes";
import ArquitecturaSintesisArtes from "../views/SintesisArtes/ArquitecturaSintesisArtes";
import ArteSintesisArtes from "../views/SintesisArtes/ArteSintesisArtes";
import PaisajismoSintesisArtes from "../views/SintesisArtes/PaisajismoSintesisArtes";
import PrincipiosSintesisArtes from "../views/SintesisArtes/PrincipiosSintesisArtes";
import ArquitecturaSeccionSintesisArtes from "../views/SintesisArtes/ArquitecturaSeccionSintesisArtes";
import ScrollToTop from "../components/ScrollToTop";
import HeaderHome from '../components/HeaderHome';
import FooterHome from "../components/FooterHome";
import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'

const SintesisArtesPage = () => {
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
                <HomeSintesisArtes/>
                <ArquitecturaSintesisArtes/>
                <ArteSintesisArtes/>
                <PaisajismoSintesisArtes/>
                <PrincipiosSintesisArtes/>
                <ArquitecturaSeccionSintesisArtes/>
                <FooterHome/>
            </>
            )}
        </div>
    );
};

export default SintesisArtesPage;