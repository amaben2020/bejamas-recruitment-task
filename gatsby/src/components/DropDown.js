import React from 'react'
import Img from 'gatsby-image'
 
const DropDown = ({order, products, clearOrder, plainImage}) => {
   
    return (
        <div>
              {order.map((singleOrder, index) => (
                <div key={`${singleOrder.id} - ${index}`}>
                    <h2> {singleOrder.name}</h2>
                    <Img fluid={singleOrder.image}/>  
                    <p> ${singleOrder.price}</p>
                    <button type='button' onClick={() => clearOrder(index)}> Clear</button>  
                </div>
            ))}
            
        </div>
    )
    
}

export default DropDown
