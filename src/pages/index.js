import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import css from "../styles/Home.module.css";
import { calculaSegundos } from "../helpers/calculatiempo";

const inter = Inter({ subsets: ["latin"] });

const Titulo = function (props) {
	const { nombretiempo, tiempo } = props;
	return (
		<h1>{nombretiempo}: {tiempo}</h1>
	);
};

export default function Home() {
	const [dias, setdias] = useState("");
	const [meses, setmeses] = useState();
	const [anos, setanos] = useState();

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
		console.debug( `Algo ${dias}/${meses}/${anos}` );
	};

	const inicio = new Date("1989-03-01 22:00:00");
	const termino = new Date("2023-04-06 00:27:23");

	return (
		<>
			<Head>
				<title>Age Calculator APP</title>
				<meta name="description" content="Working with dates in JavaScript" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main id={css.main}>
				<Titulo nombretiempo="segundos" tiempo={calculaSegundos(inicio, termino)} />
				<br />
				<br />
				<br />
				<br />
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
						<span>--</span>
						<p>years</p>
					</div>
					<div className="month">
						<span>--</span>
						<p>months</p>
					</div>
					<div className="day">
						<span>--</span>
						<p>days</p>
					</div>
				</section>
			</main>
		</>
	);
}
