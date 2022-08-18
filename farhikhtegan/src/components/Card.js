import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Card } from 'antd';
import { Avatar } from 'antd';
import sina from '../images/sina.jpeg';

const { Meta } = Card;

let styles = {marginBottom: '20px', marginRight: '10px'}
const App = () => (
  <Card
    hoverable
    style={{
      width: 280,
      direction: 'rtl',
      marginBottom: '30px'
    }}
    cover={<img alt="example" src={sina} />}
  >
    <Meta title="سینا الهی منش" description="دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه" />

    <hr style={styles}></hr>
    <a style={styles} href="https://reactjs.org/docs/create-a-new-react-app.html"><Avatar size="large" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" /></a>
    <a style={styles} href="https://reactjs.org/docs/create-a-new-react-app.html"><Avatar size="large" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" /></a>
    <a style={styles} href="https://reactjs.org/docs/create-a-new-react-app.html"><Avatar size="large" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" /></a>
    <a style={styles} href="https://reactjs.org/docs/create-a-new-react-app.html"><Avatar size={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" /></a>
  </Card>
);

export default App;