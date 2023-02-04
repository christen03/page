var img= new Image();
canvas = document.getElementById("christen2-resized");
c=canvas.getContext("2d");

img.onload = function(){
    let width = Math.floor(img.width*0.5);
    let height= Math.floor(img.height*0.5);
    canvas.width=width;
    canvas.height=height;
    c.drawImage(img, 0, 0, width, height);
}

img.src="images/christenxie2.jpg";
