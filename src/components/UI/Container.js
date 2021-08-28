import React from 'react';


const Container = (props) => (
  <div className={props.classContainer}>
    {props.children}
  </div>
);

export default Container;