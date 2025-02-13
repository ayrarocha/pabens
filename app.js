alert('Bem-vindo(a) ao pabens da Camille! XD');
function inicioMensagem() {
    document.querySelector('h1').innerHTML = 'Responda:';
    document.querySelector('p').innerHTML = 'Você daria pabens para Camille?';
}
inicioMensagem();
let simBotao = document.getElementById('sim');
simBotao.addEventListener('mouseover', function () {
    simBotao.style.position = "absolute";
    let margem = 150;
    let larguraMax = window.innerWidth - simBotao.offsetWidth - margem;
    let alturaMax = window.innerHeight - simBotao.offsetHeight - margem;
    let novoLeft = Math.max(margem, Math.random() * larguraMax);
    let novoTop = Math.max(margem, Math.random() * alturaMax);
    simBotao.style.left = `${novoLeft}px`;
    simBotao.style.top = `${novoTop}px`;
});
function escolhaNao() {
    window.location.href = "https://www.youtube.com/watch?si=GxQoAWfnlNlSBpwX&v=MqdlE7BIpnE&feature=youtu.be";
}