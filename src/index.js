document.addEventListener('DOMContentLoaded', () => {

})

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
    <h3>${table.Dog Breed
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div> 
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}
