import * as React from "react";
import styled from 'styled-components';
import Title from "../components/Title";
import Header from "../components/Header";
import { IoIosBuild } from "react-icons/io";
import { IoBulbSharp } from "react-icons/io5";
import { RiMedal2Fill } from "react-icons/ri";
import CarouselPage from "../components/CarouselPage";
import { connect } from "react-redux";
import Cookies from "../components/Cookies";


const StyledAbout = styled.div`
	margin: 60px 0 170px;
	display: flex;
	font-size: 18px;
	color: #000;
    font-weight: 200;
	font-family: Roboto;

	h4 {
		margin: 10px 0 20px -2px;
		font-size: 23px;
	}

	p {
		margin: 8px 0 40px;
		line-height: 1.8;
		text-align: left;
	}

	ul {
		list-style: square;
		margin-left: 20px;

		li {
			line-height: 1.8;
			margin-bottom: 20px;
		}

	}

	@media (max-width: 1235px) {
    	flex-direction: column;
  	}
	@media (max-width: 500px) {
    	margin: 60px 0 30px;
  	}
`;

const StyledBox = styled.div`
	flex-basis: 33.3%;
	margin: 0;

	&:nth-of-type(2) {
		margin: 0 80px;

		@media (max-width: 1235px) {
    		margin: 0;
  		}
	}
`;


const StyledRiMedal2Fill = styled(RiMedal2Fill)`
	font-size: 23px;
	transform: translateY(-15%);
	margin-right: 10px;
	
`;
const StyledIoIosBuild = styled(IoIosBuild)`
	font-size: 23px;
	transform: translateY(-15%);
	margin-right: 10px;
`;
const StyledIoBulbSharp = styled(IoBulbSharp)`
	font-size: 23px;
	transform: translateY(-15%);
	margin-right: 10px;
`;

export const mapStateToProps = (state) => {
	const { isEnglish } = state;
	return { isEnglish } 
}



// markup
const IndexPage = ({isEnglish}) => {
  return (
    <>
		<Header/>
        <Title>{isEnglish ? "About Us" : "O nas"}</Title>
    	<StyledAbout>
			<StyledBox>
				<h4><StyledRiMedal2Fill/>{isEnglish ? "Experience" : "Doświadczenie"}:</h4>
				<p>{isEnglish ? "We specialize in creating ready-made unmanned watercraft for bathymetric measurements as well as simple components on request. As most of the components are made in our workshop, we offer a wide field for personalizing parameters." : "Specjalizujemy się w tworzeniu gotowych bezzałogowych jednostek pływających do pomiarów batymetrycznych jak i prostych podzespołów na zamówienie. Ponieważ większość komponentów powstaje w naszym warsztacie, oferujemy szerokie pole do personalizacji parametrów."}</p>
			</StyledBox>
			<StyledBox>
					<h4><StyledIoIosBuild/>{isEnglish ? "Service" : "Serwis"}:</h4>
				<p>{isEnglish ? "We also run a service where we carry out inspections and repairs of manufactured units. More information about completed and ongoing projects in the Projects tab." : "Prowadzimy także serwis, gdzie wykonujemy przeglądy i naprawy wyprodukowanych jednostek. Więcej informacji o zrealizowanych i trwających projektach w zakładce Działalność."}</p>
			</StyledBox>
			<StyledBox>
	<h4><StyledIoBulbSharp/>{isEnglish ? "Technologies" : "Technologie"}:</h4>
				<p>
				<ul>
					<li>{isEnglish ? "Composites - we make molds and ready-made composite elements from epoxy resins by hand lamination and infusion." : "Kompozyty - wykonujemy formy i gotowe elementy kompozytowe z żywic epoksydowych metodą laminowania ręcznego i infuzji."}</li>
					<li>{isEnglish ? "3D printing - from simple prototypes to advanced components made of materials resistant to UV radiation and high temperatures." : "Druk 3D - od prostych prototypów do zaawansowanych podzespołów z materiałów odpornych na promieniowanie UV i wysokie temperatury."}</li>
					<li>{isEnglish ? "CNC machining - precise manufacturing of components on numerically controlled lathes and milling machines." : "Obróbka CNC - precyzyjne wykonywanie podzespołów na tokarkach i frezarkach sterowanych numerycznie."}</li>
				</ul>
					</p>
			</StyledBox>
    	</StyledAbout>
		<CarouselPage/>
		<Cookies/>
    </>
  );
};

export default connect(mapStateToProps)(IndexPage);
