import React,{useState,useContext,useEffect} from 'react'
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = () => {
  const alertContext=useContext(AlertContext);
  const authContext=useContext(AuthContext);

  const {setAlert}=alertContext;

  const {register,error,clearErrors}=authContext;

  useEffect(() => {
    if(error==='exists'){
      setAlert(error,'danger');
      clearErrors();
    }
    // effect
    // return () => {
    //   cleanup
    // }
  }, [error])

  const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const {name,email,password,password2}=user;

  const onChange=e=>setUser({...user,[e.target.name]:e.target.value});

  const onSubmit=e=>{
    e.preventDefault();
    if(name===''||email===''||password===''){
      setAlert('please enter all fields','danger');
    }else if(password!==password2){
      setAlert('passwords dont match','danger');
    }else{
      register({
        name,
        email,
        password
      })
      //console.log('register submit');
    }
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-prinmary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} required minLength="6"/>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} required minLength="6"/>
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block"/>
      </form>
    </div>
  )
}

export default Register
