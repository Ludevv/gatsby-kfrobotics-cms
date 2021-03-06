import * as React from 'react';
import "./Form.css";
import { useForm, ValidationError } from '@formspree/react';
import styled from 'styled-components';
import { BiCheckDouble } from "react-icons/bi";
import { useState } from 'react';
import { mapStateToProps } from '../pages';
import { connect } from 'react-redux';

const StyledButtonBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const StyledBiCheckDouble = styled(BiCheckDouble)`
    font-size: 26px;
    margin-right: 5px;
    color: #00d659;
`;

const StyledMessage = styled.p`
    font-weight: 200;
    font-size: 20px;
    color: #00d659;
`;

const StyledValidationError = styled(ValidationError)`
    font-size: 13px;
    color: #ff4848;
    width: 100%;
    font-style: italic;
`;

const Email = ({isEnglish}) => {
    const [state, handleSubmit] = useForm("mayabqql");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    return(
        <form onSubmit={handleSubmit} className="form__form">
            <div className="form__item">
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=" "
                    onChange={(e)=> setName(e.target.value)}
                    value={state.succeeded ? "" : name}
                />
                <label htmlFor="name">{isEnglish ? "Name" : "Imię i nazwisko"}</label>
                <div className="forms__item__bar" />
            </div>
            <div className="form__item">
                <input 
                    id="phone"
                    type="number"
                    name="phone"  
                    placeholder=" "
                    onChange={(e)=> setPhone(e.target.value)}
                    value={state.succeeded ? "" : phone}
                />
                <label htmlFor="phone">{isEnglish ? "Phone Number" : "Numer telefonu"}</label>
                <div className="forms__item__bar" />
            </div>
            <StyledValidationError 
            prefix="E-mail" 
            field="email"
            errors={state.errors}/>
            <div className="form__item">
                <input 
                    id="email"
                    type="email" 
                    name="email"  
                    placeholder=" "
                    onChange={(e)=> setEmail(e.target.value)}
                    value={state.succeeded ? "" : email}
                />
        
                <label htmlFor="email">{isEnglish ? "Adress e-mail" : "Adres e-mail"}</label>
                <div className="forms__item__bar" />
            </div>
            <div className="form__item">
                <textarea
                    id="description"
                    name="description"  
                    placeholder=" " 
                    onChange={(e) => setText(e.target.value)}
                    value={state.succeeded ? "" : text}
                    />
                <label htmlFor="description">{isEnglish ? "Message" : "Wiadomość"}</label>
                <div className="forms__item__bar" />
            </div>
            <StyledButtonBox>
                <button className="form__button" type="submit" disabled={state.submitting}>{isEnglish ? "Send" : "Wyślij"}</button>
                {state.succeeded && <StyledMessage><StyledBiCheckDouble/>{isEnglish ? "sent" : "wysłano"}</StyledMessage>}
            </StyledButtonBox>
        </form>
    )}

export default connect(mapStateToProps)(Email)


