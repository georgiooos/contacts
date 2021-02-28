import React,{useState,useContext,useEffect} from 'react'
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) => {
  const alertContext=useContext(AlertContext);
  const authContext=useContext(AuthContext);

  const {setAlert}=alertContext;

  const {login,error,clearErrors,isAuthenticated}=authContext;

  useEffect(() => {
    if(isAuthenticated){
      props.history.push('/');
    }

    if(error==='invalid credentials'){
      setAlert(error,'danger');
      clearErrors();
    }
    // effect
    // return () => {
    //   cleanup
    // }

    // eslint-disable-next-line
  }, [error,isAuthenticated,props.histotry])

  const [user,setUser]=useState({
    email:'',
    password:''
  })

  const {email,password}=user;

  const onChange=e=>setUser({...user,[e.target.name]:e.target.value});

  const onSubmit=e=>{
    e.preventDefault();
    //console.log('login submit');
    if(email===''||password===''){
      setAlert('please fill in all fields','danger')
    }else{
      login({email,password})
    }
  }

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-prinmary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>

        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" name="email" value={email} onChange={onChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </form>
    </div>
  )
}

export default Login
