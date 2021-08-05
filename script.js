const anos = document.getElementById("tempoAno");
const rendePorMes = document.getElementById("rendeMes");
const aporteCotasPorMes = document.getElementById("aporte");
const valorDaCota = document.getElementById("valorCota");
const body = document.getElementById('result');

const mesSigla = ['Jan', 'Feb', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'];


function calcularRendimento(event) {
    event.preventDefault();
    let patrimonioEmCotas = Number(document.getElementById("cotasAtual").value);
    let dividendoTotal = 0;

    for (let i = 1; i <= anos.value; i++) {
        let divAno = 0;

        var ano = document.createElement('div');
        ano.classList.add('ano');

        var anoTitle = document.createElement('div');
        anoTitle.classList.add('ano_title');
        anoTitle.textContent = new Date().getFullYear() + i;

        ano.appendChild(anoTitle);
        // body.appendChild(ano);

        for (let j = 0; j < 12; j++) {
            patrimonioEmCotas += Number(aporteCotasPorMes.value);

            const rende = patrimonioEmCotas * Number(rendePorMes.value);
            dividendoTotal += rende;
            divAno += rende;
            patrimonioEmCotas += Math.floor(rende / Number(valorDaCota.value));

            var mes = document.createElement('div');
            mes.classList.add('mes');

            var mesTitle = document.createElement('div');
            mesTitle.classList.add('mes_title');
            mesTitle.textContent = mesSigla[j];
            mes.appendChild(mesTitle);

            var mesData = document.createElement('div');
            mesData.classList.add('mes_data');
            mes.appendChild(mesData);

            var patrimonioCotasHTML = document.createElement('div');
            // patrimonioCotasHTML.classList.add('mes_title');
            patrimonioCotasHTML.textContent = 'Cotas: ' + patrimonioEmCotas;
            mesData.appendChild(patrimonioCotasHTML);

            var rendeHTML = document.createElement('div');
            // rendeHTML.classList.add('mes_title');
            rendeHTML.textContent = 'Rende: R$ ' + rende.toFixed(2);
            mesData.appendChild(rendeHTML);

            var patrimonioHTML = document.createElement('div');
            // patrimonioHTML.classList.add('mes_title');
            patrimonioHTML.textContent = 'Patrimonio: R$ ' + (patrimonioEmCotas * valorDaCota.value).toFixed(2);
            mesData.appendChild(patrimonioHTML);


            ano.appendChild(mes);
            body.appendChild(ano);


            console.log('Ano: ', new Date().getFullYear() + i, 'Mes: ', j, 'Cotas: ', patrimonioEmCotas, 'Rende: $', rende, 'Patrimonio: $', (patrimonioEmCotas * valorDaCota));
        }
        console.log('Ano: ', new Date().getFullYear() + i, 'Dividendos Ano: ', divAno);
        console.log('Ano: ', new Date().getFullYear() + i, 'Dividendos total: ', dividendoTotal);
    }
}