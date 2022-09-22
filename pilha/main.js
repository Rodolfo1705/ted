class Pilha {
    #representation = []

    get representation() {
        return this.#representation
    }

    push(value) {
        this.#representation.push(value)
    }

    pop() {
        this.#representation.pop()
    }
}

const pilha = new Pilha()
const input = document.querySelector('input')
const addButton = document.querySelector('button.add')
const removeButton = document.querySelector('button.remove')
const div = document.querySelector('div')

addButton.onclick = () => {
    pilha.push(input.value)
    input.value = ''
    div.innerText = pilha.representation
}

removeButton.onclick = () => {
    pilha.pop()
    div.innerText = pilha.representation
}
