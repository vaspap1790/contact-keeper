import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
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
        contacts: [
            {
                id: 1,
                name: 'name1',
                email: 'mail1@gmail.com',
                phone: 'phone1',
                type: 'personal'
            },
            {
                id: 2,
                name: 'name2',
                email: 'mail2@gmail.com',
                phone: 'phone2',
                type: 'personal'
            },
            {
                id: 3,
                name: 'name3',
                email: 'mail3@gmail.com',
                phone: 'phone3',
                type: 'professional'
            }
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value = {{
                contacts: state.contacts
            }}
        >
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;