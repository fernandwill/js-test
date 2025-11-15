function saveCity(city) {
    sessionStorage.setItem("city", city);
}

function getCity() {
    const storedCity = sessionStorage.getItem("city");
    console.log("Stored city: ", storedCity);
}

function delCity() {
    sessionStorage.removeItem("city");
}

saveCity("tokyo");
getCity();
delCity();