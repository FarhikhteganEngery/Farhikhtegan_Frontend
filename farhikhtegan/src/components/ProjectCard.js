import React from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Button } from 'antd';

const { Meta } = Card;

let styles = {marginBottom: '20px', marginRight: '10px'}
const App = (prop) => (
  <Card
    hoverable
    style={{
      width: 280,
      direction: 'rtl',
      marginBottom: '30px'
    }}
    cover={<img alt="example" src={prop.img} width="100%" height="300px" />}
  >
    <Meta title={prop.title} description={prop.desc} />

    <hr style={styles}></hr>
   
    <Button type="primary" block>
      {prop.btn}
    </Button>
   </Card>
);

export default App;