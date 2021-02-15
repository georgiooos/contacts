import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR
} from '../types';

const AuthState = props => {
    const initialState = {
      toke: localStorage.getItem('token'),
      isAthenticated:null,
      loading:true,
      user:null,
      error:null
    };

    const [state, dispatch]=useReducer(authReducer,initialState);

    //load user

    //register user

    //login user

    //logout

    //clear errors

    return (
        <AuthContext.Provider
            value={{
              token:state.token,
              isAuhtenticated:state.isAthenticated,
              loading:state.loading,
              user:state.user,
              error:state.error
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthState;
