
let container=document.getElementById("container")
const sortBy = document.getElementById("sort-by");
const filterCategory = document.getElementById("filter-category");
const filterInput = document.getElementById("filter");

async function fetchdata(){
    // alert('a' && a)
    let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
    let d=await res.json()
    data=d.meals
    displayData(data);
    populateCategories(data);
}
fetchdata('a')

sortBy.addEventListener("change", () => {
    sortData();
});
filterCategory.addEventListener("change", () => {
    filterData();
});

filterInput.addEventListener("input", () => {
    // fetchdata(filterInput.value);
});

function populateCategories(data) {
    const categories = [...new Set(data.map(meal => meal.strCategory))];
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filterCategory.appendChild(option);
    });
}

function sortData() {
    let criteria = sortBy.value
    if (criteria === "name_asc") {
        data.sort((a, b) => a.strMeal.localeCompare(b.strMeal));
    } else if (criteria === "name_desc") {
        data.sort((a, b) => b.strMeal.localeCompare(a.strMeal));
    } else if (criteria === "area_asc") {
        data.sort((a, b) => a.strArea.localeCompare(b.strArea));
    } else if (criteria === "area_desc") {
        data.sort((a, b) => b.strArea.localeCompare(a.strArea));
    }
    displayData(filterAndSort());
}

function filterData(searchTerm) {
    displayData(filterAndSort());
}

function filterAndSort() {
    let filteredData = [...data];


    const category = filterCategory.value;
    if (category) {
        filteredData = filteredData.filter(item => item.strCategory === category);
    }

    const searchTerm = filterInput.value.toLowerCase();
    filteredData = filteredData.filter(item =>
        item.strMeal.toLowerCase().includes(searchTerm)
    );

    return filteredData;
}

function displayData(data){
    console.log(data)
    container.innerHTML=""
    data.forEach((e,i)=>{
        let div=document.createElement('div')

        div.innerHTML=`

        <div class="meal-card">
        <h2>${e.strMeal}</h2>
        <p>Category: ${e.strCategory}</p>
        <p>Area: ${e.strArea}</p>
        <img src="${e.strMealThumb}" alt="">
    </div>


        `
        container.appendChild(div)
    })
}
