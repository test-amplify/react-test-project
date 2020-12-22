import React from 'react';
import '../Styles/Navbar.css';
import leftMenu from '../Assets/hamburger.png';
import ProfileTop from '../Assets/ProfileTop.png';
import HondoLogo from '../Assets/HondoLogo.png';
import {leftImage,middleImage,rightImage} from  '../Styles/Commonstyle'
import Image from '../Components/Image';
interface Props {
  Text: string;
  }

const Header = ({
    Text
}:
Props): JSX.Element => {
  const handleClick = (path: string) => {
  };

  return (
       <nav className='navbar'>
          <div className='navbar-container container'>
         <Image path={leftMenu} imageStyle={leftImage}/>  
         <Image path={HondoLogo} imageStyle={middleImage}/>  
         <Image path={ProfileTop} imageStyle={rightImage}/>         
          </div>
        </nav> 
  );
};

export default Header;
