import { useState } from "react";

const Tour=({ id, name, info, image, price ,deleteTour}) =>{

    const [readMore,setReadMore] =useState(false)
    
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price"> ${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 50)}...`}
          <button className="info-btn" onClick={()=>setReadMore(!readMore)}>{readMore?`show less` :`show more`}</button>
        </p>

        <button type="button" className="btn" onClick={() => deleteTour(id)}>
          not intersted
        </button>
      </div>
    </article>
  );
}
export default Tour;
