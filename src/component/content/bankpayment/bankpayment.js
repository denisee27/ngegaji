import { Button,Row,Col,Card,Form,InputGroup} from "react-bootstrap";
import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const BankPayment = () => {

  const navigate = useNavigate();

  const [state, setState] = useState({
    value: "",
    category: "",
    handler: "",
    date_payment: "",
    beneficiary: "",
    way_payment: "",
    destination_bank: "",
    bank_account_name: "",
    bank_account: "",
    description: "",
    value: "",
    invoice: "",
    docs: "",
    purpose_payment: "",
    workflow: "",
    purpose_item: "",
  })
  console.log(state);

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  
  const submit = (e) => {
    e.preventDefault()
    axios.post('https://nusadevelopment.com/ngegaji/backend/login_backend.php', state)
      .then(function (response) {
        // console.log(response);
        if (response.data.status === 200) {
          navigate('/dashboard');      
        } else {
          Swal.fire({  
            icon: 'error',  
            title: 'Email Atau Password Salah!',  
            text: 'Cek Kembali Email dan Password Anda!',  
          });  
          navigate('/login');

        }
      }).catch(function (error) {
      // handle error
        console.log(error);
       
      })
      
  }


  return (
    <>
 <Form action="/profile">
        <Row className="d-flex">
          <Col xs={12} md={7}>
            <h3 className="m-5">
              Bank Payment General
              <h5>Employee / Finance / Bank Payment General</h5>
            </h3>
          </Col>
          <Col xs={6} md={5}>
            <Button
              variant="success"
              type="submit"
              className="mx-5 px-4 py-2 rounded-pill"
              style={{ float: "right",marginTop:'58px' ,fontSize: "15px" }}
            >
              Save
              <ArrowRight
                className="px-1"
                style={{ marginLeft: "35px" }}
                size={30}
              />
            </Button>
          </Col>
        </Row>

        <Card className="border mx-5">
          <Row>
            <Col>
          <Button
            variant=""
            type="submit"
            className="border rounded-pill my-2 mx-3"
            style={{ float: "right",marginTop:'58px' ,fontSize: "15px", position:'absolute', right:'0' }}
            href="/profile">
            <div>
            <span className="text-muted" style={{ float:'left' }}>Cancel</span>
            <span className="mx-2 text-muted" style={{ float:'right' }}>X</span>
            </div>
              </Button>
              </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <Row className="mx-5">
                <Col>
                  <h5 className="text-muted">Value (IDR)</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="value"
                    />
                </Col>
              </Row><br/>

              <Row className="ms-5">
              <Col>
                  <h5 className="text-muted">Project Categorize</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="category"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Handler</h5>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row><br/>
              
              <Row className="ms-5">
              <Col>
                  <h5 className="text-muted">Date Payment</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                      type="date"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Name Of Beneficiary</h5>
                  <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="beneficiary"
                    />
                </Col>
              </Row>

            </Col>
            <Col>
              <h5 className="text-muted" style={{ left: '0' }}>Overall Description</h5>
              <div className="me-5">
                <textarea
                  className="form-control"
                  style={{ height:'30vh' }}
                  name="description"
                  >
                  </textarea>
                  
              </div>
            </Col>
          </Row>

          <Row className="mx-5">
              <Col>
                  <h5 className="text-muted">Way of Payment</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                      type="date"
                      
                    />
                </Col>
              <Col>
                  <h5 className="text-muted">Destination Bank</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                      type="text"
                    />
                </Col>
              <Col>
                  <h5 className="text-muted">Bank Account Name</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                      type="text"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Bank Account</h5>
                  <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="beneficiary"
                      type="text"
                    />
                </Col>
          </Row><br/><br/>
          
        </Card><br/>

        <Card className="border mx-5">
          <h4 className="mx-5 mt-4 container">Payment Detail</h4>
          <Row className="mb-5">
            <Col>
              <Row className="ms-5">
                <Col>
                  <h5 className="text-muted">Value (IDR)</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                      type="number"
                    />
                </Col>
              </Row><br/>

              <Row className="ms-5">
              <Col>
                  <h5 className="text-muted">Invoice No.</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                      type="text"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Supporting Docs</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="file"
                      name="ipk"
                    />
                </Col>
              </Row>

            </Col>
            <Col>
              <h5 className="text-muted" style={{ left: '0' }}>Purpose</h5>
              <div className="me-5">
                <textarea
                  className="form-control container"
                  style={{ height:'19vh' }}
                  name="description"
                  >
                  </textarea>
                  
              </div>
            </Col>
          </Row>

        </Card><br/>

        <Card className="border mx-5">
          <h4 className="mx-5 mt-4 container">Add Items</h4>
          <Row className="mb-5">
            <Col>

              <Row className="mx-5">
              <Col className="col-2">
                  <h5 className="text-muted">Associated Workflow</h5>
                   
                </Col>
                <Col className="col-4">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="file"
                      name="ipk"
                    />
                </Col>
              </Row><br/>
              
              <Row className="mx-5">
              <Col className="col-2">
                  <h5 className="text-muted">Purpose</h5>
                   
                </Col>
                <Col className="col-10">
                  <textarea
                    className="form-control container"
                    name="description"
                    >
                    </textarea>
                </Col>
              </Row>

            </Col>
         
          </Row>

        </Card><br/>
        
        
      </Form><br/>
    </>
  )
}
export default BankPayment;