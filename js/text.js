var tabuleiro = document.getElementById('tabuleiro');
var letras = ['A','B','C','D','E','F','G','H'];

var pecasPretas = ['♜','♞','♝','♛','♚','♝','♞','♜'];
var pecasBrancas = ['♖','♘','♗','♕','♔','♗','♘','♖'];

var casaSelecionada = null;

for (var linha = 0; linha < 9; linha++) {
  for (var coluna = 0; coluna < 9; coluna++) {
    var item;

    if (linha == 8 && coluna == 0) {
      item = document.createElement('div');
      item.className = 'label fundo-label';
    } else if (linha == 8 && coluna > 0) {
      item = document.createElement('div');
      item.className = 'label fundo-label';
      item.innerHTML = letras[coluna - 1];
    } else if (coluna == 0 && linha < 8) {
      item = document.createElement('div');
      item.className = 'label fundo-label';
      item.innerHTML = 8 - linha;
    } else {
      item = document.createElement('div');
      var cor = (linha + coluna) % 2 == 0 ? 'clara' : 'escura';
      item.className = 'casa ' + cor;

      var posicao = letras[coluna - 1] + (8 - linha);
      item.setAttribute('data-posicao', posicao);

      if (linha == 0) {
        item.innerHTML = pecasPretas[coluna - 1];
      } else if (linha == 1) {
        item.innerHTML = '♟';
      } else if (linha == 6) {
        item.innerHTML = '♙';
      } else if (linha == 7) {
        item.innerHTML = pecasBrancas[coluna - 1];
      }

      item.addEventListener('click', function () {
        if (casaSelecionada) {
          casaSelecionada.classList.remove('selecionada');
        }

        this.classList.add('selecionada');
        casaSelecionada = this;
      });
    }

    tabuleiro.appendChild(item);
  }
}
