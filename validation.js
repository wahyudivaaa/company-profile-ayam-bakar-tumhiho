// Variabel global untuk menyimpan data produk
let produkDipilih = '';
let hargaDipilih = '';

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector("#submit");
    const submitHelp = document.getElementById('submitHelp');

    // Mendapatkan elemen form
    const form = document.getElementById('pesanForm');
    const nameInput = document.getElementById('name');
    const produkInput = document.getElementById('produk');
    const hargaInput = document.getElementById('harga');
    const jumlahInput = document.getElementById('jumlah');
    const alamatInput = document.getElementById('alamat');
    const catatanInput = document.getElementById('catatan');

    // Jika user langsung masuk ke halaman kontak tanpa memilih produk
    if (!produkDipilih) {
        if (produkInput) {
            produkInput.removeAttribute('readonly');
            produkInput.setAttribute('placeholder', 'Masukkan nama produk yang ingin dipesan');
        }
    }

    // Efek scroll pada navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (this.scrollY > 50) {
                navbar.classList.add('bg-white');
                navbar.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
            } else {
                navbar.classList.remove('bg-white');
                navbar.style.boxShadow = 'none';
            }
        }
    });

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Ambil nilai dari form
            const nama = nameInput.value;
            const produk = produkInput.value;
            const jumlah = jumlahInput.value;
            const alamat = alamatInput.value;
            const catatan = catatanInput.value;

            // Buat pesan untuk WhatsApp
            let pesan = `*PESANAN AYAM BAKAR TUMHIHO*%0A%0A`;
            pesan += `Nama: ${nama}%0A%0A`;
            pesan += `*Detail Pesanan*%0A`;
            pesan += `Produk: ${produk}%0A`;
            pesan += `Jumlah: ${jumlah}%0A%0A`;
            pesan += `*Alamat Pengiriman*%0A${alamat}%0A%0A`;

            if (catatan) {
                pesan += `*Catatan*%0A${catatan}%0A%0A`;
            }

            pesan += `Terima kasih telah memesan di Ayam Bakar Tumhiho!`;

            // Redirect ke WhatsApp
            window.open(`https://wa.me/6281246188940?text=${pesan}`, '_blank');

            // Reset form
            form.reset();
            submitHelp.textContent = 'Pesanan berhasil dikirim! Anda akan diarahkan ke WhatsApp.';
            submitHelp.classList.remove('text-danger');
            submitHelp.classList.add('text-success');
        });
    }
})

// Fungsi untuk menyimpan produk yang dipilih
function pilihProduk(nama) {
    produkDipilih = nama;

    // Set data ke form
    const produkInput = document.getElementById('produk');

    if (produkInput) {
        produkInput.value = nama;

        // Scroll ke section kontak
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}