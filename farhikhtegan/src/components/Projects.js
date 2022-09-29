import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import amrie from '../images/amrie.jpg';
import energy from '../images/energy.jpg';
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
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...itemList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };


return (
<>
<div className="search-header">
{/* <div className="search-text">جستجوی فرهیختگان:</div> */}
<Input.Search size="large" placeholder="جستجو" onChange={filterBySearch} id="search-box" enterButton/>
{/* <input id="search-box" onChange={filterBySearch} /> */}
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