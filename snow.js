
window.onload = function(){

    //get the canvas and context and store in var's
    var canvas = document.getElementById("sky");
    var ctx = canvas.getContext("2d"); //canvas context

    //set canvas dimentions to window height and width
    var W = window.innerWidth;
    var H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
    //generate the snowflakes and apply atrributes
    var nf = 100; //number of flakes
    var flakes =[];

    //loop through the empty flakes and apply atrributes
    for(var i = 0; i < nf; i++){

        flakes.push({

            x: Math.random()*W,
            y: Math.random()*H,
            r: Math.random()*5+2, //min of 2px and max of 7px
            d: Math.random() + 1 //density of the flakes
        })
    }

    //draw flakes onto canvas
    function drawFlakes(){

        ctx.globalCompositeOperation='destination-over';

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = "white";
        ctx.beginPath();

        for(var i = 0; i < nf; i ++)
        {
            var f = flakes[i];
            ctx.moveTo(f.x, f.y);
            ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
        }

        ctx.fill();
        moveFlakes();
    }

    //animate the flakes
    var angle = 0;

    function moveFlakes() {
        angle += 0.01;
        for(var i = 0; 1 < nf; i++)
        {
            //store current flake
            var f = flakes[i];

            //update X and Y coordinates of each snowflake
            f.y += Math.pow(f.d, 2) + 1;
            f.x += Math.sin(angle) * 2;

            //if the snowflake reaches the bottom, send new one to top
            if(f.y > H){
                flakes[i] = {x: Math.random()*W, y: 0, r: f.r, d: f.d};
            }
        }

    }

    setInterval(drawFlakes, 25);
}













