location_button = document.querySelector('#location_button');

location_button.addEventListener('click',async function(){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
    }, function(error){
        console.log(error);
    });
});