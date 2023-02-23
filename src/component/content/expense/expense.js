import { Button,Row,Col,Card,Form,InputGroup} from "react-bootstrap";
import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Expense = () => {
  return (
    <>
      <Form action="/profile">
        <Row className="d-flex">
          <Col xs={12} md={7}>
            <h3 className="m-5">
              Expense
              <h5>Employee / Finance / Expense</h5>
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
              <Row className="ms-5">
                <Col>
                  <h5 className="text-muted">Project CategorizeS</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Type of Expense</h5>
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
                  <h5 className="text-muted">Internal Process</h5>
                  <Form.Select aria-label="Default select example">
                    <option>Please Select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <h5 className="text-muted">Name of Beneficiary</h5>
                  <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="graduation"
                    />
                </Col>
              </Row>

            </Col>
            <Col>
              <h5 className="text-muted" style={{ left: '0' }}>Overall Description</h5>
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
          <Row>
            <Col>
          <Button
            variant=""
            type="submit"
            className="border rounded-pill my-2 mx-3"
            style={{ float: "right",marginTop:'58px' ,fontSize: "15px", position:'absolute', right:'0' }}
            href="">
            <div>
            <span className="text-muted" style={{ float:'left' }}>Add More Item</span>
            <span className="mx-2 text-muted" style={{ float:'right' }}></span>
            </div>
              </Button>
              </Col>
          </Row> <br/>
          <h4 className="mx-5 mt-1 container">Expense Detail</h4>
          <Row className="me-5">
            <Col>
              <Row className="ms-5">
                <Col>
                  <h5 className="text-muted">Name Item</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Budget (IDR)</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                    />
                </Col>
                <Col>
                  <h5 className="text-muted">Quantity</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                    />
                </Col>
              </Row><br/>


            </Col>
          </Row>
        </Card><br/>
        
        <Card className="border mx-5">
          <h4 className="mx-5 mt-1 container">Reimbursement Detail</h4>
          <Row className="mb-5">
            <Col>
              <Row className="ms-5">
                <Col>
                  <h5 className="text-muted">Date of Expense</h5>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="school"
                      type="date"
                    />
                </Col>
              </Row><br/>

              <Row className="ms-5">
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
            
            <Col className="col-9">
              <h5 className="text-muted">Cause Of Expense</h5>
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
        </Card><br />
      </Form><br/>
    </>
  );
};
export default Expense;
