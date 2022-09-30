import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './Card';
import sina from '../images/sina.jpeg';
import {  Input  } from 'antd';
import { Button, Dropdown, Space, Menu, message, Select  } from 'antd';

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
          {name: "سینا الهی منش", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html",
          star:3,
          maleOrFemale: true
          },
     
          {name: "ایمان محمدی", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html",
          star:2,
          maleOrFemale: true
          },
     
          {name: "محمد ابول‌نژادیان", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html",
          star:3,
          maleOrFemale: true
           },

          {name: "محمد ابول‌نژادیان", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html",
          star:1,
          maleOrFemale: true
           },
        ];

     const [filteredList, setFilteredList] = new useState(itemList);

     const handleChange = (value) => {
          var updatedList = [...itemList];
          updatedList = updatedList.filter((item) => {
            return item.star === parseInt(value) || parseInt(value) === 0;
          });
          setFilteredList(updatedList);

         console.log(`selected ${value}`);
       };


     const filterBySearch = (event) => {
          const query = event.target.value;
          var updatedList = [...itemList];
          
          updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
          });
          setFilteredList(updatedList);
        };
      

  return (
    <>
    <div className="search-header" >
      <Input.Search size="large" placeholder="جستجو" onChange={filterBySearch} id="search-box" enterButton/>

      <div style={{display:'flex', width:'300px', textAlign:'center', marginBottom:'15px', marginTop:'20px'}}>
        <h4 style={{width:'200px', paddingTop:'5px'}}>مقطع تحصیلی</h4>
       
            <Select
          defaultValue="0"
          style={{
            width: 300,
          }}
          onChange={handleChange}
        >
          <Select.Option value="0">همه</Select.Option>
          <Select.Option value="1">کارشناسی</Select.Option>
          <Select.Option value="2">ارشد - پزشکی‌عمومی</Select.Option>
          <Select.Option value="3">دکتری - تخصص</Select.Option>
          <Select.Option value="4">فوق‌دکتری - فوق‌تخصص</Select.Option>
        </Select>
        </div>
      {/* <input id="search-box" onChange={filterBySearch} /> */}
    </div>
    <div id="item-list">
      <div className='grid-container'>
        {filteredList.map((item, index) => (
           <Card title={item.name} img={item.img} desc={item.desc}
           telegram={item.telegram}
           instagram={item.instagram}
           whatsapp={item.whatsapp}
           linkedin={item.linkedin}
           star={item.star}
           className="grid-item"/>
        ))}
      </div>
    </div>
</>
  );
};

export default App;