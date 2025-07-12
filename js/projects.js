window.addEventListener("load", init3);

function init3(){
    var project = document.getElementById("project");
    
    TweenMax.to( project,0.5,{opacity:1, ease:Power4.easeOut});
}



function goBackOrRedirect() {
   
    console.log('click button')

    if (document.referrer) {
        var previousDomain = (new URL(document.referrer)).hostname;
        var currentDomain = window.location.hostname;
        
        if (previousDomain === currentDomain) {
            history.back();
        } else {
            window.location.href = 'https://www.machintruc.tv';
        }
    } else {
        window.location.href = 'https://www.machintruc.tv';
    }
}