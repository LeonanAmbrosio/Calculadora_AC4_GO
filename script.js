function calculate() {
    let valor = 0;

    if (document.getElementById('option1').checked) {
        let quantity = parseInt(document.getElementById('quantity1').value);
        valor += quantity * (17 * 26.47);
    }
    if (document.getElementById('option2').checked) {
        let quantity = parseInt(document.getElementById('quantity2').value);
        valor += quantity * (7 * 29.80);
    }
    if (document.getElementById('option3').checked) {
        let quantity = parseInt(document.getElementById('quantity3').value);
        valor += quantity * ((17 * 26.47) + (7 * 29.80));
    }
    if (document.getElementById('option4').checked) {
        let quantity = parseInt(document.getElementById('quantity4').value);
        valor += quantity * (17 * 36.41);
    }
    if (document.getElementById('option5').checked) {
        let quantity = parseInt(document.getElementById('quantity5').value);
        valor += quantity * (7 * 41.38);
    }
    if (document.getElementById('option6').checked) {
        let quantity = parseInt(document.getElementById('quantity6').value);
        valor += quantity * ((17 * 36.41) + (7 * 41.38));
    }

    document.getElementById('result').innerText = `O valor do extra AC4 é R$ ${valor.toFixed(2)} `;
}
