/*function clickHandler(event) {
    const id = event.currentTarget.getAttribute('href').substring(1);
    //const elemento = event.currentTarget;
    //const href = elemento.getAttribute('href);
    //const id = href.substring(1);
    console.log(id);

    for(let i = 0; i < contentido.length; i++){
        contentido[i].classList.add('js-content-hidden');
        if (contentido[i].getAttribute('id') == id){
            contentido[i].classList.remove('js-content-hidden');
        }
    }
    for(let i = 0; i < enlaces.length; i++){
        enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active')
}

const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].classList.add('js-content-hidden');
}

contentido[0].classList.remove('js-content-hidden');

enlaces[0].classList.remove('js-active');

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , clickHandler);
}*/


/*const evento = (event) =>{
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);

    for(let i = 0; i < contentido.length; i++){
        contentido[i].classList.add('js-content-hidden');
        if (contentido[i].getAttribute('id') == id){
            contentido[i].classList.remove('js-content-hidden');
        }
    }
    for(let i = 0; i < enlaces.length; i++){
        enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active')
}

const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].classList.add('js-content-hidden');
}

contentido[0].classList.remove('js-content-hidden');

enlaces[0].classList.remove('js-active');

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , evento);
}*/


const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].classList.add('js-content-hidden');
}

contentido[0].classList.remove('js-content-hidden');

enlaces[0].classList.remove('js-active');

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , (event) => {
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);

    for(let i = 0; i < contentido.length; i++){
        contentido[i].classList.add('js-content-hidden');
        if (contentido[i].getAttribute('id') == id){
            contentido[i].classList.remove('js-content-hidden');
        }
    }
    for(let i = 0; i < enlaces.length; i++){
        enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active')
    });
}