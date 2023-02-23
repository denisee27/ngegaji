import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Circle, Filter } from "react-bootstrap-icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { BsCircle } from "react-icons/bs";
import axios from "axios";

const EmployeeCard = () => {
  const [profile, setProfile] = useState([]);

  axios
    .get(
      "https://nusadevelopment.com/ngegaji/backend/Profile/profileView_backend.php"
    )
    .then(function (response) {
      setProfile(response.data);
    });

  return (
    <>
      <h3 className="mx-5 my-4">
        Attendance
        <h5>Dashboard / Employee</h5>
      </h3>
      <Card
        className="mx-5"
        style={{ border: "1px", borderRadius: "20px", marginBottom: "5vh" }}
      >
        <h4 className="mx-5 my-4">
          Employee Profile
          <h6 className="text-muted">PT.INSAN TEKNOTAMA SOLUSINDO</h6>
        </h4>
        {profile.map((data) => (
          <Row>
            <Col xs={12} md={7}>
              <Card
                className="mx-5"
                style={{ border: "1px", borderRadius: "15px" }}
              >
                <Link to={"/profile/edit"}>
                  <Button
                    size="sm"
                    className="border rounded-pill"
                    style={{
                      position: "absolute",
                      right: "5vh",
                      top: "10px",
                      float: "right",
                      width: "10vh",
                    }}
                    variant="outline-dark"
                  >
                    Edit
                  </Button>
                </Link>
                <Container className="my-5">
                  <Row className="mx-5">
                    <Col>
                      <h6 className="text-muted">
                        NO. KTP
                        <h6 className="my-1">{data.nik_karyawan}</h6>
                      </h6>
                    </Col>
                    <Col>
                      <h6 className="text-muted">
                        DEPARTEMENT
                        <h6 className="my-1">{data.departemen_karyawan}</h6>
                      </h6>
                    </Col>
                  </Row>

                  <Row className="mx-5 my-4">
                    <Col>
                      <h6 className="text-muted">
                        MARRIAGE STATUS
                        <h6 className="my-1">{data.status_karyawan}</h6>
                      </h6>
                    </Col>
                    <Col>
                      <h6 className="text-muted">
                        POSITION
                        <h6 className="my-1">{data.posisi_karyawan}</h6>
                      </h6>
                    </Col>
                  </Row>

                  <Row className="mx-5 my-4">
                    <Col>
                      <h6 className="text-muted">
                        DOB
                        <h6 className="my-1">
                          {data.tanggal_lahir}{" "}
                          <p style={{ display: "inline", color: "gray" }}></p>
                        </h6>
                      </h6>
                    </Col>
                    <Col>
                      <h6 className="text-muted">
                        BANK
                        <h6
                          className="border rounded-pill py-1 text-center my-1"
                          style={{ width: "27vh" }}
                        >
                          --
                        </h6>
                      </h6>
                    </Col>
                  </Row>
                  <Row className="mx-5">
                    <Col>
                      <h6 className="text-muted">
                        NUMBER OF CHILDREN
                        <h6 className="my-1">{data.tanggungan_karyawan}</h6>
                      </h6>
                    </Col>
                    <Col>
                      <h6 className="text-muted">
                        ACCOUNT NUMBER
                        <h6 className="my-1">--</h6>
                      </h6>
                    </Col>
                  </Row>
                </Container>
              </Card>

              <Card className="mx-5" style={{ margin: "5vh 10px" }}>
                <Row>
                  <Col className="mx-4">
                    <h5
                      className="mt-2 text-primary"
                      style={{ marginRight: "auto" }}
                    >
                      PT. Insan Teknotama Solusindo
                    </h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="mx-3 mb-4">
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "#EFEFEF",
                        borderRadius: "10px",
                      }}
                    >
                      <h6 className="mt-2 ms-3 text-muted"> MONTHLY SALARY</h6>
                      <h5 className="ms-4 text-dark mt-1">Rp.,---</h5>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col xs={6} md={5}>
              <Card
                className="mx-5"
                style={{ backgroundColor: "#259CF8", height: "15vh" }}
              >
                <Container>
                  <Row className="mx-auto my-3 ">
                    <table>
                      <tr>
                        <td
                          className="text-center"
                          style={{ width: "13vh" }}
                          rowSpan={2}
                        >
                          <Avatar
                            className="border bg-white"
                            size={64}
                            icon={<UserOutlined />}
                            src={
                              <Image
                                src="https://joeschmoe.io/api/v1/random"
                                style={{ width: "100%" }}
                              />
                            }
                          />{" "}
                        </td>
                        <td>
                          <h4
                            className="my-2 mt-3"
                            style={{ lineHeight: "10px", color: "white" }}
                          >
                            {data.nama_karyawan}
                          </h4>
                          <h6>{data.posisi_karyawan}</h6>
                        </td>
                      </tr>
                    </table>
                  </Row>
                </Container>
              </Card>

              <Card
                className="mx-5"
                style={{ margin: "40px 0", height: "30vh" }}
              >
                <Container>
                  <Row>
                    <Col style={{ margin: "15px 0", color: "#1F85F1" }}>
                      <BsCircle /> Contact Information
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <table>
                    <tr>
                      <td style={{ padding: "5px", paddingRight: "100px" }}>
                        <div className="text-muted">Email</div>
                        <div>{data.email}</div>
                      </td>
                      <td style={{ padding: "5px" }}>
                        <div className="text-muted">Phone</div>
                        <div>{data.phone}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "5px" }}>
                        <div className="text-muted">Mobile</div>
                        <div>{data.phone}</div>
                      </td>
                      <td rowSpan={2} style={{ padding: "5px" }}>
                        <div className="text-muted">Address</div>
                        <div>{data.addres}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: "5px" }}>
                        <div className="text-muted">Notes</div>
                        <div>--</div>
                      </td>
                    </tr>
                  </table>
                </Container>
              </Card>
              <Card
                className="mx-5"
                style={{ backgroundColor: "#259CF8", height: "15vh" }}
              >
                <Container>
                  <h6 className="mt-2">Reporting Person</h6>
                  <Row className="mx-auto my-2 ">
                    <table>
                      <tr>
                        <td
                          className="text-center"
                          style={{ width: "13vh" }}
                          rowSpan={2}
                        >
                          <Avatar
                            className="border bg-white"
                            size={64}
                            icon={<UserOutlined />}
                            src={
                              <Image
                                src="https://joeschmoe.io/api/v1/random"
                                style={{ width: "100%" }}
                              />
                            }
                          />{" "}
                        </td>
                        <td>
                          <h4
                            className="my-2 mt-3"
                            style={{ lineHeight: "10px", color: "white" }}
                          >
                            {data.nama_karyawan}
                          </h4>
                          <h6 style={{ color: "white" }}>
                            {data.departemen_karyawan}
                          </h6>
                        </td>
                      </tr>
                    </table>
                  </Row>
                </Container>
              </Card>
            </Col>
          </Row>
        ))}
      </Card>
      <br />
    </>
  );
};
export default EmployeeCard;
