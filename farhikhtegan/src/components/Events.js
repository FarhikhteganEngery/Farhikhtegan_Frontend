import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import event from '../images/event.jpg';
import {  Input  } from 'antd';

// const cardContainerStyle = {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     width: '80%',
//     margin: 'auto',
//     marginBottom: '30px'
// }

const App = () => {

  const itemList = [
    {
      title:"برنامه دورهمی فوتبال",
      desc:"بچه‌های دوره ۲۶",
      img:event
    },
    {
      title:"برنامه دورهمی فوتبال",
      desc:"بچه‌های دوره ۲۶",
      img:event
    },
    {
      title:"برنامه دورهمی فوتبال",
      desc:"بچه‌های دوره ۲۶",
      img:event
    },
  ];

const [filteredList, setFilteredList] = new useState(itemList);

const filterBySearch = (event) => {
    const query = event.target.value;
    var updatedList = [...itemList];
    
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    
    setFilteredList(updatedList);
  };


return (
<>
<div className="search-header">
  
<Input.Search size="large" placeholder="جستجو" onChange={filterBySearch} id="search-box" enterButton/>

</div>
<div id="item-list">
<div className='grid-container'>
  {filteredList.map((item, index) => (
     <Card title={item.title} desc={item.desc} img={item.img} btn="عضویت"/>
  ))}
</div>
</div>
</>
);
};

export default App;