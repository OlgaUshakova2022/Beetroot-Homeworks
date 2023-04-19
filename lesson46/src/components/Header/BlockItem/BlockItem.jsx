import React from 'react';
import style from './BlockItem.module.css';

function Block (props) { 
  return (
   
        <div className={style.wrapperSpan}>
          <span className={style.title} >{props.title}</span>
          <span className={style.quantity}>{props.quantity}</span>          
        </div>
  
);
}

function BlockItem() {

let blockData = [
    { id: 1,  title: 'Monthly Revenue', quantity: "1385 $US"},
    { id: 2,  title: 'New Orders', quantity: 12, },
    { id: 3,  title: 'Rending Reviews', quantity: 3, },
    { id: 4,  title: 'New Customers', quantity: 9, },   
]
    let blockElements = blockData.map(block => < Block title = {block.title} quantity = {block.quantity } />);


  return (
    <div className={style.wrapperItem}>
      {blockElements}                    
    </div>
  );
}

export default BlockItem;