import React, { useEffect, useState } from 'react'
import rocket from '../../assets/rocket.jpg';
import spacex from '../../assets/SPACEX.jpg';
import whatsspacex from '../../assets/whatsspacex.jpg';
import './Dashboard.css'
let timeinterval;
 function Dashboard() {
    const [carouselData,setCarouselData] = useState([{
        id:0,
        img: spacex
    },{
        id:1,
        img: rocket
    },{
        id:2,
        img: whatsspacex
    }]);
    useEffect(()=>{
        timeinterval = setInterval(()=>changeActiveSlide(),10000);
        return ()=> {
            clearInterval(timeinterval)
        }
    },[])
    const [activeslide,setActiveSlide] = useState(0);
    const changeActiveSlide = (direction) =>{

        let active = activeslide;
        if (direction=='prev') {
            if (activeslide === 0) {
                active = carouselData.length -1;
            }else{
                active = active -1;
            }
        }else{
            if (activeslide === carouselData.length-1) {
                active = 0;
            }else{
                active = active +1;
            }
        }
        setActiveSlide(active)
    }
  return (
    <div id="carouselExampleIndicators" className="carousel slide" >
  <ol className="carousel-indicators">
    {
        carouselData.map(s=> <li data-slide-to={s.id} key={s.id} className={s.id === activeslide? 'active':""}></li>)
    }

  </ol>
  <div className="carousel-inner">
    {carouselData.map(s=>(
        <div className={ s.id===activeslide?'carousel-item active':'carousel-item'} key={s.id}>
            <img className="d-block w-100 fixed-height" src={s.img} alt={s.id + 'slide'}/>
        </div>

    ))}
  </div>
  <a className="carousel-control-prev"  role="button" data-slide="prev" onClick={()=>changeActiveSlide('prev')}>
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next"  role="button" data-slide="next" onClick={()=>changeActiveSlide('next')}>
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}
export default React.memo(Dashboard)