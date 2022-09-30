import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './ProjectCard';
import form from '../images/form.jpeg';
import energy from '../images/energy.jpg';
import {  Input  } from 'antd';

const App = () => {

  const itemList = [
    {
      title:"فرم نظرسنجی فضای مدرسه",
      desc:"هدف: اعتلای فضای آموزشی مدرسه",
      img:energy
    },
    {
      title:"فرم رشته‌ی تحصیلی",
      desc:"هدف: ارتقای آموزشی فضای انتخاب رشته",
      img:form
    },

    {
      title:"فرم رشته‌ی تحصیلی",
      desc:"هدف: ارتقای آموزشی فضای انتخاب رشته",
      img:form
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
     <Card title={item.title} desc={item.desc} img={item.img} btn="مشاهده‌ی فرم"/>
  ))}
</div>
</div>
</>
);
};

export default App;



// UNDER CONSTRUCTION
// const App = () => {
//   return (
//     <>
//     <div style={{textAlign:'center'}}>
//     <img alt="example" src={uc} style={{width: '300px'}}/>
//     <h1 style={{fontSize: '40px'}}>به زودی ...</h1>
//     </div>

// </>
//   );
// };