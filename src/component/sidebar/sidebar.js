import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
    <img className="img-fluid" src={process.env.PUBLIC_URL + './logo/ngegaji-white.png'} alt="Logo Ngegaji" style={{width:"30vh"}}/>
    <p>Main</p>
    <ul>
    <a href="/">
        <Link to={'/dashboard'} className="side">
        <li className="dashboard" >
             Dashboard
        </li>
        </Link>
    </a>
    </ul>
    
    <p>Employee</p>
    <ul>
        <Link to={'/profile'}>
        <li>
            Profile
        </li>
        </Link>
        
        <Link to={'/pengalaman'}>
        <li>
            Pengalaman
        </li>
        </Link>
        
        <Link to={'/pendidikan'}>
        <li>
            Pendidikan
        </li>
        </Link>
        
        <Link to={'/attendance'}>
        <li>
            Attendance
        </li>
        </Link>
        
    </ul>
    
    <p>Finance</p>
    <ul>
        <Link to={'/Reimbursement'}>
        <li>
            Reimbursement
        </li>
        </Link>
        
        <Link to={'/BankPayment'}>
        <li>
            Bank Payment
        </li>
        </Link>
        
        <Link to={'/Expense'}>
        <li>
            Expense Request
        </li>
        </Link>
    </ul>
    </Menu>
  );
};
