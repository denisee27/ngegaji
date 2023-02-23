import { Button,Row,Col,Card,Form,InputGroup,Image} from "react-bootstrap";
import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import axios from "axios";

const EditProfile = () => {
  const [company, setCompany] = useState([]);
  const [department, setDepartment] = useState([]);
  const [position, setPosition] = useState([]);
  const [join, setJoin] = useState([]);
  const [leave, setLeave] = useState([]);
  const [description, setDescription] = useState([]);

  React.useEffect(() => {
    axios.get('https://nusadevelopment.com/ngegaji/backend/Pengalaman/pengalamanView_Backend.php').then((response) => {
      setCompany(response.data[0].pd_sekolah);
      setDepartment(response.data[0].pd_jurusan);
      setPosition(response.data[0].pd_lulus);
      setJoin(response.data[0].pd_sekolah);
      setLeave(response.data[0].pd_lulus);
      setDescription(response.data[0].pd_deskripsi);
    });
  }, []);

  return (
    <>
      <Form action="/profile">
        <Row className="d-flex">
          <Col xs={12} md={7}>
            <h3 className="m-5">
              Edit Pengalaman
              <h5>Employee / Pengalaman / Edit Pengalaman</h5>
            </h3>
          </Col>
          <Col xs={6} md={5}>
            <Button
              variant="success"
              type="submit"
              className="mx-5 px-4 py-2 rounded-pill"
              style={{ float: "right",marginTop:'58px' ,fontSize: "15px" }}
              // onClick ={sendDataToAPI}
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
                  <h6 className="text-muted">Company</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="company"
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="ms-5">
              <Col>
                  <h6 className="text-muted">Department</h6>
                  <InputGroup size="sm" type='date' className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="department"
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Position</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="position"
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="ms-5">
                <Col>
                  <h6 className="text-muted">Date Of Join</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="date"
                      name="jpin"
                      onChange={(e) => setJoin(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Date Of Leave</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="date"
                      name="leave"
                      onChange={(e) => setLeave(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

            </Col>
            <Col>
              <h6 className="text-muted" style={{ left: '0' }}>Description</h6>
              <div className="me-5">
                <textarea
                  className="form-control"
                  style={{ height: '23vh' }}
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  >
                  </textarea>
              </div>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};
export default EditProfile;
