import {useEffect, useState} from "react";

export function Weather() {

    const API_KEY = 'ee823c71cd116a4d0998c11dc5bb806a';
    const [icon, setIcon] = useState({});
    const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";

    useEffect(
        () => {
            new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition((currentPosition) => {
                    resolve(currentPosition.coords);
                });
            }).then((coords) => {
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`)
                .then(response => response.json())
                .then(json => {
                    console.log('json', json);
                    console.log('json.name',json.name);
                    console.log('json.weather[0]',json.weather[0]);
                    console.log('json.weather[0].icon',json.weather[0].icon);
                    setIcon(json.weather[0].icon);
                })
            });
        },
        []
    );
    return iconurl;
};