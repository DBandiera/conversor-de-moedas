const convertButton = document.querySelector(".convert-button")
const currencySelectPara = document.querySelector(".currency-select")
const cleanButton = document.querySelector(".clean-button")
const selectConverterDe = document.querySelector(".select-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const inputCurrenyMoney = document.querySelector(".input-currency").value

    const realDolar = inputCurrenyMoney / 4.97
    const realEuro = inputCurrenyMoney / 5.36
    const realLibra = inputCurrenyMoney / 6.26
    const realPesoA = inputCurrenyMoney / 0.006
    const realIene = inputCurrenyMoney / 0.033
    /*const dolarEuro = inputCurrenyMoney / 1.08
    const euroDolar = inputCurrenyMoney / 0.93
    const dolarReal = inputCurrenyMoney * 4.97*/
    

    /*PARTE DE CONVERTER DE*/

    if (selectConverterDe.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    /*if (selectConverterDe.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(0)
    }

    if (selectConverterDe.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(0)
    }*/ 


    /*PARTE DE CONVERTER PARA*/

    if (currencySelectPara.value == "dolar-americano") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(realDolar)
    }

    if (currencySelectPara.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(realEuro)
    }

    if (currencySelectPara.value == "libra-esterlina") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(realLibra)
    }

    if (currencySelectPara.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(realPesoA)
    }

    if (currencySelectPara.value == "iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(realIene)
    }
}

function changeCurrencyDe() {
    const currencyNameDe = document.getElementById("currency-converter")
    const currencyImgDe = document.querySelector(".currency-img-converter")

    if (selectConverterDe.value == "dolar") {
        currencyNameDe.innerHTML = "Dólar Americano"
        currencyImgDe.src = "./assets/dolar.png"
    }
    if (selectConverterDe.value == "euro") {
        currencyNameDe.innerHTML = "Euro"
        currencyImgDe.src = "./assets/euro.png"
    }
    if (selectConverterDe.value == "real") {
        currencyNameDe.innerHTML = "Real"
        currencyImgDe.src = "./assets/real.png"
    }

    convertValues()

}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelectPara.value == "dolar-americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if (currencySelectPara.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if (currencySelectPara.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }
    if (currencySelectPara.value == "libra-esterlina") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libraE.png"
    }
    if (currencySelectPara.value == "peso-argentino") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImg.src = "./assets/pesoA.png"
    }
    if (currencySelectPara.value == "iene") {
        currencyName.innerHTML = "Iene Japonês"
        currencyImg.src = "./assets/iene.png"
    }

    convertValues()
}


selectConverterDe.addEventListener("change", changeCurrencyDe)
currencySelectPara.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues, currencySelectPara)


