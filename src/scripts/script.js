let valorEmDolar = prompt("Digite o valor em dolares:");

fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((response) => response.json())
  .then((data) => {
    let cotacaoDoDolar = data.rates.BRL;

    let valorEmReal = valorEmDolar * cotacaoDoDolar;
    valorEmReal = valorEmReal.toFixed(2);

    let valorFormatado = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(valorEmReal);

    alert(valorFormatado);

    const resultElement = document.getElementById("resultado");
    resultElement.innerHTML =
      "US$ " + valorEmDolar + " corresponde a " + valorFormatado;
  })
  .catch((error) => console.error(error));
