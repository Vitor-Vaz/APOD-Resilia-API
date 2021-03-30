class GalaxyController {

    pegaUltimoDia(ano, mes) {
        let data = new Date(ano, mes, 0);

        return data.getDate();
    }

    retornaDataAtual(){
    let now = new Date;
    let dia = now.getDate();
    if(dia.toString().length == 1){
        dia = '0'+dia;
    } 


    let mes = now.getMonth();
    mes++;
    
    if(mes.toString().length == 1){
        mes = '0'+mes;
    } 
    let ano = now.getFullYear();
    let dataFinal =  `${ano}-${mes}-${ dia}`;

     return dataFinal;
    }

    buscaGalaxia() {
        let dia = document.getElementById("data").value;
        let model = new GalaxyModel();
        document.getElementById("data").value = dia;

        model.buscaDadosGalaxy(dia, () => {
            GalaxyView.botaNaTela(model._titulo, model._imagem, model._direito, model._data, model._explicacao, model._tipoDeMidia)
        });

        
    }

    proximaGalaxia() {
        let dia = document.getElementById("data").value;

        if(dia == "" || dia == this.retornaDataAtual()){
            
            return;
        }        

        let arrayData = dia.split("-");

        let ultimoDia = this.pegaUltimoDia(arrayData[0], arrayData[1]);

        if(arrayData[1] == 12 && arrayData[2] == 31){
            arrayData[0]++;
            arrayData[1] = '0' + 1;
            arrayData[2] = '0' + 1;
        } else if (arrayData[2] < ultimoDia) {
            arrayData[2]++;
            if (arrayData[2].toString().length == 1) {
                arrayData[2] = '0' + arrayData[2];
            }
        } else if (arrayData[2] == ultimoDia) {
            arrayData[1]++;
            if (arrayData[1].toString().length == 1) {
                arrayData[1] = '0' + arrayData[1];
            }
            arrayData[2] = '0' + 1;
        }

        let novoDia = arrayData.join("-");

        let model = new GalaxyModel();

        document.getElementById("data").value = novoDia;

        model.buscaDadosGalaxy(novoDia, () => {
            GalaxyView.botaNaTela(model._titulo, model._imagem, model._direito, model._data, model._explicacao, model._tipoDeMidia)
        });

       
    }

    galaxiaAnterior() {
        let dia = document.getElementById("data").value;
        if(dia == ""){
            
            dia = this.retornaDataAtual();

        }


        let arrayData = dia.split("-");

        

        if(arrayData[1] == 1 && arrayData[2] == 1){
            arrayData[0]--;
            arrayData[1] = 12;
            arrayData[2] = 31;
        }else if(arrayData[2] > 1){
            arrayData[2]--;
            if (arrayData[2].toString().length == 1) {
                arrayData[2] = '0' + arrayData[2];
            }
        }else if(arrayData[2] == 1){
            arrayData[1]--;
            if (arrayData[1].toString().length == 1) {
                arrayData[1] = '0' + arrayData[1];
            }
            arrayData[2] = this.pegaUltimoDia(arrayData[0], arrayData[1]);
        }


        

        let novoDia = arrayData.join("-");


        let model = new GalaxyModel();

        document.getElementById("data").value = novoDia;

        model.buscaDadosGalaxy(novoDia, () => {
            GalaxyView.botaNaTela(model.titulo, model.imagem, model.direito, model.data, model.explicacao, model.tipoDeMidia)
        });


        
    }
}


let controle = new GalaxyController();


controle.buscaGalaxia();

document.getElementById("data").addEventListener('change', function () {
    controle.buscaGalaxia();

})


document.getElementById("proximo").addEventListener("click", function () {
    controle.proximaGalaxia();
})

document.getElementById("anterior").addEventListener("click", function () {
    controle.galaxiaAnterior();
})