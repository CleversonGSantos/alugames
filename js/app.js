function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Alterna a classe da imagem
    imagem.classList.toggle('dashboard__item__img--rented');

    // Alterna a classe e o texto do botão
    const isReturning = botao.classList.toggle('dashboard__item__button--return');
    botao.textContent = isReturning ? 'Devolver' : 'Alugar';
}
