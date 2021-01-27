class GalaxyView {

    constructor() {
        this._elementoTitulo = document.getElementById("titulo");
        this._elementoDireito = document.getElementById("direito");
        this._elementoData = document.getElementById("dataP");
        this._elementoExplicacao = document.getElementById("explicacao");
        this._elementoMidia = document.getElementById("media");
        this._elementoImagem = document.getElementById("imagezona");




    }

    botaNaTela(titulo, imagem, direito, data, explicacao, midia) {

        this._elementoTitulo.textContent = titulo;
        this._elementoDireito.textContent = `Copyright: ${direito}`;
        this._elementoData.textContent = `Date: ${data}`;
        this._elementoExplicacao.textContent = `Description: ${explicacao}`;
        this._elementoMidia.textContent = `Media Type: ${midia}`;
        this._elementoImagem.setAttribute("src", `${imagem}`);

    }




}