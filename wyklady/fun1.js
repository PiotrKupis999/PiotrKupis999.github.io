function Wiek(dataUr) {
    var d = new Date();
    var age = d.getFullYear() - dataUr;
    console.log("Masz " + age + " lat");
}

function KursEuro () {
    fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/last/rates/mid?format=json' )
    .then(response => response.json())
    .then(data => console.log(data));

}