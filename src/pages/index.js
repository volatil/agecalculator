import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import css from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Age Calculator APP</title>
				<meta name="description" content="Working with dates in JavaScript" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main id={css.main}>
				<section id="ingresadatos" className={css.ingresadatos}>
					<form>
						<label htmlFor="day">
							<p>DAY</p>
							<input type="number" id="day" placeholder="DD" />
						</label>
						<label htmlFor="month">
							<p>MONTH</p>
							<input type="number" id="month" placeholder="MM" />
						</label>
						<label className={css.year} htmlFor="year">
							<p>YEAR</p>
							<input type="number" id="year" placeholder="YYYY" />
						</label>
					</form>
				</section>
				<section id="accion" className={css.accion}>
					<span className="separador" />
					<button type="button">
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
