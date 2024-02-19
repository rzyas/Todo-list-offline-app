const get_id_tbl_hapus = document.getElementById('total_tbl_terhapus')
const total_reset_semua_tbl = document.getElementById('total_reset_semua_tbl')
const btn_info_detail = document.getElementById('btn_info_detail')
const text_kosong = document.getElementById('text_kosong')

let total_tbl_hapus = 0
let total_reset_semua = 0
let total_inp_kosong = 0

function total_tbl_terhapus(){
    total_tbl_hapus += 1
    get_id_tbl_hapus.innerText = total_tbl_hapus
}

function getTotalReset(){
    total_reset_semua +=1
    total_reset_semua_tbl.innerText = total_reset_semua
}

function getTotalInpKosong(){
    total_inp_kosong += 1
    text_kosong.innerText = total_inp_kosong
}

btn_info_detail.addEventListener('click', function(){
    total_tbl_hapus = 0
    total_reset_semua = 0
    total_inp_kosong = 0
    get_id_tbl_hapus.innerText = total_tbl_hapus
    total_reset_semua_tbl.innerText = total_reset_semua
    text_kosong.innerText = total_inp_kosong
})

