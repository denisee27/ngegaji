import { Button,Row,Col,Card,Form,InputGroup,Image} from "react-bootstrap";
import React, { useState } from "react";
import { ArrowRight, Cpu } from "react-bootstrap-icons";
import axios, { Axios } from "axios";



const Welcome = () => {
  return (
  <>
      <Card className="m-5 container mx-auto" style={{ height:'fit-content' }}>
        <Row>
        <div className="col-5 bg-primary text-center" style={{ color: 'white', borderRadius: '15px',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'  }}>
            <h1 style={{ color:'white' }}>Welcome Back!</h1>
              <span style={{ fontSize: '20px' }}>To keep connect with us, please <br/>
              login with your personal info</span><br />
              <a href="/login">
            <button className="btn  btn-outline-light rounded-pill">
            SIGN IN
              </button>
              </a>
          </div>

          <div className="col-7 text-center" style={{ height:'70vh'}}>
            <h1>Sign in to Ngegaji</h1>
            <form method="POST">
              <input type='text' name='email' placeholder="Email" /><br/><br/>
              <input type='password' name='password' placeholder="Password" /><br/><br/>
              <a href="" style={{ borderBottom:'1px dotted black' }}>Forgot Your Password</a><br/><br/>
              <button className="btn btn-primary rounded-pill">SIGN IN</button>
            </form><br/>
          </div>
        </Row>
    </Card>


  </>
)}
export default Welcome;