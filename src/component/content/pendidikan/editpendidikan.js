import {
  Button,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  Image,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "react-bootstrap-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

const EditProfile = () => {
  // useEffect (() => {
  //   setSchool(localStorage.getItem('pd_sekolah'))
  //   setField(localStorage.getItem('pd_jurusan'))
  //   setGraduation(localStorage.getItem('pd_lulus'))
  //   setIpk(localStorage.getItem('pd_nilai'))
  //   setJoin(localStorage.getItem('pd_sekolah'))
  //   setLeave(localStorage.getItem('pd_sekolah'))
  //   setDescription(localStorage.getItem('pd_deskripsi'))
  // },[])

  // const [school, setSchool] = useState('');

  // React.useEffect(() => {
  //   axios.get(`https://nusadevelopment.com/ngegaji/backend/Pendidikan/pendidikanView_Backend.php`)
  //     .then((response) => {
  //       setSchool(response.data);
  //   });
  // }, []);

  // const [state, setState] = useState(null)
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prev) => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // }
  // console.log(state);
  const navigate = useNavigate();
  const [school, setSchool] = useState([]);
  const [field, setField] = useState([]);
  const [graduation, setGraduation] = useState([]);
  const [ipk, setIpk] = useState([]);
  const [join, setJoin] = useState([]);
  const [leave, setLeave] = useState([]);
  const [description, setDescription] = useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://nusadevelopment.com/ngegaji/backend/Pendidikan/pendidikanView_Backend.php"
      )
      .then((response) => {
        setSchool(response.data[0].pd_sekolah);
        setField(response.data[0].pd_jurusan);
        setGraduation(response.data[0].pd_lulus);
        setIpk(response.data[0].pd_nilai);
        setJoin(response.data[0].pd_sekolah);
        setLeave(response.data[0].pd_lulus);
        setDescription(response.data[0].pd_deskripsi);
      });
  }, []);

  const data = {
    school: school,
    field: field,
    graduation: graduation,
    ipk: ipk,
    join: join,
    leave: leave,
    description: description,
  };
  console.log(data);

  function update(e) {
    e.preventDefault();
    axios
      .put(
        "nusadevelopment.com/ngegaji/backend/Pendidikan/pendidikanEdit_Backend.php",
        data
      )
      .then(function (response) {
        swal.fire({
          icon: "error",
          title: "Email Atau Password Salah!",
          text: "Cek Kembali Email dan Password Anda!",
        });
        navigate("/pendidikan");
      });
  }

  // const submit = (e) => {
  //   e.preventDefault()
  //   axios.post('https://nusadevelopment.com/ngegaji/backend/pendidikaedit_Backend.php', state)
  //     .then(function (response) {
  //       console.log(response);
  //     }).catch(function (error) {
  //     // handle error
  //       console.log(error);
  //     })

  // }
  // function updatePost() {
  //   axios
  //     .put(`${baseURL}/1`, {
  //       title: "Hello World!",
  //       body: "This is an updated post."
  //     })
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }

  // if (!state) return "No post!"

  return (
    <>
      <Form action="/profile">
        <Row className="d-flex">
          <Col xs={12} md={7}>
            <h3 className="m-5">
              Edit Pendidikan
              <h5>Employee / Pendidikan / Edit Pendidikan</h5>
            </h3>
          </Col>
          <Col xs={6} md={5}>
            <Button
              variant="success"
              type="submit"
              className="mx-5 px-4 py-2 rounded-pill"
              style={{ float: "right", marginTop: "58px", fontSize: "15px" }}
            >
              Save
              <ArrowRight
                className="px-1"
                style={{ marginLeft: "35px" }}
                size={30}
                onClick={update}
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
                style={{
                  float: "right",
                  marginTop: "58px",
                  fontSize: "15px",
                  position: "absolute",
                  right: "0",
                }}
                href="/pendidikan"
              >
                <div>
                  <span className="text-muted" style={{ float: "left" }}>
                    Cancel
                  </span>
                  <span className="mx-2 text-muted" style={{ float: "right" }}>
                    X
                  </span>
                </div>
              </Button>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <Row className="ms-5">
                <Col>
                  <h6 className="text-muted">Campus / School</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      name="sekolah"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">Field</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={field}
                      onChange={(e) => setField(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row className="ms-5">
                <Col>
                  <h6 className="text-muted">Graduation Year</h6>
                  <InputGroup size="sm" type="date" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      value={graduation}
                      onChange={(e) => setGraduation(e.target.value)}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <h6 className="text-muted">IPK</h6>
                  <InputGroup size="sm" className="mb-3">
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="number"
                      value={ipk}
                      onChange={(e) => setIpk(e.target.value)}
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
                      name="date"
                      // onChange={(e)=> setJoin(e.target.value)}
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
                      // onChange={(e)=> setLeave(e.target.value)}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <h6 className="text-muted" style={{ left: "0" }}>
                Description
              </h6>
              <div className="me-5">
                <textarea
                  className="form-control"
                  style={{ height: "23vh" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </Col>
          </Row>
        </Card>
      </Form>
    </>
  );
};
export default EditProfile;
