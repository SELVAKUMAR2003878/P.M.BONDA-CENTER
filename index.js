let sections = document.querySelectorAll('section,.link');

let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a [href*=" + id + "]").classList.add
                    ('active');
            });
        };

    });

};



document.getElementById("barbtn").onclick = function () {
    let topbar = document.getElementById("topbar");
    topbar.style.display = "inline";
    let btn = document.getElementById("exit");
    btn.innerHTML = "<button id='exit'>Exit</button>";

    topbar.append(btn);
    btn.onclick = function () {
        topbar.style.display = "none";
    }

}


