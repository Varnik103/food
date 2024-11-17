import './SearchBar.css';

import downArrow from '../../assets/down-arrow1.png'
import locationIcon from '../../assets/location.png'
import searchIcon from '../../assets/search.png'

let SearchBar = () => {
    return (
        <div className='outerDiv'>
            <div className='srch1'>
                <div className='iconBox'>
                    <img className='icon' src={locationIcon} alt="location pointer" />
                </div>
                <input type="text" placeholder="Place.." className='inpt' />
                <div className='iconBox'>
                    <img className='downArrow' src={downArrow} alt="down arrow" />
                </div>
            </div>
            <hr className='hr' />
            <div className='srch2'>
                <div className='iconBox'>
                    <img className='icon' src={searchIcon} alt="search icon" />
                </div>
                <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='inpt' />
            </div>
            <div className='dropdownBox' style={{ display: "none" }}>
                <div className='dropdown'></div>
            </div>
        </div>
    );
};

export default SearchBar;
