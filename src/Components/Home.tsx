import React ,{useState} from 'react';
import '../Styles/Common.css';
import Accordion from "./Accordion";
import Image from '../Components/Image';
import Group5945 from '../Assets/Group5945.svg';
import Path25988 from '../Assets/Path25988.svg';
import payment from '../Assets/payment.svg';
import money from '../Assets/money.svg';
import {Group5945Image,Path25988Image,paymentImage,ProfileTopcardImage,moneycardImage} from  '../Styles/Commonstyle';
import ProfileTop from '../Assets/ProfileTop.png';

interface Props {
  }

const HomePage = ({  }:Props): JSX.Element => {
    const [text, setTxt] = useState<number>(50);
    const [bidValue, setbidValue] = useState<number| undefined>();
    const [priceSelection, setpriceSelection] = useState<string>();
    const [mobile, setmobile] = useState<string>();
    const [name, setname] = useState<string>();
    const [remarks, setremarks] = useState<string>();
    const handleKeyPress = (event:any) => { 
    if(bidValue!==undefined){
        
       }    
      }
  return (
   <div className='mainDiv'>
     
   <div className="mainHeading">
   <p>Old Car Available</p>
   </div>
   <div  className='card'>
    <div className='cardHeader'>
    <p className='cardFText'>Honda City</p>
    <p className='cardSecText'>Posted at 1 Nov.9:30 AM</p>
    </div>
    <div className='cardBody'>
    <div className='cardContent'>
  <Image path={Group5945} imageStyle={Group5945Image} />
  <p className='specification'>Specification 01</p>
    </div>
    <div className='cardContent'>
  <Image path={Path25988} imageStyle={Path25988Image} />
  <p className='specification02'>Specification 02</p>
    </div>
    <div className='cardContent'>
  <Image path={payment} imageStyle={paymentImage} />
  <p className='specification03'>Specification 03</p>
    </div>
    <Accordion  contents={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."} />  
    <div className='cardContent'>
  <Image path={ProfileTop} imageStyle={ProfileTopcardImage} />
  <div className='cardsubContent'>
  <p className='userName'>Rohan Sharma</p>
  <p className='userLoc'>Bengaluru, Karnataka</p>
  </div>
    </div>
    </div>
    </div> 
    <div  className='card'>
    <div className="mainSecCardHeading">
   <p>Place Your Load BID</p>
   </div> 
   <div className='cardContent'>
   <Image path={money} imageStyle={moneycardImage} />
          <input
             style={{width:text}}
              className='bid-input'
              name='bid'
              type='number'
              placeholder='0'
              id="txt" 
              value={bidValue}
              onKeyPress={handleKeyPress} 
              onChange={(data:any)=>{
                setbidValue(data.target.value) 
                var stgValue=data.target.value.length.toString();
                var myText=((stgValue.length + 2) * 60);
                setTxt(myText) 
                }  
              }            
            />
    </div>
    <div className='cardContent'>
    <button className={priceSelection ==='fixedPrice' ? "fixedPrice PriceTxtNew" :"fixedPrice PriceTxt" }  onClick={() => setpriceSelection('fixedPrice')}>
    <div className={priceSelection ==='fixedPrice'? "priceTextOpacity" : "priceTextOpa"} >
        Fixed Price
        </div>
        </button>
  <button className={priceSelection ==='Negiotable' ? "Negiotable PriceTxtNew" :"Negiotable PriceTxt" }  onClick={() => setpriceSelection('Negiotable')}>
  <div className={priceSelection ==='Negiotable'? "priceTextOpacity" : "priceTextOpa"} >
  Rate Negiotable
 </div>
    </button>
    </div>
    {priceSelection ==='fixedPrice' ? <hr className="new4"/> :null} 
    
    {priceSelection ==='fixedPrice' ? <>
    <div className="formfield" id="mobilefield">
                <input type="text" 
                value={mobile}
                onChange={(data:any)=>{setmobile(data.target.value)}} id="mobile" required/>
                {/* <span style={{marginLeft:-3,marginRight:10,color:'blue',fontSize:18}}>+44</span> */}
				<label htmlFor="mobile" placeholder="mobile">Enter Your Mobile number*</label>
			</div>	
            <div className="formfield" id="namefield">
                <input type="text" 
                value={name}
                onChange={(data:any)=>{setname(data.target.value)}}
                id="name" required/>
				<label htmlFor="name" placeholder="name">Enter Your name*</label>
			</div>
            <div className="formfield" id="remarksfield">
                <input type="text" 
               value={remarks}
               onChange={(data:any)=>{setremarks(data.target.value)}}
                id="remarks" required/>
				<label htmlFor="remarks" placeholder="remarks">Enter Remarks (optional)</label>
			</div>	
      </>:null}
    </div>
    
    <button className="BidNowbutton" style={name && mobile ?{background:'#3054D6'}:{background:'#EDF0F7'}} disabled={bidValue ? false :true} onClick={() => {
        console.log("Details",mobile,name,remarks)
    }}>
    <div className={name && mobile ? "BidNowbuttonText1" : "BidNowbuttonText"} >Bid Now</div>
    </button>
    </div>
    
  );
};

export default HomePage;