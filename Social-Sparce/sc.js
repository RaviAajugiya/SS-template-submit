
function clickHandle(e) {
    if (!(e.target.className == 'navbar-nav' || e.target.className == 'nav-link dropdown-toggle')) {
        document.querySelector(".navbar-collapse").classList.remove("show")
    }
    if ((e.target.className == 'modal')) {
        document.querySelector(".modal").hidden = true;
    }
}

window.addEventListener('mouseup', clickHandle)

document.querySelectorAll(".dropdown").forEach((c) => {
    c.addEventListener('click', () => {
        document.querySelector(".dropdown-menu").classList.toggle("show")
    })
})

document.querySelectorAll(".navbar-toggler").forEach(c => {
    c.addEventListener('click', () => {
        document.querySelector(".navbar-collapse").classList.toggle("show")

    })
})

document.querySelectorAll(".share-btn").forEach((c) => {

    c.addEventListener('click', () => {
        document.querySelector(".modal").hidden = false;
    })
})

document.querySelectorAll(".close").forEach((c) => {

    c.addEventListener('click', () => {
        document.querySelector(".modal").hidden = true;
    })
})
