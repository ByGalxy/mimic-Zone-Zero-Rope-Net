window.addEventListener("load", () => {
    if (localStorage.getItem("scrollPosition")) {
        console.log(localStorage.getItem("scrollPosition"));
        window.scrollTo(0, localStorage.getItem("scrollPosition"));
    }
});

window.addEventListener("scroll", () => {
    if (typeof window.pageYOffset !== 'undefined') {
        localStorage.setItem("scrollPosition", window.pageYOffset);
    } else if (typeof document.compatMode !== 'undefined' && document.compatMode !== 'BackCompat') {
        localStorage.setItem("scrollPosition", document.documentElement.scrollTop);
    } else if (typeof document.body !== 'undefined') {
        localStorage.setItem("scrollPosition", document.body.scrollTop);
    }
});