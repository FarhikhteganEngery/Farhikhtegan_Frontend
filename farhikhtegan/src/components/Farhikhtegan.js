import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import Card from './Card';

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
    <div className='cardContainer' >
    <Card />
    <Card />
    <Card />
</div>

<div className='cardContainer'>
    <Card />
    <Card />
    <Card />
</div>

 <div className='cardContainer'>
    <Card />
    <Card />
    <Card />
</div>
</>
  );
};

export default App;