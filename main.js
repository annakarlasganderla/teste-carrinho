const list = [
    {
        id: 1,
        desc: 'trufa1',
        amount: 150
    },
    {
        id: 2,
        desc: 'trufa2',
        amount: 260
    },
    {
        id: 3,
        desc: 'trufa3',
        amount: 350
    },
    {
        id: 4,
        desc: 'trufa4',
        amount: 700
    }
]

const items = {
    // somar total de itens da lista
    total () {
        prod1 = list[0].amount
        prod2 = list[1].amount
        prod3 = list[2].amount
        prod4 = list[3].amount

        let item = prod1 + prod2 + prod3 + prod4

        return item 
    },
    frete() {
       let total = items.total(item)
        if (total > 10) {
            document.querySelector('.free')
            .classList.add('active')
        } else {
            document.querySelector('.free')
            .classList.remove('active')
        }
    }
}

// substituir os dados do HTML com os dados do JS
const DOM = {
    listContainer: document.querySelector('#items nav'),

    addList(list, index) {
        const div = document.createElement('div')
        div.innerHTML = DOM.innerHTMLlist(list)

        DOM.listContainer.appendChild(div)
    },
    innerHTMLlist(list){
        const amount = utils.formatCurrency(list.amount)

        const html = `
            <img src="./images/trufa1.jpeg" alt="trufa de morango">
             <span>
                 <h3>Trufa de morango</h3>
                 <small>R$ 1,23</small>
                 <h4 class="valor">${amount}</h4>
             </span>
        `
        return html
    }, 
    updateTotal() {
        document.querySelector("#total")
        .innerHTML = utils.formatCurrency(items.total())
    }
}

// formatação
const utils = {
    formatCurrency(value) {
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100 

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })

        return value
    }
}


list.forEach(function(list) {
    DOM.addList(list)
})

console.log(DOM.updateTotal())

/*
var total = 10

if (total >= 10) {
    document.querySelector('.free')
    .classList.add('active')
} else {
    document.querySelector('.free')
    .classList.remove('active')
}
*/

// pegar valores ||
// somar todos eles ||
// chegar ao total ||
// se total maior que 10 exibir frete gratis || ok
