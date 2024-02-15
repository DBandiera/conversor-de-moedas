const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const cleanButton = document.querySelector(".clean-button")
const selectConverter = document.querySelector(".select-convert")


function convertValuesDe() {
    const inputCurrencyValueDe = document.querySelector(".input-currency").value
    const currencyValueToConvertDe = document.querySelector(".currency-value-to-convert")
    /*const currencyValueConvertedDe = document.querySelector(".currency-value")*/

    if (selectConverter.value == "real") {
        currencyValueToConvertDe.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValueDe)
    }

    if (selectConverter.value == "dolar") {
        currencyValueToConvertDe.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValueDe)
    }

    if (selectConverter.value == "euro") {
        currencyValueToConvertDe.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValueDe)
    }

}

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    /*const currencyValueToConvert = document.querySelector(".currency-value-to-convert")*/
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.20
    const euroToday = 6.20
    const realToday = 1.00

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * realToday)
    }

    /*currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)*/

}

function changeCurrencyDe() {
    const currencyConverter = document.getElementById("currency-converter")
    const currencyImgConverter = document.querySelector(".currency-img-converter")

    if (selectConverter.value == "dolar") {
        currencyConverter.innerHTML = "Dólar Americano"
        currencyImgConverter.src = "./assets/dolar.png"
    }
    if (selectConverter.value == "euro") {
        currencyConverter.innerHTML = "Euro"
        currencyImgConverter.src = "./assets/euro.png"
    }
    if (selectConverter.value == "real") {
        currencyConverter.innerHTML = "Real"
        currencyImgConverter.src = "./assets/real.png"
    }

    convertValuesDe()
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
}

/*function cleanForm() {

    document.getElementById("input-clean").value = ""

    if (currencySelect.value == "dolar") {
        document.getElementById("select-convert-para").innerHTML = "US$ 0,00"
    }
    if (currencySelect.value == "euro") {
        document.getElementById("select-convert-para").innerHTML = "0,00 €"
    }

    document.getElementById("select-convert-de").innerHTML = "R$ 0,00"
    document.getElementById("input-clean").focus()

}*/

selectConverter.addEventListener("change", changeCurrencyDe)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues, convertValuesDe, currencySelect)
cleanButton.addEventListener("click", cleanForm)
