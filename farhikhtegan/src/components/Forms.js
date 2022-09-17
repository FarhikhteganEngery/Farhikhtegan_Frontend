import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './Card';
import uc from '../images/under-construction.png';

// const cardContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     width: '80%',
//     margin: 'auto',
//     marginBottom: '30px'
// }

const App = () => {
  return (
    <>
    <div style={{textAlign:'center'}}>
    <img alt="example" src={uc} style={{width: '300px'}}/>
    <h1 style={{fontSize: '40px'}}>به زودی ...</h1>
    </div>

</>
  );
};

export default App;