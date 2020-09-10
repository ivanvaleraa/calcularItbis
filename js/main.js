let bruto;
let itbis;

function calcular(neto){
    neto = neto.value;
    neto = neto.replace(',','');
    calcularBruto(neto);
}

function calcularBruto(neto){

    bruto = neto / 1.18;
    bruto = isNaN(bruto) ? 0 : bruto;
    calcularItbis(bruto);
    bruto = bruto.toFixed(2);
    bruto = numeroConComas(bruto);
    document.getElementById("bruto").value = bruto;
}

function calcularItbis(bruto){

    itbis = bruto * 0.18;
    itbis = isNaN(itbis) ? 0 : itbis;
    itbis = itbis.toFixed(2);
    itbis = numeroConComas(itbis);
    document.getElementById("itbis").value = itbis;
}

function numeroConComas(numero) {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
