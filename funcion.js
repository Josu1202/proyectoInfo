	const buttonPrev = document.getElementById('boton-anterior');
	const buttonSig = document.getElementById('boton-siguiente');
	const rastreo = document.getElementById('rastreo');
	const lista = document.getElementById('lista');
	const capa = document.querySelectorAll('.capa');
	const capalargo = capa[0].offsetWidth;
	buttonPrev.onclick = () => Move(1);
	buttonSig.onclick = () => Move(2);
	function Move(value) {
		const rastreoWidth = rastreo.offsetWidth;
		const listaWidth = lista.offsetWidth;
		rastreo.style.left == "" ? leftPosition = rastreo.style.left = 0 : leftPosition = parseFloat(rastreo.style.left.slice(0, -2)* -1);
		if (leftPosition < (rastreoWidth - listaWidth) && value == 2){
			rastreo.style.left = `${-1 * (leftPosition + capalargo)}px`;

		} else if (leftPosition > 0 && value == 1) {
			rastreo.style.left = `${-1 *(leftPosition - capalargo)}px`;
		}
	}
