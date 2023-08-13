function atualizarRelogio() {
    var data = new Date();
    var ano = data.getFullYear()
    var m = data.getMonth()
    var diames = data.getDate()
    var diasem = data.getDay()
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    ano = ano < 10 ? "0" + ano : ano;
    m = m < 10 ? "0" + m : m;
    diames = diames < 10 ? "0" + diames : diames;
    diasem = diasem < 10 ? "0" + diasem : diasem; 
    
    if (diasem == 0){
        var semana = "Domingo"
    } else if (diasem == 1){
        var semana = "Segunda-Feira"
    } else if (diasem == 2){
        var semana = "Terça-Feira"
    } else if (diasem == 3){
        var semana = "Quarta-Feira"
    } else if (diasem == 4){
        var semana = "Quinta-Feira"
    } else if (diasem == 5){
        var semana = "Sexta-Feira"
    } else if (diasem == 6){
        var semana = "Sábado"
    }

    if (m == 0){
        var mes = "Janeiro"
    } else if (m == 1){
        var mes = "Fevereiro"
    } else if (m == 2){
        var mes = "Março"
    } else if (m == 3){
        var mes = "Abril"
    } else if (m == 4){
        var mes = "Maio"
    } else if (m == 5){
        var mes = "Junho"
    } else if (m == 6){
        var mes = "Julho"
    } else if (m == 7){
        var mes = "Agosto"
    } else if (m == 8){
        var mes = "Setembro"
    } else if (m == 9){
        var mes = "Outubro"
    } else if (m == 10){
        var mes = "Novembro"
    } else if (m == 11){
        var mes = "Dezembro"
    }

    
    var horario = `${hora}:${minutos}:${segundos}`
    var dat = `<br>${semana} - ${diames} de ${mes} de ${ano}`
    
    document.getElementById("relogio").innerHTML = horario; 
    document.getElementById("data2").innerHTML = dat;

  }
  
  atualizarRelogio();
  
  setInterval(atualizarRelogio, 1000);
    
 
  
  
