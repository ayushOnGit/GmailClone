import {React , Suspense, useState} from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Email from '../Components/Email';
import { Outlet } from 'react-router-dom';
import SuspenseLoader from '../Components/Commo/SuspenseLoader';


const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
       <Suspense fallback={SuspenseLoader}>
        <Outlet context={{openDrawer}}/>
       </Suspense>
    </>
  );
};

export default Main;