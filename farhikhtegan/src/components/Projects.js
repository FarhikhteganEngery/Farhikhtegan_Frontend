import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import amrie from '../images/amrie.jpg';
import energy from '../images/energy.jpg';
import {  Input  } from 'antd';

const App = () => {

  const itemList = [
    {
      title:"امریه‌ی سربازی",
      desc:"جایگزین خدمت در مدارس انرژی اتمی",
      img:amrie
    },
    {
      title:"پروژه سازمان انرژی اتمی",
      desc:"ارزش ریالی پروژه: ۳۰ میلیون تومان",
      img:energy
    },
    {
      title:"پروژه سازمان انرژی اتمی",
      desc:"ارزش ریالی پروژه: ۳۰ میلیون تومان",
      img:energy
    },
    {
      title:"امریه‌ی سربازی",
      desc:"جایگزین خدمت در مدارس انرژی اتمی",
      img:amrie
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
     <Card title={item.title} desc={item.desc} img={item.img} btn="درخواست"/>
  ))}
</div>
</div>
</>
);
};

export default App;