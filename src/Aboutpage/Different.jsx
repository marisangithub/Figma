import React from 'react';
import Rect1 from './images/rectangle1.png'
import Rect2 from './images/rectangle2.png'
import Rect3 from './images/rectangle3.png'
import Rect4 from './images/rectangle4.png'
import Rect5 from './images/rectangle5.png' 
import StarIcon from './images/star.png'

const Different = () => {
    const items = [
    { title: "EXCLUSIVITY", desc: "Description goes here" },
    { title: "TRANSPARENCY", desc: "Description goes here" },
    { title: "PREMIUM SHOWCASING", desc: "Description goes here" },
    { title: "COMPLIANCE FIRST", desc: "Description goes here" },
  ];
  return (
    <>

      <div className="row position">
        <div className="col-4 left">
            <div className="d-blo">
                <img src={Rect1} className='rect1' alt="" />
                <img src={Rect2} className='rect2' alt="" />
            </div>
        </div>        
        <div className="col-4 center">
            <h2 className="text-center dif-text mb-5">WHAT MAKES US DIFFERENT</h2>
      <div className="container dif-align">
        <div className="row dif-align">
          {items.map((item, index) => (
            <div className="col-md-6 dif-align mb-4" key={index}>
              <img
                src={StarIcon}
                alt="star"
                style={{ width: "30px", marginBottom: "10px" }}

              />
              <h5 style={{ color: "#7c5c2b", fontWeight: "600" }}>{item.title}</h5>
              <p style={{ color: "#555" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
        </div>
                <div className="col-4 right">
            <img src={Rect3} className='rect3' alt="" />
            <img src={Rect4} className='rect4' alt="" />
            <img src={Rect5} className='rect5' alt="" />
        </div>

      </div>
    </>
  )
}

export default Different
