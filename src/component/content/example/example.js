import React, {  useState,useEffect  } from "react";
import { Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";

const Example = () => {
const [names, setName] = useState([]);
 
useEffect(() => {
  axios.get('http://localhost/project/ngegaji_app/viewprofile_backend.php')
  .then(response => {
    console.log(response.data);
    setName(response.data);
  }) 
});
  
  return (
    <>
    {/* {names.map(=(name) =>(
      <div key={name.id}>{name.name}</div>
    ))} */}
</>
  );
        }
 
        
export default Example;