
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from '../../component/SideNav/SideNav';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Main.css'

const Main = () => {
    return (
      <div>
        <Navbar />
        
          <div className="grid grid-rows grid-flow-col gap-4 ">
            <div className="border col-1 lg-col-span-2  ">
              {" "}
              <SideNav></SideNav>{" "}
            </div>

            <div className="col-span-10">
              <Outlet />{" "}
            </div>
          </div>
      
        <Footer/>
      </div>
    );
};

export default Main;