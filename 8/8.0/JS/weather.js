function onGeoOk(position) { //현재 위치 값 출력
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude; 
    console.log("You live in", lat, lng);
}
function onGeoError() { //에러처리
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);