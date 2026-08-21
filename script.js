// ==========================================
// GLOWVIA BEAUTY - SCRIPT.JS
// ==========================================


// ==========================================
// LOADING SCREEN
// ==========================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 1000);
    }

});


// ==========================================
// MOBILE NAVBAR
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");

    });

}


// Menutup menu setelah memilih halaman
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    });

});


// ==========================================
// SEARCH BUTTON
// ==========================================

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function () {

        searchBox.classList.toggle("show");

        if (searchBox.classList.contains("show") && searchInput) {
            searchInput.focus();
        }

    });

}


// ==========================================
// SEARCH FUNCTION
// ==========================================

function searchBeauty() {

    if (!searchInput) return;

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    if (keyword === "") {

        alert("Tulis yang ingin kamu cari dulu ya 💗");

        return;

    }


    if (
        keyword.includes("skin") ||
        keyword.includes("skincare") ||
        keyword.includes("kulit")
    ) {

        document
            .getElementById("skincare")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (
        keyword.includes("product") ||
        keyword.includes("produk")
    ) {

        document
            .getElementById("products")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (
        keyword.includes("quiz") ||
        keyword.includes("tes")
    ) {

        document
            .getElementById("quiz")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (
        keyword.includes("beauty") ||
        keyword.includes("makeup") ||
        keyword.includes("hair")
    ) {

        document
            .getElementById("beauty")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }

    else {

        alert(
            "Coba cari: skincare, beauty, products, haircare, atau quiz ✨"
        );

    }

}


// Bisa tekan Enter untuk mencari
if (searchInput) {

    searchInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            searchBeauty();

        }

    });

}


// ==========================================
// DARK MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");


        if (document.body.classList.contains("dark")) {

            themeBtn.textContent = "☀";

        }

        else {

            themeBtn.textContent = "☾";

        }

    });

}


// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================

function revealElements() {

    const elements =
        document.querySelectorAll(".reveal");

    elements.forEach(function (element) {

        const position =
            element.getBoundingClientRect().top;

        if (
            position <
            window.innerHeight - 80
        ) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

window.addEventListener(
    "load",
    revealElements
);

revealElements();


// ==========================================
// ACTIVE NAVBAR SAAT SCROLL
// ==========================================

const sections =
    document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// BEAUTY MODAL
// ==========================================

function openBeauty(type) {

    const modal =
        document.getElementById("modal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");

    const emoji =
        document.getElementById("modalEmoji");


    if (!modal || !title || !text || !emoji) {
        return;
    }


    modal.classList.add("show");


    if (type === "Skincare Routine") {

        emoji.textContent = "🧴";

        title.textContent =
            "Skincare Routine";

        text.textContent =
            "Mulai dengan langkah sederhana seperti membersihkan wajah dengan lembut, menggunakan pelembap yang sesuai, dan melindungi kulit dari sinar matahari. Gunakan produk sesuai kebutuhan kulitmu.";

    }


    else if (type === "Self Care") {

        emoji.textContent = "🌷";

        title.textContent =
            "Self Care";

        text.textContent =
            "Self-care bisa dilakukan dengan banyak cara sederhana, seperti beristirahat, melakukan aktivitas yang kamu sukai, menjaga kebersihan diri, tidur cukup, dan meluangkan waktu untuk diri sendiri.";

    }


    else if (type === "Haircare") {

        emoji.textContent = "💆";

        title.textContent =
            "Haircare";

        text.textContent =
            "Rawat rambut dengan lembut, jaga kebersihannya, dan hindari penggunaan panas secara berlebihan. Pilih perawatan yang sesuai dengan kondisi rambutmu.";

    }


    else if (type === "Makeup") {

        emoji.textContent = "💄";

        title.textContent =
            "Makeup";

        text.textContent =
            "Makeup dapat menjadi cara kreatif untuk berekspresi. Kamu bisa mencoba tampilan sederhana yang membuatmu nyaman dan percaya diri.";

    }


    else if (type === "Skincare Guide") {

        emoji.textContent = "✨";

        title.textContent =
            "Glowvia Skincare Guide";

        text.textContent =
            "Rutinitas dasar dapat dimulai dengan membersihkan wajah, menggunakan pelembap, dan menggunakan perlindungan dari sinar matahari pada siang hari.";

    }


    else if (type === "About Glowvia") {

        emoji.textContent = "♡";

        title.textContent =
            "About Glowvia";

        text.textContent =
            "Glowvia adalah website beauty dan self-care yang berisi informasi, inspirasi, dan fitur interaktif mengenai perawatan diri.";

    }

}


// ==========================================
// PRODUCT MODAL
// ==========================================

function openProduct(product) {

    const modal =
        document.getElementById("modal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");

    const emoji =
        document.getElementById("modalEmoji");


    if (!modal) return;


    emoji.textContent = "💗";

    title.textContent = product;

    text.textContent =
        "Ini adalah konsep produk fiktif dari Glowvia. Kamu bisa mengembangkan detail produk ini sesuai kebutuhan desain website.";

    modal.classList.add("show");

}


// ==========================================
// CLOSE MODAL
// ==========================================

function closeModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {

        modal.classList.remove("show");

    }

}


// Klik luar modal untuk menutup
const modal =
    document.getElementById("modal");

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (event.target === modal) {

                closeModal();

            }

        }
    );

}


// ==========================================
// WISHLIST / FAVORITE
// ==========================================

function toggleWish(button) {

    if (!button) return;


    button.classList.toggle("liked");


    if (
        button.classList.contains("liked")
    ) {

        button.textContent = "♥";

    }

    else {

        button.textContent = "♡";

    }

}


// ==========================================
// PRODUCT FILTER
// ==========================================

const filters =
    document.querySelectorAll(".filter");

const products =
    document.querySelectorAll(".product-card");


filters.forEach(function (filter) {

    filter.addEventListener("click", function () {

        filters.forEach(function (item) {

            item.classList.remove("active");

        });


        filter.classList.add("active");


        const category =
            filter.dataset.filter;


        products.forEach(function (product) {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {

                product.classList.remove("hide");

            }

            else {

                product.classList.add("hide");

            }

        });

    });

});


// ==========================================
// BEAUTY QUIZ
// ==========================================

function runQuiz() {

    const mood =
        document.getElementById("quizMood");

    const vibe =
        document.getElementById("quizVibe");

    const result =
        document.getElementById("quizResult");


    if (!mood || !vibe || !result) {
        return;
    }


    const moodValue =
        mood.value;

    const vibeValue =
        vibe.value;


    if (
        moodValue === "" ||
        vibeValue === ""
    ) {

        result.textContent =
            "♡ Pilih kedua jawaban dulu ya!";

        return;

    }


    if (
        moodValue === "fresh" &&
        vibeValue === "natural"
    ) {

        result.textContent =
            "🌿 Your Glow: Fresh & Natural — calm, clean, and effortless!";

    }

    else if (
        moodValue === "soft" &&
        vibeValue === "pink"
    ) {

        result.textContent =
            "🎀 Your Glow: Soft Pink — sweet, cozy, and dreamy!";

    }

    else if (
        moodValue === "confident" &&
        vibeValue === "glam"
    ) {

        result.textContent =
            "✨ Your Glow: Glam Queen — bold, sparkling, and confident!";

    }

    else if (
        moodValue === "fresh" &&
        vibeValue === "pink"
    ) {

        result.textContent =
            "🌸 Your Glow: Pink Fresh — cute, fresh, and playful!";

    }

    else if (
        moodValue === "soft" &&
        vibeValue === "natural"
    ) {

        result.textContent =
            "🌷 Your Glow: Soft Natural — calm, gentle, and cozy!";

    }

    else {

        result.textContent =
            "💗 Your Glow: Pretty & Unique — your own vibe is the best vibe!";

    }

}


// ==========================================
// BEAUTY QUOTES
// ==========================================

const quotes = [

    "“Your glow is not about being perfect.”",

    "“Take care of yourself with kindness.”",

    "“You deserve little moments of happiness.”",

    "“Confidence grows when you appreciate yourself.”",

    "“Your beauty is uniquely yours.”",

    "“Small self-care moments can brighten your day.”"

];


let quoteIndex = 0;


function newQuote() {

    const quoteText =
        document.querySelector(".quote-card h2");

    if (!quoteText) return;


    quoteIndex++;

    if (quoteIndex >= quotes.length) {

        quoteIndex = 0;

    }


    quoteText.style.opacity = "0";


    setTimeout(function () {

        quoteText.textContent =
            quotes[quoteIndex];

        quoteText.style.opacity = "1";

    }, 250);

}


// ==========================================
// CONTACT FORM
// ==========================================

function sendMessage(event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName");


    if (!name) return;


    const userName =
        name.value.trim();


    alert(
        "Thank you, " +
        userName +
        " 💗 Pesan kamu berhasil dikirim!"
    );


    event.target.reset();

}


// ==========================================
// CLOSE SEARCH WHEN CLICKING OUTSIDE
// ==========================================

document.addEventListener("click", function (event) {

    if (
        searchBox &&
        searchBtn &&
        !searchBox.contains(event.target) &&
        !searchBtn.contains(event.target)
    ) {

        searchBox.classList.remove("show");

    }

});


// ==========================================
// ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

        if (searchBox) {
            searchBox.classList.remove("show");
        }

        if (navMenu) {
            navMenu.classList.remove("show");
        }

    }

});


// ==========================================
// SMALL HEART CLICK EFFECT
// ==========================================

document.addEventListener("click", function (event) {

    if (
        event.target.classList.contains("wishlist")
    ) {

        const heart =
            document.createElement("span");

        heart.textContent = "♥";

        heart.style.position = "fixed";
        heart.style.left =
            event.clientX + "px";
        heart.style.top =
            event.clientY + "px";
        heart.style.color = "#ed5f9d";
        heart.style.fontSize = "22px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "99999";
        heart.style.animation =
            "heartPop 0.8s ease forwards";

        document.body.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 800);

    }

});


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    "♡ Glowvia Beauty loaded successfully!"
);