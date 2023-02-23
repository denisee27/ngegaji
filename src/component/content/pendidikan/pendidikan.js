import React,{ useState } from "react";
import { Row, Card, Col, Button, Container } from "react-bootstrap";
import axios from "axios";


const Pendidikan = () => {
  const [school, setSchool] = useState([]);

      axios.get('https://nusadevelopment.com/ngegaji/backend/Pendidikan/pendidikanView_Backend.php')
      .then(function (response) {
        setSchool(response.data);
      })
 
  const setLocalStorage = (sekolah, jurusan, lulus, nilai, deskripsi) => {
    localStorage.setItem('pd_sekolah', sekolah);
    localStorage.setItem('pd_jurusan', jurusan);
    localStorage.setItem('pd_lulus', lulus);
    localStorage.setItem('pd_nilai', nilai);
    localStorage.setItem('pd_deskripsi', deskripsi);
  };
  console.log(setLocalStorage);
      
  return (
    <>
      <h5 className='my-4 mx-5'>Employee / Pendidikan </h5>
        <h1 className='mx-5'style={{ display:'inline',color:'#1E85F1' }}>Hello,Irvan!</h1> <br/>
      <span className='mx-5'>I'm very proud of you. You've very good education history.</span>
    <Card className='mt-4' style={{ border:'1px',width:'160vh',margin:'0 auto', borderRadius:"20px",marginBottom:'5vh' }}>
    <h4 className='mx-4 my-4' style={{ lineHeight:'35px' }}>You're on
      <h6 className="text-muted">PT.INSAN TEKNOTAMA SOLUSINDO as HEAD OF CREATIVE & DESIGN</h6>
    </h4> 
        <Row className="text-center px-5">
        <Col>  
        {school.map(data => (
        <Card className="mx-5" style={{ border:'1px',borderRadius:"15px" }}>
            <Button size="sm" href="pendidikan/edit" className="border rounded-pill"
              onClick={() =>setLocalStorage(
                data.pd_sekolah,
                data.pd_jurusan,
                data.pd_lulus,
                data.pd_nilai,
                data.pd_deskripsi
              )}
              style={{ position: 'absolute', right: '5vh', top: '10px', float: 'right', width: '10vh', backgroundColor: '#1E85F1' }} >Edit</Button>
          <Container className="my-5">
          <Row className="mx-5">
            <Col>
              <h6 style={{ color: '#83bef2', fontSize: '20px' }}>CAMPUS / SCHOOL
                <h5 className="my-1">{data.pd_sekolah}</h5>
              </h6>
            </Col>
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>FIELD 
                <h5 className="my-1">{data.pd_jurusan}</h5>
              </h6>            
            </Col>
          </Row>
              

          <Row className="mx-5 my-4">
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>GRADUATION YEAR 
                <h5 className="my-1">{data.pd_lulus}</h5>
              </h6>            
            </Col>
            <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>IPK 
                <h5 className="my-1">{data.pd_nilai}</h5>
              </h6>            
            </Col>
          </Row>

          <Row className="mx-5 my-4">
          <Col>
              <h6 style={{ color:'#83bef2',fontSize:'20px' }}>DATE OF LEAVE
                <h5 className="my-1"></h5>
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
                  <div className="my-3" style={{ textAlign: 'left', padding: '3vh', width: '90vh', margin: '0 auto', backgroundColor: '#c0e0fc', color: '#606D78', border: '1px', borderRadius: "15px" }}>{ data.pd_deskripsi }</div>
            </h6>            
          </Col>
          </Container>
            </Card> ))} <br /><br />
           
             
      </Col>


        </Row>
    </Card>
    <br/>


    </>
  )
}
export default Pendidikan;