$(function () {
    $('.navigation-icon').click(function () {
      $('nav ul').toggleClass('open')
      $('.navigation-icon-wrapper').toggleClass('open')
    })
    $('nav').on('click', '.open li a', function () {
      $('nav ul').removeClass('open')
      $('.navigation-icon-wrapper').removeClass('open')
    })
  })
 
  const mymap = L.map('mapid').setView([59.807412, 15.7243535], 8);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibnlsbGVzb24iLCJhIjoiY2p1bGIwaG1jMGNzYjQ2bXFwOGdzaDk3diJ9.IKh_HPtJsbs8njQpezI1pw'
}).addTo(mymap);

  const marker = L.marker([59.807412, 15.7243535],{title:'Kolarbyn Eco-Lodge'}).addTo(mymap);