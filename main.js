const logo = document.querySelector('.logo')
const banners = document.querySelectorAll('.rover-mobile-hero')
const catPeople = document.querySelector('.rover-hero-container')
const catPeopleH1 = catPeople.firstElementChild
const catPeopleP1 = catPeopleH1.nextElementSibling
const catSection = document.querySelector('.rover-middle-section')
const catFacts = document.querySelectorAll('.rover-fact-indiv')

logo.addEventListener('click', () => {
    banners.forEach(banner => {
        banner.toggleAttribute('hidden')
    });

    catPeopleH1.innerText = "We're the Cat People"
    catPeopleP1.innerText = "Book trusted, local pet sitters and walkers who will care for your cat like you would."
    catFacts.forEach((e) => {
        e.lastElementChild.firstElementChild.innerText = e.lastElementChild.firstElementChild.innerText.replace("Dog", "Cat")
    })
})
//--------------------------------------------------
const dropdown = document.querySelector('.dropdown button')
let dropDownMenu = dropdown.nextElementSibling;

dropdown.addEventListener('click', function () {
    this.classList.toggle('unactive');

    if (dropDownMenu.style.display === 'flex') {
        dropDownMenu.style.display = 'none';
    } else {
        dropDownMenu.style.display = 'flex';
    }
});



