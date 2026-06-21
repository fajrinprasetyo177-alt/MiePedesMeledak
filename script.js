console.log('Mie Pedes Meledak');

const tombolKategori = document.querySelectorAll(".kategori-btn");
const menuCards = document.querySelectorAll(".menu-card");

tombolKategori.forEach(btn => {
    btn.addEventListener("click", () => {

        // Mengubah tombol yang aktif
        tombolKategori.forEach(item => {
            item.classList.remove("active");
        });

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        menuCards.forEach(card => {
            if (filter === "all" || card.dataset.kategori === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});