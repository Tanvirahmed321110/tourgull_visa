// funciton active
function activeF(selector) {
    const items = document.querySelectorAll(selector)

    if (items) {
        items.forEach(item => {
            item.addEventListener('click', function () {
                items.forEach(single => {
                    single.classList.remove('active')
                })
                item.classList.add('active')
            })
        })
    }
}

// for tab button
activeF('.tab-buttons .tab-button')



// For Tabs here
function setupTabs(buttonSelector, contentSelector, tabMap) {
    const tabButtons = document.querySelectorAll(buttonSelector);
    const tabContents = document.querySelectorAll(contentSelector);

    if (tabButtons.length === 0 || tabContents.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Get target content id from map
            const tabName = button.getAttribute('data-tab');
            const targetContentId = tabMap[tabName];

            const targetContent = document.getElementById(targetContentId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}


// Usage tab for visa information page
setupTabs('.tab-buttons .tab-button', '.tab-contents .tab-content', {
    information: 'into_1',
    progessing_time: 'into_2',
    faq: 'into_3',
    office: 'into_4',
    visa_free: 'into_5',
    specification: 'into_6',
});


function sliderF(className) {
    const slider = document.querySelector(className)
    if (slider) {
        var swiper = new Swiper(slider, {
            slidesPerView: "auto", // Automatically adjust slide width
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 0, // No delay, continuous movement
                disableOnInteraction: false,
            },
            speed: 5000, // Adjust to control smoothness
            freeMode: true, // Enables continuous smooth scrolling
            freeModeMomentum: true, // Adds inertia effect
            breakpoints: {
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                480: { slidesPerView: 1 },
            },
        });
    }
}
// For special offer slider
sliderF('.suggest-slider')
