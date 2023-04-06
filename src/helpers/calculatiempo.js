// toma un número, lo convierte a positivo (si tiene un signo negativo) y lo retorna como un número.
const convertirPositivo = function (numero) {
	let elnumero = String(numero).replaceAll("-", "");
	elnumero = Number(elnumero);
	return elnumero;
};

//  toma un número con decimales y retorna su parte entera, redondeando hacia abajo.
const redondear = function (numero) {
	const redondeado = String(numero).split(".")[0];
	return redondeado;
};

// AÑOS
export const calculaAnos = function ( fechaInicio, fechaTermino ) {
	const diferenciaAnios = fechaInicio.getFullYear() - fechaTermino.getFullYear();
	const mesFecha2 = fechaInicio.getMonth();
	const diaFecha2 = fechaInicio.getDate();
	const mesFecha1 = fechaTermino.getMonth();
	const diaFecha1 = fechaTermino.getDate();
	const cumpleanosCumplido =	 mesFecha2 < mesFecha1 || (mesFecha2 === mesFecha1 && diaFecha2 < diaFecha1);
	let anos = cumpleanosCumplido ? diferenciaAnios : diferenciaAnios;
	anos = convertirPositivo(anos);
	if ( String(anos).includes(".") ) {
		anos = redondear(anos);
		return anos;
	}
	return anos;
};
// MESES
export const calculaMeses = function ( fechaInicio, fechaTermino ) {
	const diferenciaMeses = (fechaInicio.getFullYear() - fechaTermino.getFullYear()) * 12 + (fechaInicio.getMonth() - fechaTermino.getMonth());
	const resto = fechaInicio.getDate() < fechaTermino.getDate() ? -1 : 0;
	let meses = diferenciaMeses + resto;
	meses = convertirPositivo(meses);
	if ( String(meses).includes(".") ) {
		meses = redondear(meses);
		return meses;
	}
	return meses;
};
// DIAS
export const calculaDias = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundos = fechaInicio.getTime() - fechaTermino.getTime();
	let dias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
	dias = convertirPositivo(dias);
	if ( String(dias).includes(".") ) {
		dias = redondear(dias);
		return dias;
	}
	return dias;
};
// HORAS
export const calculaHoras = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundos2 = fechaInicio.getTime() - fechaTermino.getTime();
	let horas = Math.floor(diferenciaMilisegundos2 / (1000 * 60 * 60));
	horas = convertirPositivo(horas);
	if ( String(horas).includes(".") ) {
		horas = redondear(horas);
		return horas;
	}
	return horas;
};
// MINUTOS
export const calculaMinutos = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundosDias = fechaInicio.getTime() - fechaTermino.getTime();
	let minutos = Math.floor(diferenciaMilisegundosDias / (1000 * 60));
	minutos = convertirPositivo(minutos);
	if ( String(minutos).includes(".") ) {
		minutos = redondear(minutos);
		return minutos;
	}
	return minutos;
};
// SEGUNDOS
export const calculaSegundos = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundosSegundos = fechaInicio.getTime() - fechaTermino.getTime();
	let segundos = Math.floor(diferenciaMilisegundosSegundos / 1000);
	segundos = convertirPositivo(segundos);
	if ( String(segundos).includes(".") ) {
		segundos = redondear(segundos);
		return segundos;
	}
	return segundos;
};
