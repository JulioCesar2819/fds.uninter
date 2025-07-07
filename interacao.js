const botao = document.getElementById('BotaoExibir');

const Mensagem = document.getElementById('MensagemMotivacao');

if (botao && Mensagem) {

  botao.addEventListener('click', function() {

    Mensagem.textContent = 'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.';
  });
} else {
  console.error("Alguma coisa deu errado! Por favor averiguar!");
}