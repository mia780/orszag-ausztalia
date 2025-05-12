function idojaras(y) {
    let holnap = y.daily.time[1]
    let homerseklet=y.daily.temperature_2m_max[1]
    let minho=y.daily.temperature_2m_min[1]
    let szel=y.daily.wind_speed_10m_max[1]
    let esok=y.daily.rain_sum[1]
    document.getElementById("holnap").innerHTML = holnap
    document.getElementById("homerseklet").innerHTML=`${minho}-${homerseklet} °C`
    document.getElementById("szel").innerHTML=`${szel} km/h`
    document.getElementById("eso").innerHTML=`${esok} mm`
}

fetch("https://api.open-meteo.com/v1/forecast?latitude=-25&longitude=135&daily=temperature_2m_max,temperature_2m_min,uv_index_max,rain_sum,wind_speed_10m_max&models=bom_access_global")
.then(x => x.json())
.then(y => idojaras(y));
