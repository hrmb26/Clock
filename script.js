function añadirCero(i) {
    if (i<10) {
        i = "0" + i;
    }
    return i;
}

function Clock(){
    let tiempo = new Date()
    let horas = añadirCero(tiempo.getHours()) // gets hours
    let minutos = añadirCero(tiempo.getMinutes()) // gets minutes
    let segundos = añadirCero(tiempo.getSeconds()) // gets seconds
    document.getElementById("horasHTML").innerHTML = horas
    document.getElementById("minutosHTML").innerHTML = minutos
    document.getElementById("segundosHTML").innerHTML = segundos
    setInterval(Clock, 1000)
}

Clock()