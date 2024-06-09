var img_count = 0;
var img = ['img/banner1.png','img/banner2.png','img/banner3.png']


function doihinh(z){
    
        if (z==1){
            document.getElementById('show').innerHTML = `<img src="img/banner1.png" alt="">`
        } else if (z==2) {
            document.getElementById('show').innerHTML = `<img src="img/banner2.png" alt="">`
        } else {
            document.getElementById('show').innerHTML = `<img src="img/banner3.png" alt="">`
        }
    
};


var i=2;
var y=0;
function left(){
    document.getElementById('slide').src = img[i];
    i--;
    if(i == -1) i=2;
};
function right(){
    document.getElementById('slide').src = img[y];
    y++;
    if(y == 3) y=0;
};

var img_count = 0;
var img = ['img/banner1.png','img/banner2.png','img/banner3.png']
function doihinhauto(){
    
        let x = document.getElementById('slide');
        x.src = img[img_count];
        img_count++;

        if (img_count == img.length){
            img_count = 0;
        }
        
    
}
setInterval(doihinhauto, 2000);