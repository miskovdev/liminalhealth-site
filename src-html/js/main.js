// Menu mobile
const menuOpen = document.querySelector('.header-menu-open');
const menuContainer = document.querySelector('.header-nav-mobile');

menuOpen.onclick = function (e) {
    e.preventDefault();
    menuContainer.classList.toggle('active');
}

// Fix for css transitions from user-agent styles
window.onload = function () {
    document.body.classList.remove('preload');
}

// Sticky nav menu section detecting
const header = document.querySelector('.header');
const navSticky = document.querySelector('.nsa-sticky');
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - (header.offsetHeight + navSticky.offsetHeight + 5); // 5 is the size of gap of nav menu
        sectionId = current.getAttribute("id");
        navLink = document.querySelector(".nsa-sticky a[href*=" + sectionId + "]");

        if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    });
}

// Tabs
const tabs = document.querySelectorAll(".caps-tab[data-target]");
const tabsContent = document.querySelectorAll(".caps-tab-content[data-id]");

tabs.forEach(current => {

    current.onclick = function (e) {
        resetTabs();
        current.classList.add('active');

        tabsContent.forEach(item => {
            if(e.target.dataset.target === item.dataset.id) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
});

function resetTabs() {
    tabs.forEach(current => {
        current.classList.remove('active');
    });
}

// Modal popup
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close');
const overlayModal = document.querySelector('.modal-overlay');
const openModal = document.querySelectorAll('.open-modal');

closeModal.onclick = function() {
    closeModalPopup();
}

overlayModal.onclick = function() {
    closeModalPopup();
}

function closeModalPopup() {
    modal.classList.remove('active');

    setTimeout(() => {
        modal.classList.remove('loading');
    }, 200);
}

openModal.forEach(button => {
    button.onclick = function(e) {
        e.preventDefault();
        modal.classList.add('loading');

        setTimeout(() => {
            modal.classList.add('active');
        }, 100);
    }
})
