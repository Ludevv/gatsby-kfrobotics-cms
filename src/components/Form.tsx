import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../pages';
import "./Form.css";


export interface FormProps {
  isEnglish: boolean;
}


 
const Form: React.SFC<FormProps> = ({isEnglish}) => {
    return ( 
            <form className="form__form">
      <div className="form__item">
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">{isEnglish ? "Name" : "Imię i nazwisko"}</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <input type="text" name="phone" id="phone" placeholder=" " />
        <label htmlFor="phone">{isEnglish ? "Phone Number" : "Numer telefonu"}</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <input type="text" name="email" id="email" placeholder=" " />
        <label htmlFor="email">{isEnglish ? "Adress e-mail" : "Adres e-mail"}</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <textarea name="description" id="description" placeholder=" " />
        <label htmlFor="description">{isEnglish ? "Message" : "Wiadomość"}</label>
        <div className="forms__item__bar" />
      </div>
      <button className="form__button" type="submit">
        {isEnglish ? "Send" : "Wyślij"}
      </button>
    </form>
     );
}
 
export default connect(mapStateToProps)(Form);