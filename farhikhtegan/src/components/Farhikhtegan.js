import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import '../index.css';
import Card from './Card';
import sina from '../images/sina.jpeg';
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
          {name: "سینا الهی منش", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html" },
     
          {name: "ایمان محمدی", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html" },
     
          {name: "محمد ابول‌نژادیان", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html" },

          {name: "محمد ابول‌نژادیان", img:sina, desc: "دوره ۲۶ دبیرستان انرژی اتمی تهران - پسرانه", 
          telegram:"https://reactjs.org/docs/create-a-new-react-app.html",
          instagram:"https://reactjs.org/docs/create-a-new-react-app.html",
          whatsapp:"https://reactjs.org/docs/create-a-new-react-app.html",
          linkedin:"https://reactjs.org/docs/create-a-new-react-app.html" },
        ];

     const [filteredList, setFilteredList] = new useState(itemList);

     const filterBySearch = (event) => {
          // Access input value
          const query = event.target.value;
          // Create copy of item list
          var updatedList = [...itemList];
          // Include all elements which includes the search query
          updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
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
           <Card title={item.name} img={item.img} desc={item.desc}
           telegram={item.telegram}
           instagram={item.instagram}
           whatsapp={item.whatsapp}
           linkedin={item.linkedin}
           className="grid-item"/>
        ))}
      </div>
    </div>
</>
  );
};

export default App;