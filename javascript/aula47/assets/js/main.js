function criarHoraDosSegundos(segundos) {
	const data = new Date(segundos * 1000);
	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'GMT'
	});
}

const relogico = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
	timer = setInterval(function() {
		segundos++;
		relogico.innerHTML = criarHoraDosSegundos(segundos);
	}, 1000);
}

iniciar.addEventListener('click', function(event) {
	clearInterval(timer);
	iniciaRelogio();
})

pausar.addEventListener('click', function(event) {
	clearInterval(timer);
})

zerar.addEventListener('click', function(event) {
	clearInterval(timer);
	relogico.innerHTML = '00:00:00'
	segundos = 0;
})
