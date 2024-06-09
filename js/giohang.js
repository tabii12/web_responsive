function hien_gh(){
    document.getElementById('giohang').style.display = 'block';
}

function close_gh(){
    document.getElementById('giohang').style.display = 'none';
}

var sp_Array=[];

function retrieveFromLocalStorage() {
    var storedArray = localStorage.getItem('sp_Array');
    if (storedArray) {
        sp_Array = JSON.parse(storedArray);
        updateCart();
    }
}

function saveToLocalStorage() {
    localStorage.setItem('sp_Array', JSON.stringify(sp_Array));
}

window.onload = retrieveFromLocalStorage;

function updateCart() {
    let tongthanhtoan = 0;
    let sp_show = '';
    
    for(let i=0; i<sp_Array.length; i++) {
        tongthanhtoan += sp_Array[i].tong;
        sp_show += `
            <tr id="spdm_${i}">
                <th>${i+1}</th>
                <th><img src="${sp_Array[i].img}"></th>
                <th>${sp_Array[i].name}</th>
                <th>${sp_Array[i].price}</th>
                <th>${sp_Array[i].sl}</th>
                <th>${sp_Array[i].tong}</th>
                <th><button onclick="xoa_sp(${i})">Xóa</button></th>
            </tr>`;
    };

    sp_show += `
        <tr>
            <th colspan="5">Tổng thanh toán</th>
            <th colspan="2">${tongthanhtoan}</th>
         </tr>`;
   
    document.getElementById('sp_show').innerHTML = sp_show;
}

function add_gh(n) {
    let get = n.parentElement;
    let sp_img = get.children[0];
    let sp_img_link = sp_img.getAttribute('src');
    let sp_name = get.children[1].innerText;
    let sp_price = get.children[2].getAttribute('dongia');
    let sp_sl = parseInt(get.children[3].value);
    let sp_tong = sp_price * sp_sl;

    console.log(get);
    let sp_th = {img: sp_img_link, name: sp_name, price: sp_price, sl: sp_sl, tong: sp_tong}

    let flag = 0;
    if(sp_sl == 0) {
        flag = 1;
        alert('Sản phẩm phải lớn hơn hoặc bằng 1!!')
    } else {
        alert('Mua thành công!!');
    }

    for(let i=0; i<sp_Array.length; i++) {
        if(sp_name === sp_Array[i].name) {
            sp_Array[i].sl += sp_sl;
            flag = 1;
            break;
        }
    }

    if(flag == 0) {
        sp_Array.push(sp_th);
    }

    updateCart();
    saveToLocalStorage();
}

function xoa_sp(x) {
    sp_Array.splice(x, 1);
    updateCart();
    saveToLocalStorage();
}