let get_waktu = ''
const show_date = document.getElementById('show_date')

function updateWaktu() {
    const main_date = new Date()
    
    const get_tahun = main_date.getFullYear()
    const get_bulan = main_date.getMonth() + 1
    const get_hari = main_date.getDate(); // Menggunakan getDate() untuk mendapatkan tanggal (bukan getDay() yang hanya memberikan hari dalam seminggu)
    
    const hari_array = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const get_hari_teks = hari_array[main_date.getDay()]; // Mendapatkan nama hari berdasarkan indeks hari dalam seminggu
    
    const get_jam = main_date.getHours()
    const get_menit = main_date.getMinutes()
    const get_detik = main_date.getSeconds()
    
    const tampilkan_waktu = `${get_hari_teks}, ${get_hari}/${get_bulan}/${get_tahun} \n Pukul: ${get_jam}:${get_menit}:${get_detik}`;
    get_waktu = tampilkan_waktu
    console.log(get_waktu)
  }

  function newUpdateWaktu() {
    const main_date = new Date()
    
    const get_tahun = main_date.getFullYear()
    const get_bulan = main_date.getMonth() + 1
    const get_hari = main_date.getDate(); // Menggunakan getDate() untuk mendapatkan tanggal (bukan getDay() yang hanya memberikan hari dalam seminggu)
    
    const hari_array = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    const get_hari_teks = hari_array[main_date.getDay()]; // Mendapatkan nama hari berdasarkan indeks hari dalam seminggu
    
    const get_jam = main_date.getHours()
    const get_menit = main_date.getMinutes()
    const get_detik = main_date.getSeconds()
    
    const tampilkan_waktu = `${get_hari_teks}, ${get_hari}/${get_bulan}/${get_tahun} Pukul: ${get_jam}:${get_menit}:${get_detik}`;
    show_date.innerText = tampilkan_waktu
  }


  // Panggil updateWaktu setiap detik (1000 milidetik)
  setInterval(newUpdateWaktu, 1000);


  