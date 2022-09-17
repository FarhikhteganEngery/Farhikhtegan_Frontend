import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './Card';
import sina from '../images/sina.jpeg';

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
    <Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>

    <Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>

<Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>
</div>

<div className='cardContainer'>
     <Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>

      <Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>

<Card title="سینا الهی منش" img={sina} desc="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه"
     telegram="https://reactjs.org/docs/create-a-new-react-app.html"
     instagram="https://reactjs.org/docs/create-a-new-react-app.html"
     whatsapp="https://reactjs.org/docs/create-a-new-react-app.html"
     linkedin="https://reactjs.org/docs/create-a-new-react-app.html"/>
</div>

</>
  );
};

export default App;