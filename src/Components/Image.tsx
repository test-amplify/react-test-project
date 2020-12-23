import React from 'react';

interface Props {
    path: string;
  onClick?: Function;
  imageStyle?: React.CSSProperties;
  alt?:string
}

const Image = ({ path, imageStyle, onClick,alt}: Props): JSX.Element => (
  <img
  src={path} className="commonImgStyle" alt={alt} style={imageStyle}
  />

);

export default Image;