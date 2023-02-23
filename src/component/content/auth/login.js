import { Button,Row,Col,Card,Form,InputGroup,Image} from "react-bootstrap";
import React, { useState } from "react";
import { ArrowRight, Cpu } from "react-bootstrap-icons";
import axios, { Axios } from "axios";
import { useNavigate  } from "react-router-dom";
import swal from "sweetalert2";  



const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  })

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
          swal.fire({  
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
      <Card className="m-5 container mx-auto" style={{ height:'fit-content' }}>
        <Row>
          <div className="col-6 text-center" style={{ height:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
            <h1>Sign in to Ngegaji</h1>
            <form>
              <input type='email' name='email' placeholder="Email" onChange={handleChange}/><br/><br/>
              <input type='password' name='password' placeholder="Password" onChange={handleChange} /><br/><br/>
              <a href="" style={{ borderBottom:'1px dotted black' }}>Forgot Your Password</a><br/><br/>
              <button className="btn btn-primary rounded-pill" type="submit" onClick={submit}>SIGN IN</button>
              </form>
              
            <br/>
          </div>

          <div className="col-6 bg-primary text-center" style={{ color: 'white', borderRadius: '15px' }}>
            <div className="m-auto mt-5" style={{ width:'fit-content' }}>
            <h1 style={{ color:'white' }}>Hi, Friend!</h1>
              <span style={{ fontSize:'20px' }}>Please enter your ID Number <br/> and Password to Login</span>
              </div>
          </div>
        </Row>
    </Card>


  </>
)}
export default Login;