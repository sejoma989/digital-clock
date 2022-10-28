const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoDigito(fecha.getHours());
    let min = formatoDigito(fecha.getMinutes());
    let seg = formatoDigito(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',  'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    const mesesAbreviados = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',  'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

    const diasAbreviados = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

    let diaSemana = diasAbreviados[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = mesesAbreviados[fecha.getMonth()];
    let año = fecha.getFullYear();

    let fechaTexto = `${diaSemana}, ${dia} de ${mes} ${año} `
    document.getElementById('fecha').innerHTML = fechaTexto;
    
    document.getElementById('contenedor').classList.toggle('animar')

}

const formatoDigito = ( digito ) => {
    
    if( digito < 10 ){
        digito = '0'+ digito;
    return digito;
    } else {
        return digito;
    }
}

setInterval(mostrarReloj, 1000)