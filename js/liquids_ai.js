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
    constructor(canvasId, color, color2, offset, dd) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext("2d");
        this.color = "#ff0000";
        this.color2 = color2;
        this.offset = offset;
        this.dd = dd;
        this.verNum = 150;
        this.vertexes = [];
        this.diffPt = new Array(this.verNum).fill(0);
        this.autoDiff = 1000;
        this.xx = 150;
        
        this.initEvents();
        this.resize();
    }

    initEvents() {
        this.canvas.addEventListener("mousedown", (e) => this.handleMouse(e));
        this.canvas.addEventListener("mouseover", (e) => this.handleMouse(e));
    }

    handleMouse(e) {
        if (isScrolling) return;
        const mouseX = e.pageX || e.clientX + document.body.scrollLeft;
        if (mouseX < _w - 2) {
            this.xx = 1 + Math.floor((this.verNum - 2) * mouseX / this.canvas.width);
            this.diffPt[this.xx] = this.autoDiff;
        }
    }

    resize() {
        this.canvas.width = _w;
        this.canvas.height = _h;
        this.vertexes = Array.from({ length: this.verNum }, (_, i) =>
            new Vertex((_w / (this.verNum - 1)) * i, _h / 2, _h / 2)
        );
    }

    update() {
        this.ctx.clearRect(0, 0, _w, _h);
        this.autoDiff *= 0.1;
        this.diffPt[this.xx] = this.autoDiff;
        
        for (let i = this.xx - 1; i > 0; i--) {
            let d = Math.min(this.dd, this.xx - i);
            this.diffPt[i] -= (this.diffPt[i] - this.diffPt[i + 1]) * (1 - 0.01 * d);
        }
        
        for (let i = this.xx + 1; i < this.verNum; i++) {
            let d = Math.min(this.dd, i - this.xx);
            this.diffPt[i] -= (this.diffPt[i] - this.diffPt[i - 1]) * (1 - 0.01 * d);
        }
        
        this.vertexes.forEach((vertex, i) => vertex.updateY(this.diffPt[i]));
        this.draw();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(0, window.innerHeight);
        this.ctx.fillStyle = this.color2;
        this.vertexes.forEach(v => this.ctx.lineTo(v.x + 40, v.y));
        this.ctx.lineTo(_w, window.innerHeight);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(0, window.innerHeight);
        this.ctx.fillStyle = this.color;
        this.vertexes.forEach(v => this.ctx.lineTo(v.x, v.y));
        this.ctx.lineTo(_w, window.innerHeight);
        this.ctx.fill();
    }
}

class WaveManager {
    constructor() {
        this.waves = [];
        this.init();
    }

    init() {
        const sections = document.querySelectorAll("main section");
        sections.forEach((section, index) => {
            const color = window.getComputedStyle(section).backgroundColor;
            const color2 = section.getAttribute("color") || "#ffffff";
            
            const canvas = document.createElement("canvas");
            canvas.id = `waveCanvas${index}`;
            
            section.parentNode.insertBefore(canvas, section);
            
            this.waves.push(new Wave(canvas.id, color, color2, 100, 20));
        });
        
        window.addEventListener("scroll", () => this.handleScroll());
        window.addEventListener("resize", () => this.resize());
        
        this.resize();
        this.startLoop();
    }

    resize() {
        _w = document.body.clientWidth + 40;
        this.waves.forEach(wave => wave.resize());
    }

    handleScroll() {
        isScrolling = true;
        clearTimeout(delay);
        delay = setTimeout(() => (isScrolling = false), 500);
        //this.waves.forEach(wave => wave.scroll());
    }

    startLoop() {
        setInterval(() => this.update(), 1000 / 30);
    }

    update() {
        this.waves.forEach(wave => wave.update());
    }
}

let _w = window.innerWidth + 40;
let _h = 150;
let isScrolling = false;
let delay;

window.addEventListener("load", () => new WaveManager());