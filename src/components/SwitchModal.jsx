import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { userData, DataUser } from "../pages/Api";
import PostToken from "../pages/Api";

import { ModalSelector } from '../store/ModalSelector'
import { toogleModalAction } from '../store/ModalAction'
import { nameAction } from '../store/ModalAction'
import { lastnameAction } from '../store/ModalAction'

const EditButton = styled.button`
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    margin-top: 20px;
    `

let color = '#657786'
const CardModal = styled.form`
    width: 300px;
    height: 250px;
    background-color: ${color};
    position: absolute;
    transform-origin: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CardLabel = styled.label`
    font-weight: bold;
`

const CardInput = styled.input`
    background-color: white;
    width: 80%;
    margin: 10px;
`

const CardSubmit = styled.button`
    width: 50%;
    margin-top: 20px;
`

export function ButtonModal() {

    const modal = useSelector(ModalSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const onToggle = useCallback((modal) => {
        dispatch(toogleModalAction(modal))
    }, [dispatch])

    const onName = useCallback((modal) => {
        dispatch(nameAction(modal))
    }, [dispatch])

    const onLastname = useCallback((modal) => {
        dispatch(lastnameAction(modal))
    }, [dispatch])

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: modal.name,
            lastName: modal.lastname
        };

        const headers = {
            accept: "application/json",
            Authorization: "Bearer " + modal.Token
        }

        axios.put("http://localhost:3001/api/v1/user/profile", user,
            {
            headers
            })
            .then (async function(response) {  
                const retrievedData = await PostToken(userData.token)
                if(retrievedData) {
                    localStorage.setItem('firstName', modal.name)
                    localStorage.setItem('lastName', modal.lastname)
                    modal.open = false;
                    window.location.reload(false);
                    return navigate(`/user`)
                }
                              
            })
            .catch((err) => console.log(err));
        
     };

    return (
        <div>
            <EditButton onClick={() => onToggle(modal)}>Click me</EditButton>
            <CardModal  onSubmit={handleSubmit} style={{display: (modal.open ? 'flex' : 'none')}}>
                <CardLabel htmlFor="firstName">FirstName</CardLabel>
                <CardInput value={modal.name} id="firstID" onChange={(modal) => onName(modal)}/>
                <CardLabel htmlFor="lastName">LastName</CardLabel>
                <CardInput value={modal.lastname} onChange={(modal) => onLastname(modal)}/>
                <CardSubmit type="submit">Confirmer</CardSubmit>
            </CardModal>
        </div>
    )
}
