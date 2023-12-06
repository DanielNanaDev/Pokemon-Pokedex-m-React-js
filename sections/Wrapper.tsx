import React from 'react'
 
const wrapper = (Component:React.FC) => ()=> {

    return <div className="content">
      <Component />
      </div>;
  
};


export default wrapper