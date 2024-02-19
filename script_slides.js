const new_all_tr = []

function tbl_slide(){
  get_all_tr()
  new_all_tr.length = 0
  available_tr.map(function(value){
    if(value !== 'tr_kosong'){
      new_all_tr.push(value)
    }
  })

  for (const value of new_all_tr){
    document.getElementById(value).setAttribute('class', 'disable')
  }

  
}
