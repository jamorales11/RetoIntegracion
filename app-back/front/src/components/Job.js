import React, { useState } from "react";

var state = {
  "name": "Asesor comercial de hipermercado",
  "company": "Schneider Electric", 
  "salary": "$4.5 a $5.5 millones",
  "city":  "Bogotá, Colombia"
}

const Job = (props) => {
  const [offer] = useState({
    name: props.offer.name,
    company: props.offer.company,
    salary: props.offer.salary,
    city: props.offer.city,
  });

  const renderOffer = () => {
    return (
      <div>
        <h2>{offer.name}</h2>
        <h3>{offer.company}</h3>
        <h4>{offer.salary}</h4>
        <h5>{offer.city}</h5>
        <hr />
      </div>
    );
  };

  return (
    <div>
      {renderOffer()}
    </div>
  )
};




export default Job;
