const mealsContainer = document.getElementById('meals-container')
const categoryFilter = document.getElementById('category-filter')
const areaFilter = document.getElementById('area-filter')
const searchInput = document.getElementById('search-input')
const sortBy = document.getElementById('sort-by')
const paginationContainer = document.getElementById('pagination-container')

let allMeals = []
let filteredMeals = []
let currentPage = 1
const mealsPerPage = 5
const visiblePageButtons = 5

const fetchData = async () => {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        const data = await response.json()
        allMeals = data.meals || []
        filteredMeals = [...allMeals]
        populateFilters()
        applyFiltersAndSort()
    } catch (error) {
        console.error('Error fetching data:', error)
        mealsContainer.innerHTML = '<p>Failed to load meals. Please try again later.</p>'
    }
}

const populateFilters = () => {
    const categories = [...new Set(allMeals.map(meal => meal.strCategory))].sort()
    const areas = [...new Set(allMeals.map(meal => meal.strArea))].sort()

    categories.forEach(category => {
        const option = document.createElement('option')
        option.value = category
        option.textContent = category
        categoryFilter.appendChild(option)
    })

    areas.forEach(area => {
        const option = document.createElement('option')
        option.value = area
        option.textContent = area
        areaFilter.appendChild(option)
    })
}

const applyFiltersAndSort = () => {
    const category = categoryFilter.value
    const area = areaFilter.value
    const sortValue = sortBy.value
    const searchTerm = searchInput.value.toLowerCase()

    let tempMeals = [...allMeals]

    // Apply search filter first
    if (searchTerm) {
        tempMeals = tempMeals.filter(meal => meal.strMeal.toLowerCase().includes(searchTerm))
    }

    // Apply category filter
    if (category !== 'all') {
        tempMeals = tempMeals.filter(meal => meal.strCategory === category)
    }
    // Apply area filter
    if (area !== 'all') {
        tempMeals = tempMeals.filter(meal => meal.strArea === area)
    }

    if (sortValue === 'name-asc') {
        tempMeals.sort((a, b) => a.strMeal.localeCompare(b.strMeal))
    } else if (sortValue === 'name-desc') {
        tempMeals.sort((a, b) => b.strMeal.localeCompare(a.strMeal))
    }

    filteredMeals = tempMeals
    currentPage = 1
    displayMeals()
    setupPagination()
}

const displayMeals = () => {
    mealsContainer.innerHTML = ''
    if (filteredMeals.length === 0) {
        mealsContainer.innerHTML = '<p>No meals match your criteria.</p>'
        return
    }

    const startIndex = (currentPage - 1) * mealsPerPage
    const endIndex = startIndex + mealsPerPage
    const paginatedMeals = filteredMeals.slice(startIndex, endIndex)

    paginatedMeals.forEach(meal => {
        const mealCard = document.createElement('div')
        mealCard.className = 'meal-card'
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="meal-info">
                <h3>${meal.strMeal}</h3>
                <p>${meal.strCategory} | ${meal.strArea}</p>
            </div>
        `
        mealsContainer.appendChild(mealCard)
    })
}

const setupPagination = () => {
    paginationContainer.innerHTML = ''
    const totalPages = Math.ceil(filteredMeals.length / mealsPerPage)

    if (totalPages <= 1) return

    const createButton = (text, page, isDisabled = false, isActive = false) => {
        const button = document.createElement('button')
        button.textContent = text
        button.disabled = isDisabled
        if (isActive) button.classList.add('active')
        button.addEventListener('click', () => {
            currentPage = page
            displayMeals()
            setupPagination()
        })
        return button
    }

    paginationContainer.appendChild(createButton('<< First', 1, currentPage === 1))

    let startPage, endPage
    if (totalPages <= visiblePageButtons) {
        startPage = 1
        endPage = totalPages
    } else {
        const thirdLastVisible = Math.floor(visiblePageButtons * 0.6)
        if (currentPage <= thirdLastVisible) {
            startPage = 1
            endPage = visiblePageButtons
        } else if (currentPage + (visiblePageButtons - thirdLastVisible) >= totalPages) {
            startPage = totalPages - visiblePageButtons + 1
            endPage = totalPages
        } else {
            startPage = currentPage - thirdLastVisible + 1
            endPage = currentPage + (visiblePageButtons - thirdLastVisible)
        }
    }
    
    if (totalPages > 10 && currentPage > Math.floor(visiblePageButtons * 0.6)) {
        const thirdLastVisibleButtonIndex = startPage + Math.floor(visiblePageButtons * 0.6) - 2
        if (currentPage >= thirdLastVisibleButtonIndex && endPage < totalPages) {
            startPage++
            endPage++
        }
    }
    
    endPage = Math.min(endPage, totalPages)
    startPage = Math.max(1, endPage - visiblePageButtons + 1)


    for (let i = startPage; i <= endPage; i++) {
        paginationContainer.appendChild(createButton(i, i, false, i === currentPage))
    }

    paginationContainer.appendChild(createButton('Last >>', totalPages, currentPage === totalPages))
}

categoryFilter.addEventListener('change', applyFiltersAndSort)
areaFilter.addEventListener('change', applyFiltersAndSort)
searchInput.addEventListener('input', applyFiltersAndSort) 
sortBy.addEventListener('change', applyFiltersAndSort)

document.addEventListener('DOMContentLoaded', fetchData)
