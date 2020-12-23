import React, { useState ,useRef} from 'react';
import "../Styles/Accordion.css";
import Hide from '../Assets/Hide.svg';
import More from '../Assets/More.svg';
import Image from '../Components/Image';
import {MoreImage,HideImage} from  '../Styles/Commonstyle'
interface Props {
    contents:string;
}

const Accordion = ({contents }: Props): JSX.Element => {
    const [setActive, setActiveState] = useState<string>("");
  const [setHeight, setHeightState] = useState<string>("0px");
  const [setRotate, setRotateState] = useState<string>("accordion__icon");
  const [iconState, setIconState] = useState<Boolean>(true);
  const [title, setTitle] = useState<string>("More Details");
  const content = useRef<HTMLDivElement>(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : content.current !== null ? `${content.current.scrollHeight}px`:''
    );
   
    if(setActive === "active") {setIconState(true) ;setTitle('More Details')} else {setIconState(false);setTitle('Hide Details')}
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }
    return (
      <>
      <div className="accordion__section">
      <div className='accordion' onClick={toggleAccordion}>
        <span className="accordion__title">{title}</span>
        {iconState? <Image path={More} imageStyle={MoreImage}/>:null}
        {!iconState? <Image path={Hide} imageStyle={HideImage}/>:null}
      </div>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </div>
    </div>  
      </>
    );
  };
export default Accordion;