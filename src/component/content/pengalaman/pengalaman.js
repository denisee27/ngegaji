import React,{ useEffect, useState } from "react";
import axios from "axios";
import { Row, Card, Col, Button, Container } from "react-bootstrap";

const Pendidikan = () => {
  const [pengalaman, setPengalaman] = useState([]);

  axios.get('https://nusadevelopment.com/ngegaji/backend/Pengalaman/pengalamanView_Backend.php')
  .then(function (response) {
    setPengalaman(response.data);
    console.log(response);
  })

  return (
    <>
      <div className="my-4">
        <h4 className='mx-5' style={{ display:'inline'}}>Pengalaman </h4><br/>
        <span className='my-4 mx-5' style={{ fontSize:'18px' }}> Employee / Pengalaman </span>
      </div>

      <div>
        <h1 className='mx-5'style={{ display:'inline',color:'#1E85F1' }}>Good Morning, Irvan!</h1> <br/>
        <span className='mx-5'>You have good work experience! this is your mini resume of work experince, enjoy <b>Irvan!</b> </span>
      </div>

      
    <Card className='mt-4' style={{ border:'1px',width:'160vh',margin:'0 auto', borderRadius:"20px",marginBottom:'5vh' }}>
    <h4 className='mx-4 my-4' style={{ lineHeight:'35px' }}>You're on
      <h6 className="text-muted">PT.INSAN TEKNOTAMA SOLUSINDO as HEAD OF CREATIVE & DESIGN</h6>
    </h4> 
      {pengalaman.map(data => (
        <Row className="text-center px-5">
        <Col>  
        <Card className="mx-5" style={{ border:'1px',borderRadius:"15px" }}>
            <Button size="sm" href="pengalaman/edit" className="border rounded-pill" style={{position:'absolute',right:'5vh',top:'10px', float:'right',width:'10vh', backgroundColor:'#1E85F1'}} >Edit</Button>
          <Container className="my-5">
          <Row className="mx-5">
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>COMPANY
                <h5 className="my-1">{data.p_company}</h5>
              </h6>
            </Col>
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>DEPARTMENT 
                <h5 className="my-1">{data.p_departement}</h5>
              </h6>            
            </Col>
          </Row>

          <Row className="mx-5 my-4">
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>DATE OF JOIN 
                <h5 className="my-1">{data.p_mulai}</h5>
              </h6>            
            </Col>
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>POSITION 
                <h5 className="my-1">{data.p_posisi}</h5>
              </h6>            
            </Col>
          </Row>

          <Row className="mx-5 my-4">
          <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>DATE OF LEAVE
                <h5 className="my-1">{data.p_selesai}</h5>
              </h6>            
          </Col>
          <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>JOIN TIME 
                <h5 className="my-1"></h5>
              </h6>            
          </Col>
                </Row>
          <Col>
            <h6 style={{ color:'#83bef2',fontSize:'20px' }}>DESCRIPTION 
                <div className="my-3" style={{ textAlign: 'left', padding: '3vh', width: '90vh', margin: '0 auto', backgroundColor: '#c0e0fc', color: '#606D78', border: '1px', borderRadius: "15px" }}>{data.p_deskripsi }</div>
            </h6>            
          </Col>
          </Container>
            </Card> <br /><br /><br/>
            
      </Col>


        </Row>
        ))}

    </Card>
    <br/>


    </>
  )
}
export default Pendidikan;