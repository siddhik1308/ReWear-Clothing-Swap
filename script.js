
// =====================================
// REWEAR - HOMEPAGE INTERACTIONS
// =====================================


// MOBILE SIDEBAR

const menuToggle = document.getElementById("menuToggle");

const sidebar = document.querySelector(".sidebar");


menuToggle.addEventListener("click", function () {

    sidebar.classList.toggle("open");

});



// CLOSE MOBILE SIDEBAR WHEN CLICKING A MENU ITEM

document.querySelectorAll(".menu-item").forEach(function (item) {

    item.addEventListener("click", function () {

        if (window.innerWidth <= 850) {

            sidebar.classList.remove("open");

        }

    });

});



// PRODUCT CATEGORY FILTER

const filterButtons = document.querySelectorAll(".filter-button");

const productCards = document.querySelectorAll(".product-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;


        // Update active filter button

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");



        // Show matching products

        productCards.forEach(function (card) {

            const productCategory = card.dataset.category;


            if (
                selectedCategory === "All" ||
                productCategory === selectedCategory
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});



// CATEGORY CARDS

document.querySelectorAll(".category-card").forEach(function (card) {

    card.addEventListener("click", function () {

        const selectedCategory = card.dataset.category;


        // Find the matching filter button

        const matchingButton = document.querySelector(
            `.filter-button[data-filter="${selectedCategory}"]`
        );


        if (matchingButton) {

            matchingButton.click();

        } else {

            // If a category does not have a dedicated filter,
            // show all products.

            document.querySelector(
                '.filter-button[data-filter="All"]'
            ).click();

        }


        // Scroll to the clothing section

        document.getElementById("shop").scrollIntoView({

            behavior: "smooth"

        });

    });

});



// PRODUCT SEARCH

const searchInput = document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const searchTerm = searchInput.value.toLowerCase().trim();


    productCards.forEach(function (card) {

        const productName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();


        const productCategory = card
            .querySelector(".product-category")
            .textContent
            .toLowerCase();


        const matchesSearch =
            productName.includes(searchTerm) ||
            productCategory.includes(searchTerm);


        card.style.display = matchesSearch ? "" : "none";

    });

});



// WISHLIST BUTTONS

document.querySelectorAll(".wishlist-button").forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("selected");


        if (button.classList.contains("selected")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});



// SWAP BUTTONS

document.querySelectorAll(".swap-button").forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Welcome to ReWear! ❤️\n\n" +
            "The swap request feature will be connected " +
            "to user accounts and the database in a later step."
        );

    });

});
// ==============================
// REWEAR HERO SLIDER
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".hero-track");
    const slides = document.querySelectorAll(".hero-slide");

    const nextButton = document.querySelector(".slider-next");
    const prevButton = document.querySelector(".slider-prev");

    const dots = document.querySelectorAll(".slider-dot");

    if (!track || slides.length === 0) return;

    let currentSlide = 0;

    function showSlide(index) {

        currentSlide = (index + slides.length) % slides.length;

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });

    }

    // NEXT SLIDE

    nextButton.addEventListener("click", function () {
        showSlide(currentSlide + 1);
    });

    // PREVIOUS SLIDE

    prevButton.addEventListener("click", function () {
        showSlide(currentSlide - 1);
    });

    // DOT NAVIGATION

    dots.forEach((dot, index) => {

        dot.addEventListener("click", function () {
            showSlide(index);
        });

    });

    // AUTOMATIC SLIDING

    let autoSlide = setInterval(function () {
        showSlide(currentSlide + 1);
    }, 5000);

    // PAUSE WHILE HOVERING

    const slider = document.querySelector(".hero-slider");

    slider.addEventListener("mouseenter", function () {
        clearInterval(autoSlide);
    });

    slider.addEventListener("mouseleave", function () {

        autoSlide = setInterval(function () {
            showSlide(currentSlide + 1);
        }, 5000);

    });

});
// ==============================
// KIDS' WEAR AGE FILTERS
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    const ageButtons = document.querySelectorAll(".kids-filter");
    const products = document.querySelectorAll(".kids-product-card");

    ageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedAge = button.dataset.age;

            // Update active button

            ageButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            // Filter products

            products.forEach(function (product) {

                const productAge = product.dataset.age;

                if (selectedAge === "all" || productAge === selectedAge) {
                    product.style.display = "";
                } else {
                    product.style.display = "none";
                }

            });

        });

    });

});