function clickHandler(event) {
    const id = event.currentTarget.getAttribute('href').substring(1);
    //const elemento = event.currentTarget;
    //const href = elemento.getAttribute('href);
    //const id = href.substring(1);
    console.log(id);

    for(let i = 0; i < contentido.length; i++){
        contentido[i].style.display = 'none';
        if (contentido[i].getAttribute('id') == id){
            contentido[i].style.display = 'block';
        }
    }
}

const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].style.display = 'none';
}

contentido[0].style.display = 'block';

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , clickHandler);
}