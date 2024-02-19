function todo_progress() {
    const get_todo_stat = document.querySelectorAll(`#tbl_todo [id^="tr"] td:nth-child(5)`);
    const total_todo = get_todo_stat.length - 1;
    console.log(total_todo);

    let todo_selesai = 0;
    let todo_belum_selesai = 0;

    for (const value of get_todo_stat) {
        const values = value.textContent;
        if (values === 'Selesai') {
            todo_selesai += 1;
        } else {
            todo_belum_selesai += 1;
        }
    }

    const presentase_todo_selesai = (todo_selesai / total_todo) * 100;
    const hasil_bulat = presentase_todo_selesai.toFixed(0);
    document.getElementById('todo_progress').style.transition = '.5s';
    document.getElementById('todo_presentase').innerText = `${hasil_bulat}%`;
    document.getElementById('todo_progress').style.width = `${hasil_bulat}%`;

    if (total_todo === 0) {
        document.getElementById('todo_presentase').innerText = `0%`;
        document.getElementById('todo_progress').style.width = `0%`;
    }

    if (hasil_bulat <= 20) {
        document.getElementById('todo_progress').style.animation = 'red_progress 1s linear infinite';
    } else if (hasil_bulat <= 60) {
        document.getElementById('todo_progress').style.animation = 'yellow_progress 1s linear infinite';
    } else {
        document.getElementById('todo_progress').style.animation = 'green_progress 1s linear infinite';
    }

}

todo_progress()