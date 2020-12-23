import React from 'react';
import '../Styles/Navbar.css';
import leftMenu from '../Assets/hamburger.png';
import ProfileTop from '../Assets/ProfileTop.png';
import HondoLogo from '../Assets/HondoLogod.png';
import {leftImage,middleImage,rightImage} from  '../Styles/Commonstyle'
import Image from '../Components/Image';
interface Props {
  Text?: string;
  }

const Header = ({
    Text
}:
Props): JSX.Element => {
  const handleClick = (path: string) => {
  };

  return (
  <>
<header className="site-header">
<Image path={leftMenu} imageStyle={leftImage}/> 
<Image path={HondoLogo} imageStyle={middleImage}/>
<Image path={ProfileTop} imageStyle={rightImage}/>         
</header>
       {/* <div className='navbar'>
          <div className='navbar-container'>      
          <Image path={leftMenu} imageStyle={leftImage}/> 
         <Image path={HondoLogo} imageStyle={middleImage}/>  
         <Image path={ProfileTop} imageStyle={rightImage}/>         
          </div>
          </div> */}
        </> 
  );
};

export default Header;
