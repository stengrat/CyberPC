var mapa;

function initMap() {

  var configuracoes = {
    center: {lat: -25.433064, lng: -49.276613},
    zoom: 15
  }
      
  mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: -25.433064, lng: -49.276613},
    title: "CyberPC",
    map: mapa
  });

}



