import { Button,Row,Col,Card,Form,InputGroup,Image} from "react-bootstrap";
import React, { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import axios, { Axios } from "axios";
import { useNavigate  } from "react-router-dom";
import swal from "sweetalert2";  


const EditProfile = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const [name, setName] = useState([]);
  const [departemen, setDepartemen] = useState([]);
  const [gender, setGender] = useState([]);
  const [lahir, setLahir] = useState([]);
  const [tanggungan, setTanggungan] = useState([]);
  const [tempatLahir, setTempatLahir] = useState([]);
  const [status, setStatus] = useState([]);
  // const [addressarea, setAddressArea] = useState([]);
  // const [addresskp, setAddressKp] = useState([]);

  const setDataToAPI = () => {
    axios.post('',{
      password,
      email,
      phone,
      address,
    })
  }
    // axios.get('https://nusadevelopment.com/ngegaji/backend/Profile/profileView_backend.php')
    //   .then(function(response) {
    //     setEditProfile(response.data)
    //   })
  
    React.useEffect(() => {
      axios.get('https://nusadevelopment.com/ngegaji/backend/Profile/profileView_backend.php').then((response) => {
        setPassword(response.data[0].password);
        setEmail(response.data[0].email);
        setPhone(response.data[0].phone);
        setAddress(response.data[0].addres);
        setName(response.data[0].nama_karyawan);
        setDepartemen(response.data[0].departemen_karyawan);
        setGender(response.data[0].gender);
        setTanggungan(response.data[0].tanggungan_karyawan);
        setTempatLahir(response.data[0].tempat_lahir);
        setStatus(response.data[0].status_karyawan);
        setLahir(response.data[0].tanggal_lahir);
      });
    }, []);
  
    const data = {
      password : password,
      email : email,
      phone : phone,
      address: address,
      name: name,
      departemen: departemen,
      gender: gender,
      lahir: lahir,
      tanggungan: tanggungan,
      tempatLahir: tempatLahir,
      status : status
      
    }
  
    function update(e) {
      e.preventDefault()
      axios.put('nusadevelopment.com/ngegaji/backend/Pendidikan/pendidikanEdit_Backend.php', data)
        .then(function (response) {
          console.log(response);
          swal.fire({
            icon: 'error',
            title: 'Email Atau Password Salah!',
            text: 'Cek Kembali Email dan Password Anda!',
          });
          navigate('/pendidikan')
        }
      )
    }
  
  return (
    <>
        
      <Form action="/profile">
        <Row className="d-flex">
          <Col xs={12} md={7}>
            <h3 className="m-5">
              Attendance
              <h5>Employee / Profile / Edit Profile</h5>
            </h3>
          </Col>
          <Col xs={6} md={5}>
            <Button
              variant="success"
              type="submit"
              className="m-5 px-4 py-2 border rounded-pill"
              style={{ float: "right", fontSize: "15px" }}
              onClick = {update}
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

        <Card className="border mx-5" >
        <Row>
            <Col>
          <Button
            variant=""
            type="submit"
            className="border rounded-pill my-2 mx-3"
            style={{ float: "right",marginTop:'58px' ,fontSize: "15px",position:'absolute',right:'0' }}

            href="/pendidikan">
            <div>
            <span className="text-muted" style={{ float:'left' }}>Cancel</span>
            <span className="mx-2 text-muted" style={{ float:'right' }}>X</span>
            </div>
              </Button>
              </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12} md={6}>
              <Row>
                <Image
                  className="rounded-circle m-auto mb-3"
                  style={{ width: "200px" }}
                  src="https://bit.ly/dan-abramov"
                />

              </Row>
              <Row className="mx-5">
                <Col>
                  <h6 className="text-muted">First Name</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value = {name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Last Name</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                        disabled
                        value = {name}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mx-5">
                <h6 className="text-muted">Password</h6>
                <InputGroup size="sm" className="mb-3">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                      name="password"
                      value= {password}
                    onChange={(e)=> setPassword(e.target.value)}                    
                  />
                </InputGroup>
              </Row>

              <Row className="mx-5">
                <h6 className="text-muted">Email</h6>
                <InputGroup size="sm" className="mb-3">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row className="mx-5">
                <h6 className="text-muted">Phone</h6>
                <InputGroup size="sm" className="mb-3">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    name="phone"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                  />
                </InputGroup>
              </Row>

              <Row className="mx-5">
                <h6 className="text-muted">Position</h6>
                <InputGroup size="sm" className="mb-3">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    disabled
                    value={departemen}

                  />
                </InputGroup>
              </Row>
            </Col>

            <Col xs={6} md={6} className="mt-5">
              <Row className="mx-5">
                <h6 className="text-muted">Address</h6>
                <InputGroup size="sm" className="mb-3">
                  <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    name="address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                  />
                </InputGroup>
              </Row>
              <Row className="mx-5">
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="addressarea"
                      // onChange={(e)=> setAddressArea(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="addresskp"
                      // onChange={(e)=> setAddressKp(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <h6 className="text-muted">Date Of Birthday</h6>
                  <InputGroup size="sm" className="mb-3">
                  <Form.Control
                      className="text-center"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="date"
                      value={lahir}
                      disabled
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Place Of Birthday</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      disabled
                      value={tempatLahir}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <h6 className="text-muted">Gender</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={gender}
                      disabled
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Marriage Status</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={status}
                      disabled
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="mx-5">
                <Col>
                  <h6 className="text-muted">Payment Method</h6>
                  <Card
                    className="border"
                    style={{
                      borderRadius: "10px",
                      boxShadow: "none",
                      width: "30vh",
                    }}
                  >
                    <Card.Body className="text-center">
                      <h6>Visa ***** 4321</h6>
                      <span className="text-muted">Expired 01/02</span>
                    </Card.Body>
                    <Card.Footer style={{ height: "4vh" }}>
                      <a
                        style={{
                          position: "absolute",
                          right: "15px",
                          bottom: "7px",
                          color: "red",
                          float: "right",
                        }}
                        href=""
                      >
                        Remove
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>{" "}
              <br />
            </Col>
          </Row>
        </Card>
        <br></br>
        </Form>
    </>
  );
};
export default EditProfile;
