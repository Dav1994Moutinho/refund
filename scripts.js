// Seleciona os elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Captura o evento de input para formatar o valeor.
amount.oninput = () => {
    // Otem o valor do input e remove os caracteres nao numéricos.
    let value = amount.value.replace(/\D/g, "")

    // Transformar o valor em centavos
    value = Number(value) / 100
    // Atualiza o valor do input.
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    // Formata o valor no pradrão BRL (Real rasileiro).
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    // Retorna o valor formatado.
    return value
}

// Captura o evento de sumbit do formulário para obter os valores.
form.onsubmit = (event) => {
    // Previne o comportamento de reload padrão da pagina.
    event.preventDefault()
    // Cria um objeto com os detalhes na nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }
    console.log(newExpense)
}