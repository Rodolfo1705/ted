const inputChave = document.querySelector('input.chave')
const inputValor = document.querySelector('input.valor')
const addButton = document.querySelector('button')
const div = document.querySelector('div')

const tabela = {}

addButton.onclick = () => {
    tabela[inputChave.value] = inputValor.value
    inputChave.value = ''
    inputValor.value = ''

    div.innerText = ''
    for (const key in tabela) {
        div.innerText += `${key}: ${tabela[key]}\n`
    }
}
