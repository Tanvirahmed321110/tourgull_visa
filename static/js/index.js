
// for category dropdown item active class added
activeF('.category-area .dropdown-item')


const categoryArea = document.querySelector('.category-area');
const dropdown = categoryArea.querySelector('.dropdown');
const input = categoryArea.querySelector('input');
const dropdownItems = dropdown.querySelectorAll('.dropdown-item');

// Toggle dropdown when category area is clicked
categoryArea.addEventListener('click', function (e) {
    dropdown.classList.toggle('active');
    input.addEventListener('focus', function () {
        dropdown.classList.toggle('active')
    })
});

// When dropdown item clicked → paste text into input + close dropdown
dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent event bubbling
        input.value = this.textContent;
        dropdown.classList.remove('active');
    });
});

// Optional: Click outside closes dropdown
document.addEventListener('click', function (e) {
    if (!categoryArea.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});




// For special offer slider
var swiper = new Swiper(".special-offer-slider", {
    slidesPerView: "auto", // Automatically adjust slide width
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 0, // No delay, continuous movement
        disableOnInteraction: false,
    },
    speed: 3000, // Adjust to control smoothness
    freeMode: true, // Enables continuous smooth scrolling
    freeModeMomentum: true, // Adds inertia effect
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
    },
});


// Usage tab for home page
setupTabs('.tab-buttons .tab-button', '.tab-contents .tab-content', {
    tourlist: 'tab1',
    business: 'tab2',
    medical: 'tab3',
    stydy: 'tab4',
    other: 'tab5'
});
