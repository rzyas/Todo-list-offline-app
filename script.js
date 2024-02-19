const arr = []
const arr_ori = []
const available_tr = []
let total_table = 0
const tbl_todo = document.getElementById('tbl_todo')
const arr_reset = document.getElementById('arr_reset')
const rapikan_nomor = document.getElementById('rapikan_nomor')
const table_cetak = document.getElementById('table_cetak')
const tr_kosong = document.getElementById('tr_kosong')


//! Reset Semua tr
function del_all_tr(){
    available_tr.map(function (selected_tr){
        if(selected_tr !== 'tr_kosong'){
            document.getElementById(selected_tr).remove()
            arr.length = 0
        }else{
            document.getElementById(selected_tr).removeAttribute('class')
        }
    })
}
arr_reset.addEventListener('click', function(){
    
    const user_confirm = window.confirm('Tekan YA untuk reset semua data')
    if(user_confirm){
        // Reset arr
        // arr.length = 0
        // tbl_todo.innerHTML = ''
        // alert('Reset Berhasil')
        getTotalReset()
        get_all_tr()
        del_all_tr()
    }
    else{
        alert('Reset Dibatalkan')
    }
    todo_progress()
})

//! Mendapatkan semua tr (table) yang tersedia
//! Unutk mencari semua id yang tersdia dialam tr:
//! 1 panggil function
//! 2 data akan tersimpan kedalam array: available_tr
function get_all_tr(){
    available_tr.length = 0
    const all_tr = document.querySelectorAll('#tbl_todo tr');
    for (let i=0; i < all_tr.length; i++){
     const tr_id = all_tr[i].getAttribute('id')
     if(tr_id){
         available_tr.push(tr_id)
     }
    }
    console.log(available_tr);
}



// Reset Nomor array
rapikan_nomor.addEventListener('click', function(){

   // Mendapatkan semua ID dari tr yang ada dan menyimpannya kedalam available_tr
   get_all_tr()

   // Reset semua nomor menjadi berurutan
   for(i=0; i < available_tr.length; i++){
    document.getElementById(available_tr[i]).getElementsByTagName('td')[0].innerText = i
   }

   // Ubah panjang arr menjadi panjang available_tr / Reset nomor baru yang akan di input
//    if(arr.length > available_tr.length){
//     arr.length=available_tr.length += 1
//    }
})

//! Get form todo untuk mendapatkan value
document.getElementById('form_todo').addEventListener('submit', function (event) {  
    event.preventDefault()
    // get value using query
    const todo_desc = document.querySelector('input[name=todo_inp]').value
    arr.push(todo_desc)
    arr_ori.push('')

    // Buat elemen baru
    const elem_tr = document.createElement('tr')
    const elem_no = document.createElement('td')
    const elem_desc = document.createElement('td')
    const elem_stat = document.createElement('td')
    elem_stat.style.backgroundColor = '#e74c3c'
    elem_stat.style.color = 'white'
    const elem_btn_del = document.createElement('button')
    const elem_btn_clear = document.createElement('button')
    const elem_rename = document.createElement('button')
    const div_btn = document.createElement('div')
    const elem_tanggal = document.createElement('td')
    const elem_tanggal_selesai = document.createElement('td')

    // Set Element
    elem_tanggal_selesai.innerText = 'Tuggas belum terselesaikan'
    updateWaktu()
    elem_tanggal.innerText = get_waktu
    elem_tr.setAttribute('id', `tr${arr.length}`)
    //! GET TR ID
    const del_tr_id = elem_tr.getAttribute('id')
    div_btn.setAttribute('id', 'div_btn')
    elem_no.innerText = arr.length
    elem_desc.innerText = todo_desc
    elem_stat.innerText = 'Belum Terselsaikan'

    elem_btn_del.innerText = 'Hapus'
    const id_btn = `btn_remove_${arr.length}`
    elem_btn_del.setAttribute('id', id_btn)
    // Hapus 1 table
    elem_btn_del.addEventListener('click', function () {
        // Handle button click event here
        const get_no = document.querySelector(`#${del_tr_id} td:first-child`).textContent;
        let get_keterangan = document.querySelector(`#${del_tr_id} td:nth-child(2)`).textContent;
        if(get_keterangan === ''){
            get_keterangan = '<INPUT KOSONG>'
        }
        const get_tanggal_dibuat = document.querySelector(`#${del_tr_id} td:nth-child(3)`).textContent;
        const get_tanggal_selesai = document.querySelector(`#${del_tr_id} td:nth-child(4)`).textContent;
        const get_stat = document.querySelector(`#${del_tr_id} td:nth-child(5)`).textContent;
        const table_delete_confirm = window.confirm(`Ingin menghapus table ini? \n\nNomor: ${get_no} \nKeterangan: ${get_keterangan}\nStatus: ${get_stat}\nTanggal dibuat: ${get_tanggal_dibuat}\nTanggal selesai: ${get_tanggal_selesai}`)
        
        if(table_delete_confirm){
            const trToRemove = document.getElementById(del_tr_id)
            trToRemove.remove() 
            total_table -= 1
            total_tbl_terhapus()
            
            if (tr_kosong && tr_kosong.parentElement.rows.length === 1) {
                // Hapus atribut class yang bernama disable
                tr_kosong.classList.remove('disable');
            }
        }
        todo_progress()
        
    })

    elem_rename.innerText = 'Rename'
    elem_rename.setAttribute('id', `btn_rename_${arr_ori.length}`)
    elem_rename.addEventListener('click', function(){
        const rename_confirm = window.confirm(`Ingin mengganti keterangan: "${todo_desc}" ?`)
        if(rename_confirm){
            const inp_rename = prompt(`PERINGATAN: INPUT TIDAK BOLEH KOSONG \nRename: ${todo_desc}`)
            return document.getElementById(del_tr_id).getElementsByTagName('td')[1].innerText = inp_rename
        }
    })

    elem_btn_clear.setAttribute('id', `todo_clear_${arr_ori.length}`)
    elem_btn_clear.innerText = 'Selesai'
    elem_btn_clear.addEventListener('click', function(){
    // Jika status belum selesai, set status menjadi "Selesai" dan tombol menjadi "Belum Selesai"
    if (elem_stat.innerText !== 'Selesai') {
        elem_stat.innerText = 'Selesai'
        elem_stat.style.backgroundColor = '#0cad00'
        elem_stat.style.transition = '.4s'
        elem_btn_clear.innerText = 'Belum Selesai'
        todo_progress()
        updateWaktu()
        elem_tanggal_selesai.innerText = get_waktu
    } else { // Jika status selesai, set status menjadi "Belum terselesaikan" dan tombol menjadi "Selesai"
        elem_stat.innerText = 'Belum terselesaikan'
        elem_btn_clear.innerText = 'Selesai'
        elem_stat.style.backgroundColor = '#e74c3c'
        elem_stat.style.transition = '.2s'
        todo_progress()
        elem_tanggal_selesai.innerText = 'Tugas belum terselesaikan'
    }
})
    // Append
    elem_tr.appendChild(elem_no)
    elem_tr.appendChild(elem_desc)
    elem_tr.appendChild(elem_tanggal)
    elem_tr.appendChild(elem_tanggal_selesai)
    elem_tr.appendChild(elem_stat)
    div_btn.appendChild(elem_btn_clear)
    div_btn.appendChild(elem_rename)
    div_btn.appendChild(elem_btn_del)
    elem_tr.appendChild(div_btn)


    // Main Append to HTML
    tbl_todo.appendChild(elem_tr)

    //* ---TABLE SLIDE---
    const slide_tr = document.createElement('div')
    slide_tr.setAttribute('id', 'slide_tr')
    console.log(slide_tr);

    get_all_tr()

    //* ---END TABLE SLIDE---

    // Validasi form kosong
    if(todo_desc === ''){
        alert('Data yang anda masukan kosong')
        const trToRemove = document.getElementById(del_tr_id)
        trToRemove.remove()
        arr.pop()
        getTotalInpKosong()
    }
    else{
        total_table+=1
    }
    //! Reset Form
    document.getElementById('form_todo').reset()
    todo_progress()
    tr_kosong.setAttribute('class', 'disable')
    
})

// Print table
table_cetak.addEventListener('click', function(){
    window.print(tbl_todo)
})


//! Pecnarian
const form_todo = document.getElementById('form_todo')
function enable_tr(){
    for(z=0; z<available_tr.length; z++){
        document.getElementById(`${available_tr[z]}`).removeAttribute('class')
    }
}

const todo_cari_reset = document.getElementById('todo_cari_reset')
todo_cari_reset.innerText = 'Reset Pencarian'

let timeoutId

document.getElementById('todo_cari').addEventListener('keyup', function(event) {
    clearTimeout(timeoutId); // Menghapus timeout sebelumnya jika ada
    // Menunda eksekusi pencarian selama 300ms setelah pengguna selesai mengetik
    timeoutId = setTimeout(function() {
        //! Get value pencarian
        const cari_todo = event.target.value
        get_all_tr(); // panggil semua id tr yang tersedia dan di simpan ke array available_tr
        available_tr.shift()

        // Disable semua tr tersedia
        for(x=0; x<available_tr.length; x++){
            document.getElementById(`${available_tr[x]}`).setAttribute('class','disable') 
        }

        
        //! PENCARIAN BETA
        for (let i = 0; i < available_tr.length; i++) {
            const get_values = document.querySelectorAll(`#${available_tr[i]} td:nth-child(2)`);
        
            get_values.forEach(element => {
                // Mengubah kedua teks menjadi huruf kecil sebelum membandingkannya
                const textLowerCase = element.innerText.toLowerCase();
                const cariTodoLowerCase = cari_todo.toLowerCase();
        
                // Menggunakan includes() untuk memeriksa apakah teks yang dimasukkan mengandung teks dalam elemen
                if (textLowerCase.includes(cariTodoLowerCase)) {
                    document.getElementById(available_tr[i]).removeAttribute('class');
                }
            });
        }

        //! Munculkan kembali semua tr jika input kosong
        if(cari_todo === ''){
            enable_tr()
        }

    }, 700)
})

//! Reset pencarian todo
document.getElementById('todo_cari_reset').addEventListener('click', function(){
    document.getElementById('todo_cari').value = ''
    enable_tr()
})