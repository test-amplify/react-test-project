const colors = {
  white: '#FFFFFF',
  black: '#000000',
  green: '#4C824A',
  lightBlue: '#DDECFA',
  lightGray: '#D2D2D2',
  lightB: '#7694bf',
  lightGreen: '#ddede0',
  Bcolor: '#8888888',
  darkGray: '#8b8b8b',
  darkblue: '#000d20',
  yellow: '#ffff00',
  btnColour:'#78557c',
  btnBColour:'#AAAAAA'
};
const font = ( size : string, weight : string | undefined= '400%', fontFamily  : string | undefined ='Arial' ):object=> ({
  fontFamily,
  fontWeight:weight,
  fontSize:size
});
export const Theme ={
  colors, font
};