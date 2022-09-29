import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import sina from '../images/sina.jpeg';
import Avatar from '@mui/material/Avatar';
import { height, width } from '@mui/system';
import { Button } from 'antd';
import telegram from '../images/icons/telegram.png';
import instagram from '../images/icons/instagram.png';
import linkedin from '../images/icons/linkedin.png';
import whatsapp from '../images/icons/whatsapp.png';

export default function PersonalProfile() {

  let user = {
    name: "سینا الهی منش", 
    affiliation: "دبیرستان انرژی اتمی پسرانه تهران",
    img: sina,
    telegram: 'telegram.com',
    instagram: 'instagram.com',
    whatsapp: 'whatsapp.com',
    linkedin: 'linkedin.com'
  }

  return (
    <div>
      <div className="gradient-custom text-center text-white" style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem', paddingTop:'20px', paddingBottom:'20px'}}>
        <div style={{textAlign: 'center'}}>
        <Avatar alt={user.name} src={user.img} style={{width: '150px', height:'150px', textAlign:'center', margin:'auto', marginBottom:'10px'}} />
        <h2>{user.name}</h2>

        <h3>{user.affiliation}</h3>
        </div>
      </div>

      <div style={{backgroundColor:'#E8E8E8', padding:'20px', textAlign:'center'}}>
        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={telegram} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginBottom:'3px', marginTop:'3px'}} placeholder={user.telegram}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={instagram} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px'}} placeholder={user.instagram}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={linkedin} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px'}} placeholder={user.linkedin}></input>
        </div>

        <div style={{display:'flex', width:'240px', textAlign:'center', margin:'auto', marginBottom:'15px'}}>
        <Avatar alt="telegram" src={whatsapp} style={{textAlign:'center', marginLeft:'20px'}} />
        <input style={{marginTop:'3px', marginTop:'3px'}} placeholder={user.whatsapp}></input>
        </div>

        <Button type="primary" style={{margin:'auto'}}>ذخیره</Button>
      </div>
    </div>
    
  );
  
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={sina}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h1">سینا الهی منش</MDBTypography>
                  <MDBCardText>دبیرستان انرژی اتمی پسرانه تهران</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">اطلاعات فرد</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">ایمیل</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">تلفن همراه</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">شبکه‌های اجتماعی</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">تلگرام</MDBTypography>
                        <MDBCardText className="text-muted">telegram</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">اینستاگرام</MDBTypography>
                        <MDBCardText className="text-muted">instagram</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">واتس‌اپ</MDBTypography>
                        <MDBCardText className="text-muted">whatsapp</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">لینکداین</MDBTypography>
                        <MDBCardText className="text-muted">linkedin</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}