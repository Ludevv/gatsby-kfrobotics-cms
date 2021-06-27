import * as React from "react";
import styled from 'styled-components';
import Title from "../components/Title";
import Header from "../components/Header";
import { IoIosBuild } from "@react-icons/all-files/io/IoIosBuild";
import { IoBulbSharp } from "@react-icons/all-files/io5/IoBulbSharp";
import { RiMedal2Fill } from "@react-icons/all-files/ri/RiMedal2Fill";
import CarouselPage from "../components/CarouselPage";



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


// markup
const IndexPage = () => {
  return (
    <>
		<Header/>

        <Title>O nas</Title>
    	<StyledAbout>
			<StyledBox>
				<h4><StyledRiMedal2Fill/>Doświadczenie:</h4>
				<p>Specjalizujemy się w tworzeniu gotowych bezzałogowych jednostek pływających do pomiarów batymetrycznych jak i prostych podzespołów na zamówienie. Ponieważ większość komponentów powstaje w naszym warsztacie, oferujemy szerokie pole do personalizacji parametrów.</p>
			</StyledBox>
			<StyledBox>
					<h4><StyledIoIosBuild/>Serwis:</h4>
				<p>Prowadzimy także serwis, gdzie wykonujemy przeglądy i naprawy wyprodukowanych jednostek. Więcej informacji o zrealizowanych i trwających projektach w zakładce <b>Działalność</b>.</p>
			</StyledBox>
			<StyledBox>
	<h4><StyledIoBulbSharp/>Technologie:</h4>
				<p>
				<ul>
					<li>Kompozyty - wykonujemy formy i gotowe elementy kompozytowe z żywic epoksydowych metodą laminowania ręcznego i infuzji.</li>
					<li>Druk 3D - od prostych prototypów do zaawansowanych podzespołów z materiałów odpornych na promieniowanie UV i wysokie temperatury.</li>
					<li>Obróbka CNC - precyzyjne wykonywanie podzespołów na tokarkach i frezarkach sterowanych numerycznie.</li>
				</ul>
					</p>
			</StyledBox>
    	</StyledAbout>
		<CarouselPage/>
    </>
  );
};

export default IndexPage;
