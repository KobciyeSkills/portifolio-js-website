document.addEventListener("DOMContentLoaded", () => {
    // Navbar scroll background
    window.addEventListener("scroll", () => {
        const scroll = window.scrollY;
        const box = document.querySelector(".header-text")?.offsetHeight || 0;
        const header = document.querySelector("header")?.offsetHeight || 0;

        if (scroll >= box - header) {
            document.querySelector("header").classList.add("background-header");
        } else {
            document.querySelector("header").classList.remove("background-header");
        }
    });

    // About section accordion-style behavior
    document.querySelectorAll(".naccs .menu div").forEach((menuItem, index) => {
        menuItem.addEventListener("click", () => {
            if (!menuItem.classList.contains("active")) {
                document.querySelectorAll(".naccs .menu div").forEach(el => el.classList.remove("active"));
                document.querySelectorAll(".naccs ul li").forEach(el => el.classList.remove("active"));

                menuItem.classList.add("active");
                const targetItem = document.querySelectorAll(".naccs ul li")[index];
                targetItem.classList.add("active");

                const listItemHeight = targetItem.offsetHeight;
                document.querySelector(".naccs ul").style.height = listItemHeight + "px";
            }
        });
    });

    // Menu toggle
    const menuTrigger = document.querySelector(".menu-trigger");
    if (menuTrigger) {
        menuTrigger.addEventListener("click", () => {
            menuTrigger.classList.toggle("active");
            const nav = document.querySelector(".header-area .nav");
            if (nav.style.display === "block") {
                nav.style.display = "none";
            } else {
                nav.style.display = "block";
            }
        });
    }

    // Smooth scroll and active nav update
    const onScroll = () => {
        const scrollPos = window.scrollY;
        document.querySelectorAll(".nav a").forEach(link => {
            const ref = document.querySelector(link.getAttribute("href"));
            if (ref && ref.offsetTop <= scrollPos && ref.offsetTop + ref.offsetHeight > scrollPos) {
                document.querySelectorAll(".nav ul li a").forEach(a => a.classList.remove("active"));
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    document.querySelectorAll('.scroll-to-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.removeEventListener("scroll", onScroll);

            document.querySelectorAll('.scroll-to-section a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 79,
                    behavior: "smooth"
                });
                setTimeout(() => {
                    window.location.hash = this.getAttribute("href");
                    document.addEventListener("scroll", onScroll);
                }, 500);
            }
        });
    });

    document.addEventListener("scroll", onScroll);

    // Page loading
    window.addEventListener("load", () => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.visibility = "hidden";
                preloader.style.display = "none";
            }, 900);
        }
    });

    // Counter animation on scroll
    const isVisible = el => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0 &&
            window.getComputedStyle(el).display !== "none"
        );
    };

    window.addEventListener("scroll", () => {
        const digits = document.querySelectorAll(".count-digit:not(.counter-loaded)");
        digits.forEach(digit => {
            if (isVisible(digit)) {
                digit.classList.add("counter-loaded");
                let start = 0;
                const end = parseInt(digit.textContent);
                const duration = 3000;
                const startTime = performance.now();

                const updateCounter = now => {
                    const progress = Math.min((now - startTime) / duration, 1);
                    digit.textContent = Math.ceil(progress * end);
                    if (progress < 1) requestAnimationFrame(updateCounter);
                };

                requestAnimationFrame(updateCounter);
            }
        });
    });

    // Dropdown submenu toggle
    document.querySelectorAll(".main-nav ul.nav .has-sub > a").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const li = link.parentElement;
            const submenu = li.querySelector("ul.sub-menu");

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
                li.classList.remove("is-open-sub");
            } else {
                document.querySelectorAll(".main-nav .has-sub ul.sub-menu").forEach(sub => sub.style.display = "none");
                document.querySelectorAll(".main-nav .has-sub").forEach(el => el.classList.remove("is-open-sub"));

                submenu.style.display = "block";
                li.classList.add("is-open-sub");
            }
        });
    });

    // Accordion system
    const Accordion = {
        settings: {
            first_expanded: false,
            toggle: false
        },
        openAccordion(toggle, content) {
            if (content.children.length) {
                toggle.classList.add("is-open");
                content.style.height = content.children[0].offsetHeight + "px";
            }
        },
        closeAccordion(toggle, content) {
            toggle.classList.remove("is-open");
            content.style.height = 0;
        },
        init(el) {
            const is_first_expanded = el.classList.contains("is-first-expanded");
            const is_toggle = el.classList.contains("is-toggle");

            const sections = el.querySelectorAll(".accordion");
            const all_toggles = el.querySelectorAll(".accordion-head");
            const all_contents = el.querySelectorAll(".accordion-body");

            sections.forEach((section, i) => {
                const toggle = all_toggles[i];
                const content = all_contents[i];

                toggle.addEventListener("click", () => {
                    if (!is_toggle) {
                        all_contents.forEach((cont, idx) => this.closeAccordion(all_toggles[idx], cont));
                        this.openAccordion(toggle, content);
                    } else {
                        if (toggle.classList.contains("is-open")) {
                            this.closeAccordion(toggle, content);
                        } else {
                            this.openAccordion(toggle, content);
                        }
                    }
                });

                if (i === 0 && is_first_expanded) {
                    this.openAccordion(toggle, content);
                }
            });
        }
    };

    document.querySelectorAll(".accordions").forEach(acc => Accordion.init(acc));
});
