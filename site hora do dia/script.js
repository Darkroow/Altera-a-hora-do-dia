function carry() {
var msg = window.document.getElementById(`msg`) 
var img = window.document.getElementById(`image`)
var bom = window.document.getElementById(`bom`)
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var dia = data.getDay()
var section = document.getElementsByTagName('section')[0]
var diasemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
var nomedodia = diasemana[dia]
var footer = document.getElementsByTagName('footer')[0]

msg.innerHTML = `Agora são <strong>${hora} horas e ${min} minutos</strong> de ${nomedodia}.`

if (hora < 12) {
    //bom dia
    img.src = 'midia/manha.png'
    document.body.style.background = 'rgb(97, 166, 245)'
    section.style.background = '#E8B5EB'
    bom.innerHTML = `BOM DIA!`
    
}else if (hora >= 12 && hora < 18) {
    //b tarde
    img.src = 'midia/tarde.png'
    document.body.style.background = '#FFB85C'
    section.style.background = '#E0C610'
    bom.innerHTML = `BOA TARDE!`
}else {
    //b noite
    img.src = 'midia/noite.png'
    document.body.style.background = 'rgb(0, 10, 70)'
    document.body.style.color = 'white'
    section.style.background = 'rgb(0, 4, 24)'
    footer.style.color = 'white'
    //section.style.color
    bom.innerHTML = `BOA NOITE!`
}

}
//para colocar em tempo real:
// Chamar a função carry quando a página carregar
window.onload = carry;

//intervalo, milissegundos
setInterval(carry, 6000);