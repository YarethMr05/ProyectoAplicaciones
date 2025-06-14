const enlaces = [
      { trigger: 'card_mantenimiento', destino: 'section_mantenimiento' },
      { trigger: 'card_compra', destino: 'section_compra' },
      { trigger: 'card_venta', destino: 'section_venta' },
      { trigger: 'card_asesoria', destino: '' }
    ];
 enlaces.forEach(({ trigger, destino }) => {
      const div = document.getElementById(trigger);
      const seccion = document.getElementById(destino);

      div.addEventListener('click', () => {
        /* Desplaza suavemente hasta la sección */
        seccion.scrollIntoView({ behavior: 'smooth' });
      });
    });
//esto es para poder tener un video de youtube en la pagina
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '460',
        width: '940',
        videoId: 'Fte5XRZjU9c',

        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("Video listo para interactuar");
}


