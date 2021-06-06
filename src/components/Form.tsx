import * as React from 'react';
import "./Form.css";


export interface FormProps {}


 
const Form: React.SFC<FormProps> = () => {
    return ( 
            <form className="form__form">
      <div className="form__item">
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" "
        />
        <label htmlFor="name">Imię i nazwisko</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <input type="text" name="phone" id="phone" placeholder=" " />
        <label htmlFor="phone">Numer telefonu</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <input type="text" name="email" id="email" placeholder=" " />
        <label htmlFor="email">Adres e-mail</label>
        <div className="forms__item__bar" />
      </div>
      <div className="form__item">
        <textarea name="description" id="description" placeholder=" " />
        <label htmlFor="description">Wiadomość</label>
        <div className="forms__item__bar" />
      </div>
      <button className="form__button" type="submit">
        Wyślij
      </button>
    </form>
     );
}
 
export default Form;