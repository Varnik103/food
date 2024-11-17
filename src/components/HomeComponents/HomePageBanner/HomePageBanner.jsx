import { useState } from "react";
import NavBar from "../../Navbar/Navbar1/NavBar";

import banner from '../../../assets/banner1.jpg'
import SearchBar from "../../../utils/SearcBar/SearchBar";

import './HomePageBanner.css'

let HomePageBanner = () => {
  let [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
          {toggleMenu ? (<div className='banner'>
              <NavBar setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
              <div className='bannerInner'>
            <img src={banner} alt="banner" className='bannerImg' />
            <div className='bannerTxt'>
                <div className='title'>Tomato</div>
                <div className='tag'>Discover the best food & drinks in <span className='bld'>World</span></div>
                <div className='searchbar'>
                    <SearchBar />
                </div>
            </div>
        </div>
    </div>
          ) : <div>other</div>}
    </>
  );
};

export default HomePageBanner;
