import React from 'react'

export default function Card_features({title,icon,description}) {
    return (
            <div id='container_card_features' className="card" style={{width: "20%"}}>
                <img id='img_card_feature' className="card-img-top"  src={icon} alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                    </div>
                    
                   
            </div>


    )
}
