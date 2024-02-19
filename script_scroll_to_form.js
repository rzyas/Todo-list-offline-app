const formElement = document.getElementById('form_todo')
const formTodoCari = document.getElementById('todo_cari')

// Menambahkan event listener untuk input pada formulir
document.getElementById('todo_inp').addEventListener('input', function() {
    scrollToMiddle();
});
document.getElementById('todo_cari').addEventListener('input', function(){
    scrollToMiddle();
})

// Fungsi untuk menggulir halaman ke tengah
function scrollToMiddle() {
    const windowHeight = window.innerHeight;
    const formPosition = formElement.offsetTop;
    const formHeight = formElement.offsetHeight;

    // Menggulir halaman ke tengah formulir
    window.scrollTo({
        top: formPosition - (windowHeight / 2 - formHeight / 2),
        behavior: 'smooth'
    });
}