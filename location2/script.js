const http = new XMLHttpRequest()
let result = document.querySelector("#result");
let location_area;

let get_location = document.querySelector("#get_location");
get_location.addEventListener("click", () => {
    findMyCoordinates();
});

function findMyCoordinates() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((Position) => {
            let latitude = Position.coords.latitude;
            let longitude = Position.coords.longitude;
            result.innerHTML = "Latitude: " + latitude + "<br>" + "Longitude: " + longitude;
            console.log(result.innerHTML);
            // getWeather(latitude, longitude);
            console.log("working");

            getApi(latitude, longitude);

        }, (error) => {
            alert(error.message);
        })
    }
    else {
        result.innerHTML = "Geolocation is not supported by this browser.";
    }
}

 function getApi(latitude, longitude) {

    // location_api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude + 0.000001}&longitude=${longitude + 0.000002}&localityLanguage=en`

    location_api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`
    
    http.open("GET", location_api);
    http.send();

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            let data = JSON.parse(http.responseText);
            console.log(data);
            console.log(data.city);
            location_area = data.city;
            console.log(data.locality);
            console.log(data.countryName);
            console.log(data.localityInfo)

        }
    }
}