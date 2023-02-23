import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Steps } from 'antd';
import { Stack, Row, Col, Button, ProgressBar, Table } from 'react-bootstrap';
import { CircularProgressLabel, CircularProgress, Center } from '@chakra-ui/react';
import 'antd/dist/antd.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const { Step } = Steps;

const Attendance = () => {

  const [bool, setBool] = React.useState(false);

  const punchin = (e) => {
    e.preventDefault();
    axios.post('https://nusadevelopment.com/ngegaji/backend/attendance.php', 1)
    .then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        setBool(true);

        Swal.fire({  
          icon: 'Success',  
          title: 'Punch In Berhasil!',  
          text: 'Selamat Bekerja, Have a nice day!',  
        });  
      } else {
        Swal.fire({  
          icon: 'error',  
          title: 'Punch In Gagal!',  
          text: 'Pastikan Data Anda Sudah Benar!',  
        });  
      }
    }).catch(function (error) {
    // handle error
      console.log(error);
     
    })    
  }

  const punchout = (e) => {
    e.preventDefault();
    axios.post('https://nusadevelopment.com/ngegaji/backend/attendance.php', 1)
    .then(function (response) {
      console.log(response);
      if (response.data.status === 200) {
        setBool(false);

        Swal.fire({  
          icon: 'success',  
          title: 'Punch Out Berhasil!',  
          text: 'Terimakasih Atas Kerja Kerasnya!',  
        });  
      } else {
        Swal.fire({  
          icon: 'error',  
          title: 'Punch Out Gagal!',  
          text: 'Pastikan Data dan Jaringan Anda Sudah Benar!',  
        });  

        
      }
    }).catch(function (error) {
    // handle error
      console.log(error);
     
    })    
  }

  return (
    <>
    <h3 className='m-5' style={{}}>Attendance 
      <h5>Dashboard / Attendance</h5>
    </h3>

    <CardGroup className='m-5'>
      <Card className='border' style={{ borderRadius: "25px", boxShadow:"none"}}>
        <Card.Body className='px-5'>
        <Stack direction="horizontal" gap={2}>
          <div className="fw-bold fs-4" style={{ color:'#1E85F1' }}>Timesheet</div>
          <div className="mx-1">11 Mar 2019</div>
        </Stack>
        <Card.Body className='border p-3 my-3' style={{ borderRadius: "23px" }}>
          <Card.Title className='fw-semibold fs-5'>Punch In At</Card.Title>
          <Card.Subtitle className='fs-6 text-muted'>Wed, 11th Mar 2019 10.00 AM</Card.Subtitle>        
        </Card.Body>    
        <Center>
        <CircularProgress className='text-center d-flex md-auto' value={20} size={150}>
        <CircularProgressLabel><h4>3.45 hrs</h4></CircularProgressLabel>
        </CircularProgress>      
        </Center>
            <Button className='d-block mx-auto mt-4' onClick={bool === false ? punchin : punchout} type="button" variant="success" >
              {bool === false ? 'Punch In' : 'Punch Out'}</Button>
        </Card.Body>
        <Card.Footer>
          <Row className='text-center'>
            <Col>
              <Card.Title className='fs-6'>BREAK</Card.Title>
              <Card.Subtitle >1.21hrs</Card.Subtitle>
            </Col>
            <Col>
              <Card.Title className='fs-6'>OVERTIME</Card.Title>
              <Card.Subtitle>1.21hrs</Card.Subtitle>
            </Col>
          </Row>        
        </Card.Footer>
      </Card>

      <Card className='mx-3 border' style={{ borderRadius: "25px", boxShadow:"none"}}>
        <Card.Body className='px-5'>
          <Card.Title className="fw-bold fs-4" style={{ color:'#1E85F1' }}>Statistics</Card.Title>
          <Card.Body className='border py-3 px-4 my-2' style={{ borderRadius: "16px" }}>
            <div class="d-flex">
              <Card.Title className='flex-grow-1 fw-semibold fs-6'>Today</Card.Title>
              <div>3.45 / 8 hrs</div>
            </div>
            <ProgressBar now={80} variant="success"/>
            </Card.Body>
          <Card.Body className='border py-3 p-4 my-2' style={{ borderRadius: "16px" }}>
            <div class="d-flex">
              <Card.Title className='flex-grow-1 fw-semibold fs-6'>This Week</Card.Title>
              <div>3.45 / 8 hrs</div>
            </div>            
          <ProgressBar now={20} variant="danger"/>
          </Card.Body> 
          <Card.Body className='border py-3 p-3 my-2' style={{ borderRadius: "16px" }}>
          <div class="d-flex">
              <Card.Title className='flex-grow-1 fw-semibold fs-6'>This Month</Card.Title>
              <div>3.45 / 8 hrs</div>
          </div>  
          <ProgressBar now={40} variant="info"/>
          </Card.Body> 
          <Card.Body className='border py-3 p-3 my-2' style={{ borderRadius: "16px" }}>
          <div class="d-flex">
              <Card.Title className='flex-grow-1 fw-semibold fs-6'>Remaining</Card.Title>
              <div>90 / 160 hrs</div>
          </div>
          <ProgressBar now={70} />
          </Card.Body> 
          <Card.Body className='border py-3 p-3 my-2' style={{ borderRadius: "16px" }}>
          <div class="d-flex">
              <Card.Title className='flex-grow-1 fw-semibold fs-6'>Overtime</Card.Title>
              <div>5 hrs</div>
          </div>
          <ProgressBar now={30} variant="warning" />
          </Card.Body>  
        </Card.Body>
      </Card>

      <Card className='border'  style={{ borderRadius: "25px", boxShadow:"none"}}>
        <Card.Body>
          <Card.Title className="fw-bold fs-4" style={{ color:'#1E85F1' }}>Today Activity</Card.Title>
          <Steps progressDot className='.text-warning' current={6} direction="vertical">
            <Step title="Punch In At" description="10.00 AM" />
            <Step title="Punch Out At" description="07.00 PM" />
            <Step title="Punch In At" description="10.00 AM" />
            <Step title="Punch Out At" description="07.00 PM" />
            <Step title="Punch In At" description="10.00 AM" />
            <Step title="Punch Out At" description="07.00 PM" />
          </Steps>
        </Card.Body>
      </Card>
    </CardGroup>

    <Row className='m-4'>
    <Col sm={8}>
    <Card className='border mx-3' style={{ borderRadius: "25px", boxShadow:"none"}}>
        <Card.Body className='px-3'>
          <Card.Title className="fw-bold fs-4" style={{ color:'#1E85F1' }}>Attendance List</Card.Title>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Punch In</th>
                  <th>Punch Out</th>
                  <th>Production</th>
                  <th>Overtime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>19 Feb 2022</td>
                  <td>10 AM</td>
                  <td>7 PM</td>
                  <td>9 hrs</td>
                  <td>2 hrs</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>19 Feb 2022</td>
                  <td>10 AM</td>
                  <td>7 PM</td>
                  <td>9 hrs</td>
                  <td>2 hrs</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>19 Feb 2022</td>
                  <td>10 AM</td>
                  <td>7 PM</td>
                  <td>9 hrs</td>
                  <td>2 hrs</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>19 Feb 2022</td>
                  <td>10 AM</td>
                  <td>7 PM</td>
                  <td>9 hrs</td>
                  <td>2 hrs</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>19 Feb 2022</td>
                  <td>10 AM</td>
                  <td>7 PM</td>
                  <td>9 hrs</td>
                  <td>2 hrs</td>
                </tr>
              </tbody>
          </Table>
        </Card.Body>
      </Card>
      </Col>

      <Col sm={4}>
      <Card className='border'  style={{ borderRadius: "25px", boxShadow:"none"}}>
        <Card.Body>
          <Card.Title className="fw-bold fs-4" style={{ color:'#1E85F1' }}>Daily Record</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
      </Row>
      
      <Row className='mx-5 d-flex' style={{ flexDirection:'row', justifyContent:"space-between" }}>
      <Card className='border col-3'  style={{ borderRadius: "25px", boxShadow:"none"}}>
          <Card.Body>
            <div className='d-flex'>
            <div style={{ width:'100%' }}>
          <Card.Title className="fw-bold fs-1" style={{ color:'#1E85F1' }}>13</Card.Title>
          <Card.Text className='text-muted'>
            Leave 
              </Card.Text>
              </div>
                <button className='btn' style={{ margin: 'auto', padding: '3vh 15px', borderRadius: '15px',backgroundColor:'#358EEA',color:'white' }}>
                  <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                  </button>
            </div>
          </Card.Body>
        </Card>

        <Card className='border col-3'  style={{ borderRadius: "25px", boxShadow:"none"}}>
          <Card.Body>
            <div className='d-flex'>
            <div style={{ width:'100%' }}>
          <Card.Title className="fw-bold fs-1" style={{ color:'#1E85F1' }}>20</Card.Title>
          <Card.Text className='text-muted'>
            Offsite 
              </Card.Text>
              </div>
                <button className='btn' style={{ margin: 'auto', padding: '3vh 15px', borderRadius: '15px',backgroundColor:'#358EEA',color:'white' }}>
                  <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                  </button>
            </div>
          </Card.Body>
        </Card>
        
        <Card className='border col-3'  style={{ borderRadius: "25px", boxShadow:"none"}}>
          <Card.Body>
            <div className='d-flex'>
            <div style={{ width:'100%' }}>
          <Card.Title className="fw-bold fs-1" style={{ color:'#1E85F1' }}>15</Card.Title>
          <Card.Text className='text-muted'>
            Re-Punching 
              </Card.Text>
              </div>
                <button className='btn' style={{ margin: 'auto', padding: '3vh 15px', borderRadius: '15px',backgroundColor:'#358EEA',color:'white' }}>
                  <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                  </button>
            </div>
          </Card.Body>
        </Card>
        
        <Card className='border col-3'  style={{ borderRadius: "25px", boxShadow:"none"}}>
          <Card.Body>
            <div className='d-flex'>
            <div style={{ width:'100%' }}>
          <Card.Title className="fw-bold fs-1" style={{ color:'#1E85F1' }}>22</Card.Title>
          <Card.Text className='text-muted'>
            Ovetime 
              </Card.Text>
              </div>
                <button className='btn' style={{ margin: 'auto', padding: '3vh 15px', borderRadius: '15px',backgroundColor:'#358EEA',color:'white' }}>
                  <i class="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
                  </button>
            </div>
          </Card.Body>
        </Card>
      </Row><br/><br/>
    </>

  );
}

export default Attendance;