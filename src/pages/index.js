import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Error from "../components/Error";

import css from "../styles/Home.module.css";
import {
	calculaAnos,
	calculaMeses,
	calculaDias,
	calculaHoras,
	calculaMinutos,
	calculaSegundos,
} from "../helpers/calculatiempo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [dias, setdias] = useState();
	const [meses, setmeses] = useState();
	const [anos, setanos] = useState();
	const [isError, setisError] = useState(false);

	// const [horasListos, sethorasListos] = useState("--");
	const [diasListos, setdiasListos] = useState("--");
	const [mesesListos, setmesesListos] = useState("--");
	const [anosListos, setanosListos] = useState("--");

	const getDias = function (param) {
		const elparam = param.target.value;
		setdias(elparam);
	};

	const getMes = function (param) {
		const elparam = param.target.value;
		setmeses(elparam);
	};

	const getAno = function (param) {
		const elparam = param.target.value;
		setanos(elparam);
	};

	const calcular = function () {
		const isUndefined = String(dias) + String(meses) + String(anos);
		if ( isUndefined.includes("undefined") ) {
			setisError(true);
			setTimeout(() => {
				setisError(false);
			}, 3000);
		} else if ( (meses <= 12) && ( dias <= 31 ) ) {
			const fecha = new Date();
			const fechatermino = {
				dia: fecha.getDate(),
				mes: fecha.getMonth(),
				ano: fecha.getFullYear(),
				horas: fecha.getHours(),
				minutos: fecha.getMinutes(),
				segundos: fecha.getSeconds(),
			};
			let fechaterminocompleta = `${fechatermino.ano}-${fechatermino.mes + 1}-${fechatermino.dia} ${fechatermino.horas}:${fechatermino.minutos}:${fechatermino.segundos}`;
			fechaterminocompleta = new Date(fechaterminocompleta);

			let fechainiciocompleta = `${Number(anos)}-${Number(meses)}-${Number(dias)} ${Number(23)}:${Number(12)}:${Number(23)}`;
			fechainiciocompleta = new Date(fechainiciocompleta);
			setanosListos( calculaAnos( fechainiciocompleta, fechaterminocompleta) );
			setmesesListos( calculaMeses( fechainiciocompleta, fechaterminocompleta) );
			setdiasListos( calculaDias( fechainiciocompleta, fechaterminocompleta) );
			// sethorasListos( calculaHoras( fechainiciocompleta, fechaterminocompleta) );
		}
	};

	return (
		<>
			<Head>
				<title>Age Calculator APP</title>
				<meta name="description" content="Working with dates in JavaScript" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isError && <Error /> }
			<main id={css.main}>
				<section id="ingresadatos" className={css.ingresadatos}>
					<form>
						<label htmlFor="day">
							<p>DAY</p>
							<input type="number" id="day" placeholder="DD" onChange={getDias} />
						</label>
						<label htmlFor="month">
							<p>MONTH</p>
							<input type="number" id="month" placeholder="MM" onChange={getMes} />
						</label>
						<label className={css.year} htmlFor="year">
							<p>YEAR</p>
							<input type="number" id="year" placeholder="YYYY" onChange={getAno} />
						</label>
					</form>
				</section>
				<section id="accion" className={css.accion}>
					<span className="separador" />
					<button type="button" onClick={calcular}>
						<img src="/assets/svg/arrow.svg" alt="Calculate" />
					</button>
				</section>
				<section id="resultados" className={css.resultados}>
					<div className="year">
						<span>{anosListos}</span>
						<p>years</p>
					</div>
					<span>or</span>
					<div className="month">
						<span>{mesesListos}</span>
						<p>months</p>
					</div>
					<span>or</span>
					<div className="day">
						<span>{diasListos}</span>
						<p>days</p>
					</div>
					{/* <span>or</span>
					<div className="hour">
						<span>{horasListos}</span>
						<p>hours</p>
					</div> */}
				</section>
			</main>
		</>
	);
}
