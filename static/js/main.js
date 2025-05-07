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

// Usage
setupTabs('.tab-buttons .tab-button', '.tab-contents .tab-content', {
    tourlist: 'tab1',
    business: 'tab2',
    medical: 'tab3',
    stydy: 'tab4',
    other: 'tab5'
});
