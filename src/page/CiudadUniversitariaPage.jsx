import React, { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner'
import HomeCiudadUniversitaria from '../views/CiudadUniversitaria/HomeCiudadUniverstaria';
import HaciendaCiudadUniversitaria from '../views/CiudadUniversitaria/HaciendaCiudadUniversitaria';
import ModernismoCiudadUniversitaria from '../views/CiudadUniversitaria/ModernismoCiudadUniversitaria';
import PostVillanuevaCiudadUniversitaria from '../views/CiudadUniversitaria/PostVillanuevaCiudadUniversitaria';
import Timeline from '../views/CiudadUniversitaria/TimelineCiudadUniversitaria';
import PatrimonioCiudadUniversitaria from '../views/CiudadUniversitaria/PatrimonioCiudadUniversitaria';
import ActualidadCiudadUnivertaria from '../views/CiudadUniversitaria/ActualidadCiudadUnivertaria';
import ScrollToTop from '../components/ScrollToTop';
import FooterHome from '../components/FooterHome';
import HeaderHome from '../components/HeaderHome';

const CiudadUniversitariaPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <ScrollToTop />
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
          <HomeCiudadUniversitaria />
          <HaciendaCiudadUniversitaria />
          <ModernismoCiudadUniversitaria />
          <PostVillanuevaCiudadUniversitaria />
          <Timeline />
          <PatrimonioCiudadUniversitaria />
          <ActualidadCiudadUnivertaria />
          <FooterHome />
        </>
      )}
    </div>
  );
};

export default CiudadUniversitariaPage;