// Tahun footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function untuk mengganti tema
const themeButton = document.getElementById("themeButton");

function applyTheme() {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        themeButton.textContent = "☀";
    }
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "☀";
    } else {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☾";
    }
});

applyTheme();

// Function filter project
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(function (button) {
    button.addEventListener("click", function () {
        filters.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");
        const selected = button.dataset.filter;

        projects.forEach(function (project) {
            project.classList.toggle(
                "hidden",
                selected !== "all" && project.dataset.category !== selected
            );
        });
    });
});

// Function form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const message = document.getElementById("formMessage");

    if (name.trim() === "") {
        message.textContent = "Nama belum diisi.";
        return;
    }

    message.textContent = "Terima kasih, " + name + "! Pesan berhasil diproses (demo).";
    this.reset();
});
