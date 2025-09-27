const productForm = document.getElementById('product-form')
const productNameInput = document.getElementById('product-name')
const quantityInput = document.getElementById('quantity')
const costInput = document.getElementById('cost-per-unit')
const soldInput = document.getElementById('sold-quantity')
const tableBody = document.getElementById('product-table-body')

let products = JSON.parse(localStorage.getItem('products')) || []

const saveToStorage = () => {
    localStorage.setItem('products', JSON.stringify(products))
}

const renderTable = () => {
    tableBody.innerHTML = ''
    products.forEach(product => {
        const row = document.createElement('tr')
        row.dataset.id = product.id

        const totalCost = product.quantity * product.costPerUnit
        const totalBenefit = product.totalSell - totalCost

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.costPerUnit.toFixed(2)}</td>
            <td>${product.soldQuantity}</td>
            <td>${totalCost.toFixed(2)}</td>
            <td>${product.totalSell.toFixed(2)}</td>
            <td style="color: ${totalBenefit < 0 ? 'red' : 'green'}">${totalBenefit.toFixed(2)}</td>
            <td>
                <button class="action-btn edit-btn">Edit</button>
                <button class="action-btn delete-btn">Delete</button>
            </td>
        `
        tableBody.appendChild(row)
    })
}

const addProduct = (e) => {
    e.preventDefault()

    const newProduct = {
        id: Date.now(),
        name: productNameInput.value,
        quantity: parseInt(quantityInput.value),
        costPerUnit: parseFloat(costInput.value),
        soldQuantity: parseInt(soldInput.value) || 0,
        totalSell: 0,
    }

    products.push(newProduct)
    saveToStorage()
    renderTable()
    productForm.reset()
}

const handleTableClick = (e) => {
    const target = e.target
    const row = target.closest('tr')
    if (!row) return

    const id = parseInt(row.dataset.id)

    if (target.classList.contains('delete-btn')) {
        products = products.filter(product => product.id !== id)
        saveToStorage()
        renderTable()
    }

    if (target.classList.contains('edit-btn')) {
        const product = products.find(p => p.id === id)
        if (!product) return

        const cells = row.children
        cells[3].innerHTML = `<input type="number" value="${product.soldQuantity}" min="0">`
        cells[5].innerHTML = `<input type="number" value="${product.totalSell}" min="0" step="0.01">`

        target.textContent = 'Save'
        target.classList.remove('edit-btn')
        target.classList.add('save-btn')
    }

    if (target.classList.contains('save-btn')) {
        const productIndex = products.findIndex(p => p.id === id)
        if (productIndex === -1) return

        const newSoldQuantity = parseInt(row.querySelector('td:nth-child(4) input').value)
        const newTotalSell = parseFloat(row.querySelector('td:nth-child(6) input').value)

        if (newSoldQuantity > products[productIndex].quantity) {
            alert('Sold quantity cannot be greater than total quantity.')
            return
        }

        products[productIndex].soldQuantity = newSoldQuantity
        products[productIndex].totalSell = newTotalSell

        saveToStorage()
        renderTable()
    }
}

productForm.addEventListener('submit', addProduct)
tableBody.addEventListener('click', handleTableClick)
document.addEventListener('DOMContentLoaded', renderTable)
