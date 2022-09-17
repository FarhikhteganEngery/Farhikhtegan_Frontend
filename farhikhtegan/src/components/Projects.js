import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import amrie from '../images/amrie.jpg';
import energy from '../images/energy.jpg';

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
    <Card title="امریه‌ی سربازی" desc="جایگزین خدمت در مدارس انرژی اتمی" img={amrie} btn="درخواست"/>
    <Card title="پروژه سازمان انرژی اتمی" desc="ارزش ریالی پروژه: ۳۰ میلیون تومان" img={energy} btn="درخواست"/>
    <Card title="پروژه سازمان انرژی اتمی" desc="ارزش ریالی پروژه: ۳۰ میلیون تومان" img={energy} btn="درخواست"/>
</div>

<div className='cardContainer'>
    
</div>

</>
  );
};

export default App;