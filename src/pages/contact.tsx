import * as React from "react";
import Form from '../components/Form';
import styled from 'styled-components'

const StyledForm = styled(Form)`
	width: 40%;
`;

export interface ContactPageProps {}
 
const ContactPage: React.SFC<ContactPageProps> = () => {
  return ( 
    <>
    <div>Kontakt</div>
    <StyledForm/>
    </>
   );
}
export default ContactPage;