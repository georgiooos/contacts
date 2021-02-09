import React, {useReducer} from 'react';
import {v4 as uuid} from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                id:1,
                name:'jj lala',
                email:'dfds@fdsdf.fe',
                phone:'4432-34232-4242',
                type:'personal'
            },
            {
                id:2,
                name:'ttt ttt',
                email:'rrrr@fdsdf.fe',
                phone:'4432-34232-4242',
                type:'professional'
            }            
        ]
    };
    const [state, dispatch]=useReducer(contactReducer,initialState); 

    //add contact

    const addContact = contact =>{
        contact.id=uuid();
        //contact.id=1;        
        dispatch({type: ADD_CONTACT, payload:contact});
    }

    //delete contact

    //set current contact

    //clear current contact

    //update contact

    //filter contacts

    //clear filter 

    return (
        <ContactContext.Provider
            value={{
                contacts:state.contacts,
                addContact

            }}
        >
            {props.children}
        </ContactContext.Provider>        
    )
};

export default ContactState;