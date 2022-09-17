import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import event from '../images/event.jpg';

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
    <Card title="برنامه دورهمی فوتبال" desc="بچه‌های دوره ۲۶" img={event} btn="عضویت"/>
    <Card title="برنامه دورهمی فوتبال" desc="بچه‌های دوره ۲۶" img={event} btn="عضویت"/>
    <Card title="برنامه دورهمی فوتبال" desc="بچه‌های دوره ۲۶" img={event} btn="عضویت"/>
</div>

<div className='cardContainer'>
    
</div>

</>
  );
};

export default App;