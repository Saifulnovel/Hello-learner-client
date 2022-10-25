import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../component/SideNav/SideNav';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
      <div>
        <Navbar />
            <div className='grid grid-rows grid-flow-col gap-4'>
                <div className='border col-span-2'> <SideNav></SideNav> </div>
                
          <div className='col-span-10'><Outlet/> </div>
        </div>
      </div>
    );
};

export default Main;