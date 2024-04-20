import HomeEVA from "../views/EVA/HomeEVA";
import DesarrolloProyecto from "../views/EVA/DesarrolloProyecto";
import HeaderHome from '../components/HeaderHome';
import ScrollToTop from "../components/ScrollToTop";
import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'

const EVAPage = () => {
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
                <HomeEVA/>
                <DesarrolloProyecto/>
            </>
            )}
        </div>
    );
};

export default EVAPage;