 const miDiv = document.getElementById("card_mantenimiento");

    miDiv.addEventListener("click", function() {
      // Redirige a un ID del mismo HTML
      window.location.href = "#inicio";
    });

     let player;

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'Fte5XRZjU9c', 
          
          events: {
            'onReady': onPlayerReady
          }
        });
      }

      function onPlayerReady(event) {
        console.log("Video listo para interactuar");
      }

      function playVideo() {
        player.playVideo();
      }

      function pauseVideo() {
        player.pauseVideo();
      }

      function muteVideo() {
        player.mute();
      }