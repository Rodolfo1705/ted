class Arvore {
    valor
    esquerda
    direita

    constructor(valor) {
        this.valor = valor
    }

    adicionar(valor) {
        if (valor >= this.valor) {
            if (!this.direita) {
                this.direita = new Arvore(valor)
                return
            }
            this.direita.adicionar(valor)
            return
        }
        if (!this.esquerda) {
            this.esquerda = new Arvore(valor)
            return
        }
        this.esquerda.adicionar(valor)
    }

    inclui(valor) {
        if (this.valor === valor) return true

        if (valor >= this.valor) {
            if (!this.direita) return false
            return this.direita.inclui(valor)
        }

        if (!this.esquerda) return false
        return this.esquerda.inclui(valor)
    }

    print(callback) {
        if (this.esquerda) this.esquerda.print(callback)
        callback(this.valor)
        if (this.direita) this.direita.print(callback)
    }
}

const arvore = new Arvore(15)
const input = document.querySelector('input')
const addButton = document.querySelector('button.add')
const div = document.querySelector('div')

function atualizar() {
    div.innerText = ''
    arvore.print((valor) => {
        div.innerText += `${valor}\n`
    })
}

addButton.onclick = () => {
    arvore.adicionar(+input.value)
    atualizar()
}

atualizar()
