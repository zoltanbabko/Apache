document.addEventListener("DOMContentLoaded", function () {
    var mobileBtn = document.getElementById("mobileMenuBtn");
    var mobileNav = document.getElementById("mobileNav");
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener("click", function () {
            mobileBtn.classList.toggle("active");
            mobileNav.classList.toggle("active");
        });
    }

    var navLinks = document.querySelectorAll(".nav-links a, .mobile-nav a");
    var sections = document.querySelectorAll("section[id]");
    function setActiveLink() {
        var fromTop = window.scrollY + 120;
        sections.forEach(function (section) {
            var id = section.getAttribute("id");
            var link = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (!link) return;
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
    setActiveLink();
    window.addEventListener("scroll", setActiveLink);

    var fadeEls = document.querySelectorAll(".fade-in");
    function revealOnScroll() {
        var windowH = window.innerHeight;
        fadeEls.forEach(function (el) {
            var rect = el.getBoundingClientRect();
            if (rect.top <= windowH - 100) {
                el.classList.add("visible");
            }
        });
    }
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("resize", revealOnScroll);

    var filters = document.querySelectorAll(".timeline-filter");
    var items = document.querySelectorAll(".timeline-item");
    filters.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filters.forEach(function (b) { b.classList.remove("active"); });
            btn.classList.add("active");
            var filter = btn.getAttribute("data-filter");
            items.forEach(function (it) {
                if (filter === "all" || it.getAttribute("data-category") === filter) {
                    it.style.display = "";
                } else {
                    it.style.display = "none";
                }
            });
        });
    });

    var timelineNodes = document.querySelectorAll(".timeline-node");
    timelineNodes.forEach(function (node) {
        node.addEventListener("click", function () {
            timelineNodes.forEach(function (n) { n.classList.remove("active"); });
            node.classList.add("active");
        });
    });

    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var subject = document.getElementById("subject").value.trim();
            var message = document.getElementById("message").value.trim();
            if (!name || !email || !subject || !message) {
                alert("Merci de remplir tous les champs.");
                return;
            }
            alert("Merci, votre message a été envoyé (simulation).");
            contactForm.reset();
        });
    }

    window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        if (!nav) return;
        if (window.scrollY > 50) nav.classList.add("scrolled"); else nav.classList.remove("scrolled");
    });
});
