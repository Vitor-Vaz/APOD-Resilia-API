class GalaxyView {

    constructor() {
    }

    
    static botaNaTela(titulo, imagem, direito, data, explicacao, midia) {


        document.getElementById("foto-principal").innerHTML = `<img id="imagezona" class="imagem-principal" src=${imagem}>`;



            
        console.log(imagem);

        document.getElementById("titulo").textContent = titulo;
        document.getElementById("direito").textContent = `Copyright: ${direito}`;
        document.getElementById("dataP").textContent = `Date: ${data}`;
        document.getElementById("explicacao").textContent = `Description: ${explicacao}`;
        document.getElementById("media").textContent = `Media Type: ${midia}`;
        

    }




}