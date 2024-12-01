// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true, // Mengaktifkan looping slide
    initialSlide: 1, // Setel slide tengah sebagai slide awal (dimulai dari indeks 0)
    spaceBetween: 20, // Jarak antar slide
    slidesPerView: 1, // Menampilkan 3 slide sekaligus
    centeredSlides: true, // Pastikan slide tengah fokus
    autoplay: {
      delay: 3000, // 3 detik
      disableOnInteraction: false, // Swipe manual tidak menghentikan autoplay
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Pagination bisa diklik
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  
  // BAGIAN JADWAL
  const jadwal = [
    {
      hari: "Minggu",
      kegiatan: [
        { deskripsi: "Matematika", waktu: "08:00 - 10:00" },
        { deskripsi: "Agama", waktu: "10:00 - 12:00" }
      ]
    },
    {
      hari: "Senin",
      kegiatan: []
    },
    {
      hari: "Selasa",
      kegiatan: [
        { deskripsi: "Penjas", waktu: "08:00 - 12:00" },
        { deskripsi: "PKn", waktu: "12:00 - 14:00" }
      ]
    },
    {
      hari: "Rabu",
      kegiatan: []
    },
    {
      hari: "Kamis",
      kegiatan: []
    },
    {
      hari: "Jumat",
      kegiatan: []
    },
    {
      hari: "Sabtu",
      kegiatan: []
    }
  ];
  function tampilkanJadwal() {
    const hariIni = new Date().getDay(); // Mendapatkan hari saat ini (0-6)
    const jadwalHariIni = jadwal[hariIni]; // Ambil objek jadwal berdasarkan hari
  
    // Isi elemen HTML dengan nama hari
    document.getElementById("nama-hari").textContent = jadwalHariIni.hari;
  
    const deskripsiElement = document.getElementById("deskripsi-jadwal");
    deskripsiElement.innerHTML = ""; // Bersihkan konten sebelumnya
  
    if (jadwalHariIni.kegiatan.length > 0) {
      // Jika ada kegiatan, tampilkan semua jadwal
      jadwalHariIni.kegiatan.forEach((kegiatan) => {
        const p = document.createElement("p");
        p.textContent = `${kegiatan.deskripsi} ${kegiatan.waktu}`;
        deskripsiElement.appendChild(p);
      });
    } else {
      // Jika tidak ada kegiatan, tampilkan pesan
      const p = document.createElement("p");
      p.textContent = "Tidak ada jadwal hari ini";
      deskripsiElement.appendChild(p);
    }
  }
  
  // Jalankan fungsi saat halaman dimuat
  window.onload = tampilkanJadwal;
  
  
  
  
  