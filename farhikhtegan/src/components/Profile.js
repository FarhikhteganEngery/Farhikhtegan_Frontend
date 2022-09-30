import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import sina from '../images/sina.jpeg';
import Avatar from '@mui/material/Avatar';
import { height, width } from '@mui/system';
import { Button, Dropdown, Space, Menu, message, Select, Upload  } from 'antd';
// import {  DownOutlined, UserOutlined  } from 'icons';
import telegram from '../images/icons/telegram.png';
import instagram from '../images/icons/instagram.png';
import linkedin from '../images/icons/linkedin.png';
import whatsapp from '../images/icons/whatsapp.png';
import email from '../images/icons/email.png';
import star from '../images/icons/starfill.png'

export default function PersonalProfile() {

  let user = {
    name: "سینا الهی منش", 
    affiliation: "دبیرستان انرژی اتمی پسرانه تهران",
    img: sina,
    telegram: 'telegram.com',
    instagram: 'instagram.com',
    whatsapp: 'whatsapp.com',
    linkedin: 'linkedin.com',
    email: 'email.com',
    phone: '+989305006036',
    field: 'مهندسی کامپیوتر',
    country: 'ایران - تهران',
    star: 2,
    maleOrFemale: true
  }
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
  
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  

  return (
    <div>
      <div className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', paddingTop:'20px', paddingBottom:'20px', direction:'ltr'}}>
        <div style={{textAlign: 'center'}}>
        <Avatar alt={user.name} src={user.img} style={{width: '150px', height:'150px', textAlign:'center', margin:'auto', marginBottom:'10px'}} />

        <Upload {...props}>
    <Button style={{backgroundColor:'rgb(230, 170, 120)', marginBottom:'10px'}}>آپلود عکس</Button>
  </Upload>

        <h2>{user.name}</h2>

        <div style={{paddingBottom:'5px'}}>
      {user.star>=1 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {user.star>=2 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {user.star>=3 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {user.star>=4 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      {user.star>=5 && <img src={star} style={{width:'15px', height:'15px'}}/>}
      </div>

        <h3>{user.affiliation}</h3>
        </div>
      </div>

      <div style={{backgroundColor:'#E8E8E8', padding:'20px', textAlign:'center'}}>
        <div className='grid-container-profile'>
        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={telegram} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginBottom:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.telegram}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={instagram} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.instagram}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={linkedin} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.linkedin}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={whatsapp} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.whatsapp}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={email} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.email}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <h4>شماره همراه</h4>
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.phone}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <h4>آخرین رشته</h4>
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.field}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <h4>محل زندگی</h4>
        <input style={{marginTop:'3px', marginTop:'3px', direction:'ltr', textAlign:'center'}} placeholder={user.country}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <h4>مقطع تحصیلی</h4>
       
            <Select
          defaultValue={user.star===1? "l1": (user.star===2? "l2": (user.star===3? "l3": "l4") )}
          style={{
            width: 300,
          }}
          onChange={handleChange}
        >
          <Select.Option value="l1">کارشناسی</Select.Option>
          <Select.Option value="l2">ارشد - پزشکی‌عمومی</Select.Option>
          <Select.Option value="l3">دکتری - تخصص</Select.Option>
          <Select.Option value="l4">فوق‌دکتری - فوق‌تخصص</Select.Option>
        </Select>
        </div>
        </div>

        <Button type="primary" style={{margin:'auto', width:'150px', marginTop:'20px'}}>ویرایش</Button>
      </div>
    </div>
  );
}