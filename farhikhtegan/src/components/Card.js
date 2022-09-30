import React from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import { Card } from 'antd';
import { Avatar } from 'antd';
import star from '../images/icons/starfill1.png'
import email from '../images/icons/email.png'
// import starfill from '../images/icons/starfill1.png'


const { Meta } = Card;

let styles = {marginBottom: '20px', marginRight: '5px'}
const App = (prop) => (
  <Card
    hoverable
    style={{
      width: 280,
      direction: 'rtl',
      marginBottom: '20px'
    }}
    cover={<img alt="example" src={prop.img} />}
  >
    <div
    style={{
      marginBottom: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '-10px'
    }}>
       <h1>{prop.title}</h1>
      <div>
      {prop.star>=1 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {prop.star>=2 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {prop.star>=3 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {prop.star>=4 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {prop.star>=5 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      </div>

     
    </div>
    <Meta  description={prop.desc} />

    <hr style={styles}></hr>
    <a style={styles} href={prop.telegram}><Avatar size={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" /></a>
    <a style={styles} href={prop.instagram}><Avatar size={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" /></a>
    <a style={styles} href={prop.linkedin}><Avatar size={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" /></a>
    <a style={styles} href={prop.whatsapp}><Avatar size={45} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" /></a>
    <a style={styles} href={prop.whatsapp}><Avatar size={35} src={email} /></a>
  </Card>
);

export default App;