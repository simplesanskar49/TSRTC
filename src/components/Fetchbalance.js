import React from "react";
import SideNavbar from "./SideNavbar";
import Navigation from "./Navigation";
import "../css/fetch.css";
import Footer from "./Footer";
import {
  Form,
  Input,
  Button,
  
} from "antd";
import axios from "axios";
   
 // var errorClass = "hide";
 var email; // = setEmail;
 var phone;
 function setPhone(val){
  phone = val.target.value;
}

function setEmail(val){
 email = val.target.value;
}

function handleSubmit(){
  
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({  
      'email': email,
      'mobileNumber': phone})
};

// const fetchJSON= (async () => {
//   const response = await fetch('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance', requestOption)
//   return await response.json()
// })();

//fetch('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance', requestOptions)
   // .then(response => response.json())
  //  .then(data => this.setState({ postId: data.id }));
    /*.then((response) => {
      var response = response.json();
      console.log(response);
      //response.set('Access-Control-Allow-Origin':'*');
    })*/
    axios.get(('http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance'))
    .then(async(result) => {
      console.log(result);
      console.log(result.json())
      console.log(result.data);
      if (result.status === 200) {
          console.log("recieved");
          console.log(JSON.stringify(result));
      } else {
          console.log("Not received");
      }
      
    })
    


}
  

function Fetchbalance() {
  
  /*const handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [email, setEmail] = useState();
  const [phone, setPhone] = useState(); 

  const [isValid, setIsValid] = useState(false);
 
  useEffect(() => {
    fetch("http://localhost:8092/usr/RewardsProgram/v1/100010/getBalance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      },
      body: JSON.stringify({
        email: email,
        mobileNumber: phone,
      }),
    })
      .then((response) => {
        response.json();
        console.log(response.json());
        //response.set('Access-Control-Allow-Origin':'*');
      })
      .then((result) => {
        if (result.status === "success") {
          setIsValid(true);
          this.push("/Checkbalance.js")
          //set class name of error
          //setIsLoggedIn(true);
        } else {
        //  setIsValid(false);
          //setIsIt(true);
          //setIsLoggedIn(false);
        }
        console.log(result.status);
        console.log(JSON.stringify(result));
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  }, []);*/
  /*const validate = (e) => {
    e.preventDefault();

    if (isValid) {
  
     
    } else {
    
    }
    /*if (username == "admin" && password == "admin") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }*/
  


    
  return (
    <div className="createUser">
        <div>
        <Navigation status={true} />
        </div>
        <div>
            <SideNavbar />
        </div>
      
    
      <div className="userForm1"> 
      
     <Form
          className="form1"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >        
        <h1><center>Check Balance</center></h1>
         <Form.Item label="Email" name="email" 
          onChange={setEmail} >
            <Input />
          </Form.Item>      
          <Form.Item label="Mobile No" name="phone" onChange={setPhone}>
            <Input />
          </Form.Item>      
          <Form.Item className="userCreateButton">
            <Button type="primary"  onClick={handleSubmit} >Fetch </Button>
          </Form.Item>
        
        </Form>
      </div>

      <div>
        <Footer /> 
        </div>
      </div>
  );
  }
export default Fetchbalance;