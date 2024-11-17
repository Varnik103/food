import './Footer.css';

import Gstore from '../../assets/playstore.png';
import Appstore from '../../assets/appstore.png';

import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png'

let Footer = () => {
    return (
        <div className='footer'>
            <div className='innerFooter'>
                <div className='sec1'>
                    <div className='logoBox'>Tomato</div>
                    {/* <div className='filters'>
                        <div className='filterBox'>
                            <span>
                                <img className='icon' src={indianFlag} alt="india flag" />
                            </span>
                            <span>India</span>
                            <span className='arrow'>&#709;</span>
                        </div>
                        <div className='filterBox'>
                            <span>🌐</span>
                            <span>English</span>
                            <span className='arrow'>&#709;</span>
                        </div>
                    </div> */}
                </div>
                <div className='sec2'>
                    <div className='box1 box'>
                        <div className='boxTtl'>ABOUT TOMATO</div>
                        <a href='' className='boxOpt'>Who We Are</a>
                        <a href='' className='boxOpt'>Blog</a>
                        <a href='' className='boxOpt'>Work With Us</a>
                        {/* <a href='' className='boxOpt'>Investor Relations</a>
                        <a href='' className='boxOpt'>Report Fraud</a> */}
                    </div>
                    {/* <div className='box2 box'>
                        <div className='boxTtl'>TOMAVERSE</div>
                        <a href='' className='boxOpt'>Tomato</a>
                        <a href='' className='boxOpt'>Feeding India</a>
                        <a href='' className='boxOpt'>Hyperpure</a>
                        <a href='' className='boxOpt'>Tomaland</a>
                    </div> */}
                    <div className='box3 box'>
                        <div className='boxTtl'>FOR RESTAURANTS</div>
                        <a href='' className='boxOpt'>Partner With Us</a>
                        {/* <a href='' className='boxOpt'>Apps For You</a> */}

                        {/* <div className='boxTtl'>FOR ENTERPRISES</div>
                        <a href='' className='boxOpt'>Tomato For Work</a> */}
                    </div>
                    <div className='box4 box'>
                        <div className='boxTtl'>LEARN MORE</div>
                        <a href='' className='boxOpt'>Privacy</a>
                        <a href='' className='boxOpt'>Security</a>
                        <a href='' className='boxOpt'>Terms</a>
                        {/* <a href='' className='boxOpt'>Sitemap</a> */}
                    </div>
                    <div className='box5 box'>
                        <div className='boxTtl'>SOCIAL LINKS</div>
                        <div className='socialImgs'>
                            <a href='' className='socialImgAnchore'>
                                <img className='socialImg' src={Facebook} alt='facebook' />
                            </a>
                            <a href='' className='socialImgAnchore'>
                                <img className='socialImg' src={Instagram} alt='instagram' />
                            </a>
                            <a href='' className='socialImgAnchore'>
                                <img className='socialImg' src={Twitter} alt='twitter' />
                            </a>
                            <a href="" className='socialImgAnchore'>
                                <img className='socialImg' src={Youtube} alt="youtube" />
                            </a>
                        </div>
                        {/* <a href='' className='app'>
                            <img className='appImg' src={Gstore} alt='google play store' />
                        </a> */}
                        {/* <a href='' className='app'>
                            <img className='appImg' src={Appstore} alt='apple app store' />
                        </a> */}
                    </div>
                </div>
                <hr className='breakLine' />
                <div className='sec3'>
                    2024 © Tomato™ Ltd. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
