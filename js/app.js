function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Verifica se o item está sendo devolvido
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Exibe a tela de confirmação
        if (!confirm('Você tem certeza que deseja devolver este jogo?')) {
            return; // Se o usuário cancelar, não faz nada
        }
    }

    // Alterna a classe da imagem
    imagem.classList.toggle('dashboard__item__img--rented');

    // Alterna a classe e o texto do botão
    const isReturning = botao.classList.toggle('dashboard__item__button--return');
    botao.textContent = isReturning ? 'Devolver' : 'Alugar';

    console.log(`Quantidade de jogos alugados: ${quantidadeAluguel()}`);
}

function quantidadeAluguel() {
    let games = document.querySelectorAll('.dashboard__item__img');
    let quantidade = 0;

    games.forEach((game) => {
        if (game.classList.contains('dashboard__item__img--rented')) {
            quantidade++;
        }
    });

    return quantidade;
}