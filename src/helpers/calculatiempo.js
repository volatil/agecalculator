// AÑOS
export const calculaAnos = function ( fechaInicio, fechaTermino ) {
	const diferenciaAnios = fechaInicio.getFullYear() - fechaTermino.getFullYear();
	const mesFecha2 = fechaInicio.getMonth();
	const diaFecha2 = fechaInicio.getDate();
	const mesFecha1 = fechaTermino.getMonth();
	const diaFecha1 = fechaTermino.getDate();
	const cumpleanosCumplido =	 mesFecha2 < mesFecha1 || (mesFecha2 === mesFecha1 && diaFecha2 < diaFecha1);
	const anos = cumpleanosCumplido ? diferenciaAnios : diferenciaAnios;
	return anos;
};
// MESES
export const calculaMeses = function ( fechaInicio, fechaTermino ) {
	const diferenciaMeses = (fechaInicio.getFullYear() - fechaTermino.getFullYear()) * 12 + (fechaInicio.getMonth() - fechaTermino.getMonth());
	const resto = fechaInicio.getDate() < fechaTermino.getDate() ? -1 : 0;
	const meses = diferenciaMeses + resto;
	return meses;
};
// DIAS
export const calculaDias = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundos = fechaInicio.getTime() - fechaTermino.getTime();
	const dias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
	return dias;
};
// HORAS
export const calculaHoras = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundos2 = fechaInicio.getTime() - fechaTermino.getTime();
	const horas = Math.floor(diferenciaMilisegundos2 / (1000 * 60 * 60));
	return horas;
};
// MINUTOS
export const calculaMinutos = function ( fechaInicio, fechaTermino ) {
	const diferenciaMilisegundosDias = fechaInicio.getTime() - fechaTermino.getTime();
	const minutos = Math.floor(diferenciaMilisegundosDias / (1000 * 60));
	return minutos;
};
// SEGUNDOS
export const calculaSegundos = function ( fechaInicio, fechaTermino ) {
	console.debug( fechaInicio );
	console.debug( fechaTermino );
	const diferenciaMilisegundosSegundos = fechaInicio.getTime() - fechaTermino.getTime();
	const segundos = Math.floor(diferenciaMilisegundosSegundos / 1000);
	return segundos;
};
