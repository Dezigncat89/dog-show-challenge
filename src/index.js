document.addEventListener('DOMContentLoaded', () => {

})
//Fetch Request to Render
async function getdogs() {
    let url = 'dogs.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderDogs() {
    let Dogss = await getDogs();
    let html = '';
    Dogs.forEach(Dog => {
        let htmlSegment = `<div class="table">
    <h2>${table.name}</h2>
    <h3>${table.breed}</h3>
    <h4>${table.sex}</h4>
    <p>4 Likes </p>
    <button class="like-btn" id="[dog_id]">Like <3</button>
  </div> 
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

//Edit Dogs Info on Table
dogContainer.addEventListener("submit", function (e) {
e.preventDefault()
editDogs(e.target, e.target.dataset.formId)
})
function editDogs(name, breed, sex) {
fetch(`http://localhost:3000/dogs/${dogId}`, {
method: "PATCH",
headers: {
"Content-type": "application/json",
"accept": "application/json"
},
body: JSON.stringify({
name: nameInfo.name.value
breed: breedInfo.breed.value
sex: sexInfo.sex.value
})
})
.then(res => res.json())
.then( dog => {
fetchDogs()
nameInfo.reset()
breedInfo.reset()
sexInfo.reset()
})
}
