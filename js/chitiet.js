function hinh_ct(z){

    if (z==1){
        document.getElementById('show-chitiet').src = `img/sp1.jpg`
    } else if (z==2){
        document.getElementById('show-chitiet').src = `img/sp2.jpg`
    } else if (z==3){
        document.getElementById('show-chitiet').src = `img/sp3.jpg`
    } else if (z==4){
        document.getElementById('show-chitiet').src = `img/sp5.jpg`
    }

}
function hien_ct(){
    document.getElementById('chitiet').style.display = 'block';
}
function close_ct(){
    document.getElementById('chitiet').style.display = 'none';
}
