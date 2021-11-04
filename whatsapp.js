 function simulateMouseEvents(element, eventName)
{
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element.dispatchEvent(mouseEvent);
}
  

setInterval(function(){
    
    let novaHora = new Date();
    // getHours trará a hora
    // geMinutes trará os minutos
    // getSeconds trará os segundos
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    // Com o textContent, iremos inserir as horas, minutos e segundos
    // no nosso elemento HTML
	console.log(hora, minuto, segundo);
	if(minuto % 10 == 0 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('Te adoro');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 7 && minuto == 40 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('Bom dia');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 7 && minuto == 50 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Equipe Fin"]'), 'mousedown');
		setTimeout(function(){sendMessage('Bom dia');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 7 && minuto == 55 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Rosane"]'), 'mousedown');
		setTimeout(function(){sendMessage('Bom dia.');}, 1500 ); // prints "zero,one,two" after 2 seconds		
	}else if(hora == 8 && minuto == 0 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Bruno Mermer"]'), 'mousedown');
		setTimeout(function(){sendMessage('Bom dia');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 12 && minuto == 0 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Bruno Mermer"]'), 'mousedown');
		setTimeout(function(){sendMessage('Indo almoçar');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 12 && minuto == 2 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Equipe Fin"]'), 'mousedown');
		setTimeout(function(){sendMessage('Indo Almoçar');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 12 && minuto == 22 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('O que ta comendo?');sendMessage('Pode tirar foto?');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 12 && minuto == 15 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Família"]'), 'mousedown');
		setTimeout(function(){sendMessage('Indo almoçar, bom almoço para vcs');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 15 && minuto == 42 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('Boa tarde como passou seu dia?');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 15 && minuto == 50 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('Te adoro');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 17 && minuto == 25 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Bruno Mermer"]'), 'mousedown');
		setTimeout(function(){sendMessage('Tudo certo?');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 16 && minuto == 10 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('O que vc ta comendo?'); sendMessage('Você deve se alimentar');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 17 && minuto == 45 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Bruno Mermer"]'), 'mousedown');
		setTimeout(function(){sendMessage('Até amanhã');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}else if(hora == 18 && minuto == 0 && segundo == 0){
		simulateMouseEvents(document.querySelector('[title="Jurema Ferreira"]'), 'mousedown');
		setTimeout(function(){sendMessage('Como vc ta?');}, 1500 ); // prints "zero,one,two" after 2 seconds
	}
},1000);
  
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