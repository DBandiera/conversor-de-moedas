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
    const realEuro = inputCurrenyMoney / 5.44
    const realLibra = inputCurrenyMoney / 6.26
    const realPesoA = inputCurrenyMoney / 0.006
    const realIene = inputCurrenyMoney / 0.033
    const dolarEuro = inputCurrenyMoney * 0.91
    const euroDolar = inputCurrenyMoney / 0.93
    const dolarReal = inputCurrenyMoney * 4.97
    const dolarLibra = inputCurrenyMoney * 0.78
    const dolarPeso = inputCurrenyMoney * 849.93
    const dolarIene = inputCurrenyMoney * 147.74
    const euroLibra = inputCurrenyMoney * 0.86
    const euroPeso = inputCurrenyMoney * 930.21
    const euroIene = inputCurrenyMoney * 161.64
    const euroReal = inputCurrenyMoney * 5.44
    const libraDolar = inputCurrenyMoney * 1.28
    const libraPeso = inputCurrenyMoney * 1087.44
    const libraIene = inputCurrenyMoney * 189.01
    const libraEuro = inputCurrenyMoney * 1.17
    const libraReal = inputCurrenyMoney * 6.36


    /*Erro duplicidade de valor*/

    if (selectConverterDe.value === currencySelectPara.value) {
        currencyValueToConvert.innerHTML = "Moeda Duplicada"

        currencyValueConverted.innerHTML = "Moeda Duplicada"

        alert("Você selecionou duas moedas iguais. \nPrecisa escolher moedas diferentes para conversão")
    }

    // Real

    if (selectConverterDe.value === "real" && currencySelectPara.value == "dolar-americano") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(realDolar)
    }

    if (selectConverterDe.value === "real" && currencySelectPara.value === "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(realEuro)
    }

    if (selectConverterDe.value === "real" && currencySelectPara.value === "libra-esterlina") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(realLibra)
    }

    if (selectConverterDe.value === "real" && currencySelectPara.value === "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(realPesoA)
    }

    if (selectConverterDe.value === "real" && currencySelectPara.value === "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(realIene)
    }

    // Dolar

    if (selectConverterDe.value === "dolar-americano" && currencySelectPara.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(dolarEuro)
    }

    if (selectConverterDe.value === "dolar-americano" && currencySelectPara.value == "libra-esterlina") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(dolarLibra)
    }

    if (selectConverterDe.value === "dolar-americano" && currencySelectPara.value == "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(dolarPeso)
    }

    if (selectConverterDe.value === "dolar-americano" && currencySelectPara.value == "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(dolarIene)
    }

    if (selectConverterDe.value === "dolar-americano" && currencySelectPara.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarReal)
    }

    // Euro

    if (selectConverterDe.value === "euro" && currencySelectPara.value == "dolar-americano") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(euroDolar)
    }

    if (selectConverterDe.value === "euro" && currencySelectPara.value == "libra-esterlina") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(euroLibra)
    }

    if (selectConverterDe.value === "euro" && currencySelectPara.value == "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(euroPeso)
    }

    if (selectConverterDe.value === "euro" && currencySelectPara.value == "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(euroIene)
    }

    if (selectConverterDe.value === "euro" && currencySelectPara.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroReal)
    }

    // Libra Esterlina

    if (selectConverterDe.value === "libra-esterlina" && currencySelectPara.value == "dolar-americano") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-US", {
            style: "currency",
            currency: "USD"
        }).format(libraDolar)
    }

    if (selectConverterDe.value === "libra-esterlina" && currencySelectPara.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(libraEuro)
    }

    if (selectConverterDe.value === "libra-esterlina" && currencySelectPara.value == "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(libraPeso)
    }

    if (selectConverterDe.value === "libra-esterlina" && currencySelectPara.value == "iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "DBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(libraIene)
    }

    if (selectConverterDe.value === "libra-esterlina" && currencySelectPara.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)

        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(libraReal)
    }



}

    function changeCurrencyDe() {
        const currencyNameDe = document.getElementById("currency-converter")
        const currencyImgDe = document.querySelector(".currency-img-converter")

        if (selectConverterDe.value == "dolar-americano") {
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
        if (selectConverterDe.value == "libra-esterlina") {
            currencyNameDe.innerHTML = "Libra Esterlina"
            currencyImgDe.src = "./assets/libraE.png"
        }
        if (selectConverterDe.value == "peso-argentino") {
            currencyNameDe.innerHTML = "Peso Argentino"
            currencyImgDe.src = "./assets/pesoA.png"
        }
        if (selectConverterDe.value == "iene") {
            currencyNameDe.innerHTML = "Iene Japonês"
            currencyImgDe.src = "./assets/iene.png"
        }

        // convertValues()

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

        // convertValues()
    }

    function cleanForm() {
        document.querySelector(".input-currency").value = ""

        document.querySelector(".currency-value-to-convert").innerHTML = "R$ 0,00"
        document.querySelector(".currency-value").innerHTML = "$ 0,00"

        document.querySelector(".select-convert").value = "selecionar"
        document.querySelector(".currency-select").value = "selecionar"

        changeCurrency()
    }


    selectConverterDe.addEventListener("change", changeCurrencyDe)
    currencySelectPara.addEventListener("change", changeCurrency)
    convertButton.addEventListener("click", convertValues, currencySelectPara)
    cleanButton.addEventListener('click', cleanForm)


