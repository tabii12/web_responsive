function dangky(){
    let sdt = parseInt(document.getElementById('sdt').value);
    let mk = document.getElementById('mk').value;
    let xnmk = document.getElementById('xnmk').value;

    let x = 0
    if (!isNaN(sdt)){
        x++;
    } else {
        alert('Số điện thoại bị sai!')
    }

    if (mk==xnmk){
        x++;
    } else {
        alert('Mật khẩu chưa trùng nhau!')
    }

    if(mk === ''){
        alert('Chưa nhập mật khẩu!')
        x--;
    }

    if (x==2){
        alert('Bạn đã đăng ký thành công!');
        document.getElementById('dk').style.display = 'none';
    }
};

function hien(){
    document.getElementById('dk').style.display = 'block';
}
function _close(){
    document.getElementById('dk').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    const sdtInput = document.getElementById('sdt');
    const mkInput = document.getElementById('mk');
    const xnmkInput = document.getElementById('xnmk');

    function validateSdt() {
        const sdt = sdtInput.value.trim();
        if (sdt === '') {
            document.getElementById('sdt-error').innerText = 'Vui lòng nhập số điện thoại của bạn.';
            document.getElementById('sdt-error').style.display = 'block';
        } else {
            document.getElementById('sdt-error').innerText = '';
            document.getElementById('sdt-error').style.display = 'none';
        }
    }

    function validateMk() {
        const mk = mkInput.value.trim();
        if (mk === '') {
            document.getElementById('mk-error').innerText = 'Vui lòng nhập mật khẩu.';
            document.getElementById('mk-error').style.display = 'block';
        } else {
            document.getElementById('mk-error').innerText = '';
            document.getElementById('mk-error').style.display = 'none';
        }
    }

    function validateXnmk() {
        const mk = mkInput.value.trim();
        const xnmk = xnmkInput.value.trim();
        if (xnmk === '') {
            document.getElementById('xnmk-error').innerText = 'Vui lòng xác nhận mật khẩu.';
            document.getElementById('xnmk-error').style.display = 'block';
        } else if (xnmk !== mk) {
            document.getElementById('xnmk-error').innerText = 'Mật khẩu xác nhận không khớp.';
            document.getElementById('xnmk-error').style.display = 'block';
        } else {
            document.getElementById('xnmk-error').innerText = '';
            document.getElementById('xnmk-error').style.display = 'none';
        }
    }

    sdtInput.addEventListener('blur', validateSdt);
    mkInput.addEventListener('blur', validateMk);
    xnmkInput.addEventListener('blur', validateXnmk);
});