import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import {  useStateValue } from '../hooks/useStateValue'
import { addSmurf, updateSmurf } from '../actions/actions'
import { SmurfButton } from './Smurf'

const AddSmurfForm = () => {
    const [input, setInput] = useState({name: '', height: '', age: ''});
    const [{activeSmurf}, dispatch] = useStateValue()
    
    useEffect(() => {
        if(activeSmurf.name)
            setInput(activeSmurf)
        else
            setInput({name: '', height: '', age: ''})
    }, [activeSmurf]);

    const handleChanges = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const addOrEdit = (e) => {
        e.preventDefault()
        if(activeSmurf.name)
            updateSmurf(input, activeSmurf.id, dispatch)
        else
            addSmurf(input, dispatch)
        setInput({name: '', height: '', age: ''})
    }
    return (
        <Form onSubmit={(e) => addOrEdit(e)}>
            <Input 
                type="text"
                name="name"
                placeholder="Name..."
                value={input.name}
                onChange={handleChanges}
                required
            />
            <Input 
                type="text"
                name="age"
                placeholder="Age..."
                value={input.age}
                onChange={handleChanges}
                required
            />
            <Input 
                type="text"
                name="height"
                placeholder="Height..."
                value={input.height}
                onChange={handleChanges}
                required
            />
            <ButtonDiv>
                <Button
                    as="input"
                    type="submit"
                    onSubmit={(e) => addOrEdit(e)}
                />
                <Button onClick ={() => setInput({name: '', height: '', age: ''})}>Clear</Button>
            </ButtonDiv>
        </Form>
    )
}

export default AddSmurfForm

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin: 20px auto;
`

const Input = styled.input`
    width: 300px;
    margin: 10px auto;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.darkBlue};
    outline: none;
    background: ${({theme}) => theme.lightRed};
    text-align: center;
    
    font-size: ${({theme}) => theme.mediumFont};
    font-family: ${({theme}) => theme.standardFont};
    
    ::placeholder{
        color: ${({theme}) => theme.darkBlue};
    }
    
    &:focus{
        background: white;
        color: ${({theme}) => theme.darkBlue};

        ::placeholder{
            opacity: 0;
        }
    }

    &:valid{
        color: white;
        background: ${({theme}) => theme.smurfBlue};
        border: 1px solid black;
        text-transform: uppercase;
    }
    

`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Button = styled(SmurfButton)`
    width: 200px;
    cursor: pointer;
    background: white;
    border-color: ${({theme}) => theme.darkBlue};
    color: ${({theme}) => theme.darkBlue};

    &:hover{
        background: ${({theme}) => theme.darkBlue};
        color: white;
    }
`