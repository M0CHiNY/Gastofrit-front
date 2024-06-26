document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs-item');

    if (tabs) {

        tabs.forEach(tab => {
            const questionWrapper = tab.querySelector('.tabs-item__question__wrapper');
            const content = tab.querySelector('.tabs-item__content');
            const plusIcon = tab.querySelector('.plus');
            const minusIcon = tab.querySelector('.minus');

            questionWrapper.addEventListener('click', function () {
                if (!content.classList.contains('active')) {
                    // Hide all other tabs
                    tabs.forEach(item => {
                        item.querySelector('.tabs-item__content').classList.remove('active');
                        item.querySelector('.tabs-item__question__wrapper').classList.remove('active');
                        item.querySelector('.plus').classList.remove('none');
                        item.querySelector('.minus').classList.add('none');
                    });

                    // Show the clicked tab
                    content.classList.add('active');
                    questionWrapper.classList.add('active');
                    plusIcon.classList.add('none');
                    minusIcon.classList.remove('none');
                } else {
                    // Hide the clicked tab
                    content.classList.remove('active');
                    questionWrapper.classList.remove('active');
                    plusIcon.classList.remove('none');
                    minusIcon.classList.add('none');
                }
            });
        });
    }
    //tabs for informations
    const tabInfo = document.querySelectorAll('[data-tab]');
    
    const tabsContent = document.querySelectorAll('[data-tab-content]');
    if (tabInfo) {

        tabInfo.forEach(function (item) {

            item.addEventListener('click', function () {
                let curentBtn = item;

                tabInfo.forEach(function (item) {
                    item.classList.remove('tab-active');
                });

                curentBtn.classList.add('tab-active');

                tabsContent.forEach(function (e) {
                    e.classList.add('hidden');
                });

                const contentBox = document.querySelector('#' + this.dataset.tab);
                contentBox.classList.remove('hidden');
            });
        });
    }
});
