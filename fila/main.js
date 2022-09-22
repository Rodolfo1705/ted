class Fila {
    #representation = []

    get representation() {
        return this.#representation
    }

    push(value) {
        this.#representation.push(value)
    }

    shift() {
        this.#representation.shift()
    }
}

const fila = new Fila()
const input = document.querySelector('input')
const addButton = document.querySelector('button.add')
const removeButton = document.querySelector('button.remove')
const div = document.querySelector('div')

addButton.onclick = () => {
    fila.push(input.value)
    input.value = ''
    div.innerText = fila.representation
}

removeButton.onclick = () => {
    fila.shift()
    div.innerText = fila.representation
}
