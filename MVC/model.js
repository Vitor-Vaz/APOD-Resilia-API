class GalaxyModel {

    constructor() {
        this._titulo = "";
        this._imagem = "";
        this._direito = "";
        this._data = "";
        this._explicacao = "";
        this._tipoDeMidia = "";
    }

    get titulo() {
        return this._titulo;
    }

    get imagem() {
        return this._imagem;
    }

    get direito() {
        return this._direito;
    }

    get data() {
        return this._data;
    }

    get explicacao() {
        return this._explicacao;
    }

    get tipoDeMidia() {
        return this._tipoDeMidia;
    }








    buscaDadosGalaxy(data, callback) {


       

        fetch(`https://api.nasa.gov/planetary/apod?api_key=dxn9Ln0dZqaCkKHg42b3eJp0gWqbe8YvVPLL2F7t&date=${data}`)
        .then((response) => {
            if (response.ok) {
                return  response.json();
            }else{
                reject(new Error("Algo de errado não está certo!!"));
            }    
        }).then((galaxy) => {
            this._titulo = galaxy.title;
            this._imagem = galaxy.hdurl;
            if (galaxy.copyright == undefined) {
                this._direito = `Not found`;
            } else {
                this._direito = galaxy.copyright;
            }

            this._data = galaxy.date;
            this._explicacao = galaxy.explanation;
            this._tipoDeMidia = galaxy.media_type;
            callback();
        })

    }
}

