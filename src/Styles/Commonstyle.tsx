import CSS from 'csstype';
import { Theme } from './index';

const buttonStyle: CSS.Properties = {
  backgroundColor:  Theme.colors.btnColour,
  marginRight: '2px',
  borderColor: Theme.colors.btnBColour,
  height: '28px',
  ...Theme.font('12px'),
  marginTop:'1%',
  marginBottom:'1%',
  width:'15%'
};
const leftImage:CSS.Properties = {
  width:'36px', 
 height:'36px',
 marginTop:'5px',
 marginLeft:'20px',
 marginBottom:'17px',
};
const middleImage:CSS.Properties = {
    width:'67px', 
    height:'84px'
}
const rightImage:CSS.Properties = {
    width:'30px', 
    height:'30px',
    marginTop:'8px',
    marginRight:'20px',
    marginBottom:'20px',
}
const MoreImage:CSS.Properties = {
  width:'10px',
 height:'5.7px',
 marginBottom:'9px',
 marginTop:'11px'
}
const HideImage:CSS.Properties = {
  width:'10px',
  height:'5.7px',
  marginBottom:'9px',
  marginTop:'11px'
}
const Group5945Image:CSS.Properties={
  width:'11.41px',
  height:'13px',
  marginLeft:'20px',
  marginTop:'24px'
}
const Path25988Image:CSS.Properties={
  width:'17.77px',
  height:'10px',
  marginLeft:'20px',
  marginTop:'19px'
}
const paymentImage:CSS.Properties={
  width:'14.44px',
  height:'10px',
  marginLeft:'20px',
  marginTop:'14px'
}
const ProfileTopcardImage:CSS.Properties={
  width:'36px',
  height:'36px',
  marginLeft:'20px',
  marginTop:'19px',
  marginBottom:'17px'
}
const moneycardImage:CSS.Properties={
  width:'25px',
  height:'57px',
  marginLeft:'20px',
  marginRight:'7px',
  marginTop:'10px',
  marginBottom:'17px'
}
export { buttonStyle,
   leftImage,
   middleImage ,
   rightImage,
   MoreImage,
   HideImage,
   Group5945Image,
   Path25988Image,
   paymentImage,
   ProfileTopcardImage,
   moneycardImage};