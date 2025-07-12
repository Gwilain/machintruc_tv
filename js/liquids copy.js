window.onload = init;

let nbWaves = 0;
let waves = [];


const colors = ["#fad900", "#EC008C","#00d0ff"]; 

class Vertex {

    constructor(x, y, baseY) {
        this.x = x;
        this.y = y;
        this.baseY = baseY;
        this.vy = 0;
        this.friction = 0.15;
        this.deceleration = 0.95;

    }

    updateY(diffVal) {
        this.vy += (diffVal + this.baseY - this.y);
        this.y += this.vy * this.friction;
        this.vy *= this.deceleration;
    }
}


class Wave {
    constructor(canvas, color, color2, dd) {

        this.canvass = canvas;
        //console.log("new WAVE canvas = "+canvas);
        
        if (!this.canvass) return;
        
        this.ctx = this.canvass.getContext("2d");
        this.color = color;;
        this.color2 = color2;
       
        this.dd = dd;
        this.verNum = 150;
        this.vertexes = [];
        this.diffPt = new Array(this.verNum).fill(0);
        this.autoDiff = 1000;
        this.xx = 150;
        
        this.w = window.innerWidth;
        this.h = 150;
       /*  this.initEvents();
        this.resize();
 */
        /* this.canvass.addEventListener("mousedown", this.onCanvasinteract.bind(this));
        this.canvas.addEventListener("mouseover", this.onCanvasinteract.bind(this)); */
        this.canvass.addEventListener("mouseover", (e) => this.onCanvasInteract(e));
        this.canvass.addEventListener("mousedown", (e) => this.onCanvasInteract(e));
    }

    onCanvasInteract(e) {
       // let mouseX,mouseY;
        /* if (e) {
            let mouseX = e.pageX;
            mouseY = e.pageY;
        }else {
            mouseX = e.x + document.body.scrollLeft;
            mouseY = e.y + document.body.scrollTop;
           
        } */

        let mouseX = e.pageX;

        this.autoDiff = 1000;

           // if(mouseX < w-2){
                //console.log("canvas = "+canvas);
        //let canvasWidth = e.currentTarget.width;
        //this.xx = 1 + Math.floor((this.verNum - 2) * mouseX / e.currentTarget.width);
        this.xx = 1 + Math.floor((this.verNum - 2) * mouseX / this.w);
        this.diffPt[this.xx] = this.autoDiff;
            //}
    } 

    update(){

        this.ctx.clearRect(0, 0, this.w, this.h);
        
        this.autoDiff -= this.autoDiff*0.9;
        this.diffPt[this.xx] = this.autoDiff;
            
        for(let i=this.xx-1;i>0;i--)	
            {
                let d = this.xx-i;
                if(d > this.dd)d=this.dd;
                this.diffPt[i] -= (this.diffPt[i]-this.diffPt[i+1])*(1-0.01*d);
            }


        for(let i=this.xx+1;i<this.verNum;i++)
            {
                let d = i-this.xx;
                if(d > this.dd)d=this.dd;
                this.diffPt[i] -= (this.diffPt[i]-this.diffPt[i-1])*(1-0.01*d);
            }
            
    
        for(let i = 0;i < this.vertexes.length;i++){
            this.vertexes[i].updateY(this.diffPt[i]);
        }

        this.draw();
    
    }

    draw(){
	
        this.ctx.beginPath();
        this.ctx.moveTo(0,window.innerHeight);
        this.ctx.fillStyle=this.color2;

        var ptx = this.vertexes[0].x;
        var pty = this.vertexes[0].y;

        this.ctx.lineTo(ptx, pty);

        for(let i = 1;i < this.vertexes.length;i++){
            this.ctx.lineTo(this.vertexes[i].x+40,this.vertexes[i].y);
        }

        this.ctx.lineTo(this.w,window.innerHeight);
        this.ctx.lineTo(0,window.innerHeight);
        this.ctx.fill();
    
        this.ctx.beginPath();
        this.ctx.moveTo(0,window.innerHeight);
        this.ctx.fillStyle=this.color;
        this.ctx.lineTo(ptx,pty);

        for(let j = 1;j < this.vertexes.length;j++){
            this.ctx.lineTo(this.vertexes[j].x,this.vertexes[j].y);
        }

        this.ctx.lineTo(this.w,window.innerHeight);
        this.ctx.lineTo(0,window.innerHeight);
        this.ctx.fill();
    }

    scroll(){
	
		/* mouseX = this.w-2;
		mouseY = 50; */
		
		this.autoDiff = 100;
		/* this.xx = 1 + Math.floor((this.verNum - 2) *  this.w-2 / this.canvas.width);
	 	this.diffPt[this.xx] = this.autoDiff;
 */
         this.xx = 1 + Math.floor((this.verNum - 2) * (this.w-50) / this.w);
         this.diffPt[this.xx] = this.autoDiff;
    }

   resize(){
	
        //this.canvass.width = w;
       /*  console.log(" window.innerWidth = "+ window.innerWidth);
        console.log(" this.canvass.width = "+ this.canvass.width);
        console.log(" ******************"); */
        let newWidth = window.innerWidth+40
        this.canvass.width = newWidth;
        this.w = newWidth;
        this.canvass.height = this.h;
    
        for(let i = 0;i < this.verNum;i++){
            this.vertexes[i] = new Vertex(this.w / (this.verNum -1) * i , this.h / 2, this.h/2);
        }
    
        for(let j=0;j<this.verNum;j++){
               this.diffPt[j]= 0;
        }
    
    }

}



function init(){
    w = window.innerWidth+40;
    const FPS =30;
	const interval = 1000 / FPS;
    //const 
    //const sections = Array.from(document.querySelectorAll('section'));
    let odd = false;
    let color1 = "black";
    let nbSection = 0;

    let viscosity = 10;

    document.querySelectorAll('section').forEach(section => {
        const canvas = document.createElement('canvas');
        section.parentNode.insertBefore(canvas, section);
        if(odd){
            color1 = "white";
        }else{
            color1 = "black";
        }
        odd = !odd;
        let color2 = colors[nbSection % colors.length ];


        let wave = new Wave(canvas, color1, color2, viscosity);
        waves.push(wave);
        wave.resize();
        viscosity +=20;
        nbSection ++;
    });

    //document.get
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);


    let timer = setInterval( update, interval );
}

function update(){
	
	for (var i = 0; i < waves.length; i++) {

		waves[i].update();
		
	}

} 

function onResize(){
    //_w = document.getElementById('contact').offsetWidth + 40; 
	for (let i = 0; i < waves.length; i++) {
		waves[i].resize();
	}
}

function onScroll(){
    for (let i = 0; i < waves.length; i++) {
		waves[i].scroll();
	}
}