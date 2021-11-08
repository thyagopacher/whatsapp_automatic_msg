var contatoAtual = '';
var novaHora = new Date();
const alvo = "Jurema Ferreira";
const mensagensAleatorias = ['Te adoro', 'Sou gamado em vc', 'Me importo muito contigo', 'vc é a melhor do mundo', 'vc é minha deliciosa garota de olhos lindos', 
'Gosto muito de vc', 'Adoro seus olhos', 
'Vc é muito especial', 'Adoro ti abraçar', 'Quero ti', 'Ti Quero', 'só consigo me concentrar nos seus olhos', 'Meu coração é só seu', 'anjinha do pai', 'anjão', 'Sou louco por ti', 'Sou doido por ti',
'vc é um anjo', 'nunca vi alguém tão bela e charmosa como você', 'eu quero lhe dar todo meu amor!', ' vou ter que denunciar você por roubar meu coração', 'Minha delicia !', 'Perco o ar por ti', 'vc é minha estrela da sorte',
'vc é a dona do meu coração', 'vc é meu sonho', 'vc encanta meu coração', 'vc faz meus olhos brilharem', 'Quero morder seu cangote', 'Sou vidrado em vc', 'vc é minha dona', 'dona do meu coração e ar', 'adoro ti apertar muito',
'Eu não sou Casas Bahia, mas prometo dedicação total a você.', 'Se beleza fosse flor, você seria o Jardim Botânico!', 'Não sou carro, mas sou Para ti. ', 
'O calor de seus beijos inunda meu coração.',
'Se toda vez que eu fechasse os olhos, ganhasse um beijo seu, viveria de olhos fechados.', 'Você não é GPS quebrado, mas me deixa sem rumo.', 'O amor não é mais do que a poesia cantada pelo coração.', 
'Tem como não sorrir quando me lembro de você?', 
'Meu coração é totalmente seu e, às vezes, parece pequeno demais para todo amor que sinto por você!',
'Se Deus fizesse um mostruário do catálogo dele, eu não tenho dúvidas de que você estaria na capa.',
'Eu quero derreter na tua boca, não na tua mão.',
'Oi, você engole, chupa ou morde?',
'Vc tem um coração quente',
'Eu quero ser pra vc o que ti faz feliz',
'Eu quero ser o arrepio de um beijo bom',
'Vc veio feito um vendaval em mim',
'Eu sinto falta de vc',
'Eu preciso de vc',
'Você é perfeita!',
'Eu + você + beijos + abraços = Quando?',
'Gata, eu queria ser uma escova progressiva para não sair da sua cabeça e você dizer que mudei sua vida, SUA LINDA!',
'Tentei fazer uma lista sobre as coisas que gosto em você, mas logo percebi que seria impossível. E sabe por quê? É que de você eu gosto mesmo de tudo!',
'Que seu dia seja tão lindo quanto você.',
'Eu gostaria de ser uma gota do seu sangue, porque ia percorrer todo o seu corpo e dormir no seu coração.',
'Quero te dar um abraço com bastante delicadeza, pois rosas são sensíveis.',
'Eu queria ser a água do teu chuveiro para que, de gota em gota, beijasse seu corpo inteiro.',
'Se quiser ser minha estrela, eu prometo que serei seu céu.',
'Estou construindo um barco pirata para navegar pelos seus lábios e adentrar seu coração.',
'amar é deixar fluir o sentimento',
'A mulher dos meus sonhos', 'só me imagino ao seu lado', 'A minha vida é bem mais colorida só por você existir', 'meu doce', 'meu docinho', 'minha fofa', 'minha fofinha'];
var qtdMensagens = mensagensAleatorias.length;

function alteraContato(nome){
	if(nome != contatoAtual){
		simulateMouseEvents(document.querySelector('[title="'+nome+'"]'), 'mousedown');
		return 1;
	}
	return 0;
}

function simulateMouseEvents(element, eventName)
{
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}
 
function sendMessage(msg)
{ 

    messageBox = document.querySelectorAll("[contenteditable='true']")[1]; 
    message = msg; // Replace My Message with your message use   to add spaces to your message
    counter = 1;
  
    for (i = 0; i < counter; i++) {
        event = document.createEvent("UIEvents");
        messageBox.innerHTML = message.replace(/ /gm, ' '); // test it
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);
    }

	document.getElementsByClassName('_4sWnG')[0].click()
}  

function enviaMensagemContato(contato, mensagem){
	let precisaTrocaNome = alteraContato(contato);
	if(precisaTrocaNome == 1){
		setTimeout(function(){sendMessage(mensagem);}, 1500 ); 
	}else{
		sendMessage(mensagem);
	}
	console.log(`Mensagem enviada para: ${contato} - ` + novaHora.toTimeString()); 
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(function(){
    
    novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
	
	if((minuto % 5 == 0) && (segundo == 0)){
		enviaMensagemContato(alvo, mensagensAleatorias[getRandomInt(0, qtdMensagens - 1)]);
	}else if(hora == 7 && minuto == 40 && segundo == 0){
		enviaMensagemContato(alvo, 'Bom dia.Te adoro');
	}else if(hora == 7 && minuto == 30 && segundo == 0){
		enviaMensagemContato("Equipe Fin", 'Bom dia');
	}else if(hora == 8 && minuto == 0 && segundo == 0){
		enviaMensagemContato("Bruno Mermer", 'Bom dia');
	}else if(hora == 12 && minuto == 0 && segundo == 0){
		enviaMensagemContato("Bruno Mermer", 'Indo Almoçar');
	}else if(hora == 12 && minuto == 2 && segundo == 0){
		enviaMensagemContato("Equipe Fin", 'Indo Almoçar');
	}else if(hora == 12 && minuto == 22 && segundo == 0){
		enviaMensagemContato(alvo, 'O que ta comendo?Te adoro');
	}else if(hora == 13 && minuto == 0 && segundo == 0){
		enviaMensagemContato("Bruno Mermer", 'Voltei.');
	}else if(hora == 13 && minuto == 19 && segundo == 0){
		enviaMensagemContato("Rosane", 'Boa tarde.');
	}else if(hora == 15 && minuto == 42 && segundo == 0){
		enviaMensagemContato(alvo, 'Boa tarde como passou seu dia?Te adoro');
	}else if(hora == 17 && minuto == 25 && segundo == 0){
		enviaMensagemContato("Bruno Mermer", 'Tudo certo?');
	}else if(hora == 16 && minuto == 10 && segundo == 0){
		enviaMensagemContato(alvo, 'O que vc ta comendo?Você deve se alimentar. Te adoro');
	}else if(hora == 17 && minuto == 45 && segundo == 0){
		enviaMensagemContato("Bruno Mermer", 'Até mais, fica com Deus !');
	}else if(hora == 18 && minuto == 0 && segundo == 0){
		enviaMensagemContato(alvo, 'Como vc ta? Te adoro');
	}else if(novaHora.getDay() == 5 && hora == 8 && minuto == 22 && segundo == 0){
		enviaMensagemContato(alvo, 'Sextou. Te adoro');
	}		
},1000);
