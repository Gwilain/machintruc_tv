let idleTime = 0;
let justIdleOut = false;
let video;
let HP;
let AD;
let HpPicto;
let ArrowD;
let logo;
let miniatures;
let miniwaves = [];
let links;
let activeLink = "#";
let videoVolume=1;
let header;


window.addEventListener("load", init2);

function init2(){
   
    video = document.getElementById("vid");
    logo = document.getElementById("logoContainer");
    HpPicto = document.getElementById("hpContainer");
    ArrowD = document.getElementById("arrowdContainer");
    header = document.querySelector("header");

    HP = bodymovin.loadAnimation({
        container: HpPicto, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'resources/data.json'
    });

    HpPicto.addEventListener('click',function(){
        
    video.muted =! video.muted;
    if(video.muted){
        HP.goToAndStop(18, true);
    }else{
        HP.play();
    } 
    

    });

    
    AD = bodymovin.loadAnimation({
        container: ArrowD, 
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'resources/arrowd.json'
    }); 

    ArrowD.addEventListener("click",function(){
        let firstSection = document.querySelector("main section");
       
        firstSection.scrollIntoView({ behavior: "smooth" });
        
    });


    setMiniatures();
    
    handleIdle();

    setvideoVolume();

    setSocial();

   
} 

function setMiniatures(){
       let miniatures = document.getElementsByClassName("tn");

    for (let i = 0; i < miniatures.length; i++) {
        let animationClass = miniatures[i].classList;
        let animationPath;

        if (animationClass.contains('blue')) {
            animationPath = 'resources/liquidFill_blue.json';
        
        } else if (animationClass.contains('red')) {
            animationPath = 'resources/liquidFill_red.json';
        } else if (animationClass.contains('yellow')) {
            animationPath = 'resources/liquidFill_yellow.json';
        }

        let miniWave = bodymovin.loadAnimation({
            container: miniatures[i], 
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: animationPath 
        });

        function startAnimation() {
            miniWave.setDirection(1);
            miniWave.play();
        }

       
        function reverseAnimation() {
            miniWave.setDirection(-1);
            miniWave.play();
        }

        let parent = miniatures[i].closest('a');
        parent.addEventListener('mouseenter', startAnimation);
        parent.addEventListener('mouseleave', reverseAnimation);

        parent.addEventListener('touchstart', function(e) {
            startAnimation();
            parent.classList.add('touch-active');
        });

        parent.addEventListener('touchend', function(e) {
            reverseAnimation();
            parent.classList.remove('touch-active');
        });

        parent.addEventListener('click', function(e) {
            reverseAnimation();
            parent.dispatchEvent(new MouseEvent("mouseleave"));
            parent.classList.remove('touch-active');
        });

        
        parent.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        });
    }

    setLinks();
     
}

function setLinks() {
    
    const filler = bodymovin.loadAnimation({
        container: document.getElementById("pagefiller"), 
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'resources/liquidfillpage.json' 
    });

    let activeLink = '';
    window.addEventListener("pageshow", function() {
        filler.goToAndStop(1);
    });

    filler.addEventListener("complete", function() {
       
        if (activeLink !== '') {
            window.location.href = activeLink;
        }
    });

 
    const links = document.getElementsByClassName("transiout");

    for (let i = 0; i < links.length; i++) {
        const link = links[i];

        
        link.addEventListener("click", function(e) {
            e.preventDefault(); 

            activeLink = link.href; 

            filler.goToAndStop(1); 
            filler.play(); 
        });
    }
}

function handleIdle(){

  
    var idleInterval = setInterval(timerIncrement, 500); 

    header.onmousemove  = function (e) {
       
        idleTime = 0;
        if(justIdleOut == false){
            transiIn();
        }
    };
        
}


function transiIn(){
    
    header.style.opacity = 1;
    TweenMax.to( logo,0.5,{y:0, ease:Power4.easeOut});
    TweenMax.to( HpPicto,0.5,{x:0, ease:Power4.easeOut});
    TweenMax.to( ArrowD,0.5,{y:0, ease:Power4.easeOut});

    justIdleOut = true;
}

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 4) { // 3s
       
       if(justIdleOut == true){
        TweenMax.to( logo,0.75,{y:-400, ease:Power4.easeIn});
        TweenMax.to( HpPicto,1,{x:300, ease:Power4.easeIn});
        TweenMax.to( ArrowD,1,{y:300, ease:Power4.easeIn});

       }
        
        justIdleOut = false;
    }
}

 function setvideoVolume() {
    

    document.addEventListener('scroll', function () {
        var scrollY = window.scrollY;
        var windowHeight = window.innerHeight;

        var newVolume = 1 - (scrollY / windowHeight);
        newVolume = Math.max(0, Math.min(1, newVolume)); 
        video.volume = newVolume;

        if (scrollY > windowHeight * 0.99) {
            video.pause(); 
        } else {
            video.play(); 
        }
    });
}



function setSocial(){

    let adresses = [ "resources/liquid_IN.json","resources/liquid_vimeo.json","resources/liquid_insta.json"]

    let pictos = document.getElementsByClassName("socialpic");
    for (let i = 0; i < pictos.length; i++) {
        let picContainer = pictos[i];
        let picto = bodymovin.loadAnimation({
            container: picContainer,
            loop: false,
            autoplay: false,
            path: adresses[i]
        });
      
        picContainer.addEventListener('mouseenter',function(){
           
            picto.setDirection(1);
            picto.play();
        }); 
        picContainer.addEventListener('mouseleave',function(){
            picto.setDirection(-1);
            picto.play();
        }); 

    }

 }




