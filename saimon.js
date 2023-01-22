
// (async function main () {
//     await new Promise(r => setTimeout(r, 2000));
//     })();
// $(document).keydown(function(event){
// if (event.key=="h") {alert("h")}
// (async function main () {


//     await sleep(2000)
//     })();
// })



let pattern = [];
const buttons = ["fst", "snd", "trd", "fth", "pth", "sth"]
// nextseq 

let delaya = []
let i=0; 

function nextSeq () {if (pattern.length>8) {setTimeout(() => {
    makeHC() 
}, 1500); } else {
rndNum = Math.floor(Math.random()*6);
let chosenButton = buttons[rndNum];
pattern.push(chosenButton); 

delaya.push(1500*pattern.length); 
delayb.push(300*pattern.length);

userPattern.length=[0];

$("h1").html('<img src="images/torch.gif" alt="" class="imag3" id="ir1"><img src="images/torch.gif" alt="" class="imgshad3" id="sr1">Level '+pattern.length+'<img src="images/torch.gif" alt="" class="imgshad4" id="sr2"><img src="images/torch.gif" alt="" class="imag4" id="ir2">')

for (i=0; i<pattern.length; i++) {

switch (pattern[i]) {
    case "fst": setTimeout(() => {
$("img.bti1").attr("src", "images/skullscream.png").addClass("smimg"); delay=1200;trigger="img.bti1";reverse(trigger)
d1.play(); 
    }, delaya[pattern.map((e, i) => e === "fst" ? i : 'fst').filter(String)[i]]);
   
    break;
    case "snd": setTimeout(() => {
$("img.bti2").attr("src", "images/pentagram.png"); $("img.bti2").addClass("smimg");  delay=500;trigger="img.bti2";reverse(trigger)
d2.play()  
    }, delaya[pattern.map((e, i) => e === "snd" ? i : 'snd').filter(String)[i]]);

    break;
    case "trd": setTimeout(() => {
$("img.bti3").attr("src", "images/bloodscreamskull.png").addClass("smimg"); delay=1700;trigger="img.bti3";reverse(trigger)
d3.play()  
    }, delaya[pattern.map((e, i) => e === "trd" ? i : 'trd').filter(String)[i]]);
        
    break;
    case "fth": setTimeout(() => {
$("img.bti4").attr("src", "images/antigoat.png").addClass("smimg"); delay=1300;trigger="img.bti4";reverse(trigger)
d4.play()  
    }, delaya[pattern.map((e, i) => e === "fth" ? i : 'fth').filter(String)[i]]);

    break;
    case "pth": setTimeout(() => {
$("img.bti5").attr("src", "images/screamingskull.png").addClass("smimg"); delay=1400;trigger="img.bti5";reverse(trigger)
d5.play()
    }, delaya[pattern.map((e, i) => e === "pth" ? i : 'pth').filter(String)[i]]);

    break;
    case "sth": setTimeout(() => {
$("img.bti6").attr("src", "images/devilskullshriek.png").addClass("smimg"); delay=1500;trigger="img.bti6";reverse(trigger)
d6.play()
    }, delaya[pattern.map((e, i) => e === "sth" ? i : 'sth').filter(String)[i]]);

    break;
default:
}
} 

}}
// delay array



// userpt

let userPattern = []
$(".btn").click(function(){
if ($(this).hasClass("fst")==true){userButton="fst"}
if ($(this).hasClass("snd")==true){userButton="snd"}
if ($(this).hasClass("trd")==true){userButton="trd"}
if ($(this).hasClass("fth")==true){userButton="fth"}
if ($(this).hasClass("pth")==true){userButton="pth"}
if ($(this).hasClass("sth")==true){userButton="sth"}

userPattern.push(userButton)

})




// demon sounds
const wrng= new Audio ("sound/WRONG.mp3")

const d1= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (2).mp3")
const d2= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (4).mp3")
const d3= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (6).mp3")
const d4= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (3).mp3")
const d5= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (5).mp3")
const d6= new Audio ("demonnoise/At Dooms Gate (mp3cut.net) (7).mp3")


// userclickrespond
$(".btn").click(function () {
    // HC trigger
    if (pattern.length>9) { if (pattern[userPattern.length-1]==userPattern[userPattern.length-1]){
        switch (this) {
            case $("div.fst")[0]:
            $("img.bti1").attr("src", "images/darkdeath.png"); $("div.fst").css("background-color", "#000");trig="img.bti1"; trigt="div.fst";HCiRev (trig, trigt);
           
            break;
            case $("div.snd")[0]:
            $("img.bti2").attr("src", "images/darkdeath.png"); $("div.snd").css("background-color", "#000");trig="img.bti2"; trigt="div.snd";HCiRev (trig, trigt); 
            
            break;
            case $("div.trd")[0]:
            $("img.bti3").attr("src", "images/darkdeath.png"); $("div.trd").css("background-color", "#000");trig="img.bti3"; trigt="div.trd";HCiRev (trig, trigt);
            
            break;
            case $("div.fth")[0]:
            $("img.bti4").attr("src", "images/darkdeath.png"); $("div.fth").css("background-color", "#000");trig="img.bti4"; trigt="div.fth";HCiRev (trig, trigt);
            
            break;
            case $("div.pth")[0]:
            $("img.bti5").attr("src", "images/darkdeath.png"); $("div.pth").css("background-color", "#000");trig="img.bti5"; trigt="div.pth";HCiRev (trig, trigt);
            
            break;
            case $("div.sth")[0]:
            $("img.bti6").attr("src", "images/darkdeath.png"); $("div.sth").css("background-color", "#000");trig="img.bti6"; trigt="div.sth";HCiRev (trig, trigt);
           
            break;
        default:}
        
        if (userPattern.length == pattern.length) {nextSeqHC()}}else{
            $("body").attr("class", "wrng"); userPattern.length=0; pattern.length=0;delaya.length=0; retr(); wrng.play();
            $("h1").html('Game Over <br><img src="images/torch.gif" alt="" class="imag3"><img src="images/torch.gif" alt="" class="imgshad3"> Press Any Key To Restart <img src="images/torch.gif" alt="" class="imgshad4"><img src="images/torch.gif" alt="" class="imag4">')
            resetHC();    
        }
    } 

    // regular trigger
    else { 
    if (pattern[userPattern.length-1]==userPattern[userPattern.length-1]) {
switch (this) {
        case $("div.fst")[0]:
       $("img.bti1").attr("src", "images/skullscream.png").addClass("smimg"); delay=1200;trigger="img.bti1";reverse(trigger)
       d1.play()
        break;
        case $("div.snd")[0]:
        $("img.bti2").attr("src", "images/pentagram.png"); $("img.bti2").addClass("smimg");  delay=500;trigger="img.bti2";reverse(trigger)
        d2.play()
        break;
        case $("div.trd")[0]:
            $("img.bti3").attr("src", "images/bloodscreamskull.png").addClass("smimg"); delay=1700;trigger="img.bti3";reverse(trigger)
            d3.play()
        break;
        case $("div.fth")[0]:
        $("img.bti4").attr("src", "images/antigoat.png").addClass("smimg"); delay=1300;trigger="img.bti4";reverse(trigger)
        d4.play()
        break;
        case $("div.pth")[0]:
            $("img.bti5").attr("src", "images/screamingskull.png").addClass("smimg"); delay=1400;trigger="img.bti5";reverse(trigger)
            d5.play()
        break;
        case $("div.sth")[0]:
            $("img.bti6").attr("src", "images/devilskullshriek.png").addClass("smimg"); delay=1500;trigger="img.bti6";reverse(trigger)
            d6.play()
        break;
    default:
 } if (userPattern.length == pattern.length) {nextSeq()}}
        else {$("body").attr("class", "wrng"); userPattern.length=0; pattern.length=0;delaya.length=0; retr(); wrng.play();
        $("h1").html('Game Over <br><img src="images/torch.gif" alt="" class="imag3"><img src="images/torch.gif" alt="" class="imgshad3"> Press Any Key To Restart <img src="images/torch.gif" alt="" class="imgshad4"><img src="images/torch.gif" alt="" class="imag4">')
        resetHC();}
      
 
}


}

)

function reverse (that) {
    setTimeout(() => {
        $(that).attr("src", "images/skulldemon.png").removeClass("smimg")
    }, delay);
}



function retr () {setTimeout(() => {
    $("body").removeAttr("class", "wrng").attr("class", "bodyc")
}, 200);}

// creating a start func

function startgame () {if (pattern.length==0){nextSeq();$("h1").html('<img src="images/torch.gif" alt="" class="imag3" id="ir1"><img src="images/torch.gif" alt="" class="imgshad3" id="sr1">Level '+pattern.length+'<img src="images/torch.gif" alt="" class="imgshad4" id="sr2"><img src="images/torch.gif" alt="" class="imag4" id="ir2">') }}

$("body").on("keydown", function () {startgame()})


// mass overhaul HARDCORE

const doom = new Audio("sound/doomgatestart.mp3")
const doomloop = new Audio("sound/doomgateloop.mp3")
let delayb = []
let doomthing = null
let doomthang = null
function makeHC () {$("body").attr("id", "HCbody"); $("h1").attr("class", "HCh1").css("margin-bottom", "0px"); $("div.btn").attr("id", "HCbox" )
$("h1").html('<img src="images/large flame.gif" alt="" class="lgf" id=""><img src="images/skulllogo1.png" class="HCSkull"><img src="images/large flame.gif" alt="" class="lgf" id="">')
$("img.bti").attr("src", "images/gameoverskull.png")
// animation
doom.play()
doomthang = setTimeout(() => {
    doomthing = setInterval(() => {
        doomloop.play()
    }, 0);
}, 21000);

$("img").hide(); $("div.btn").hide(); 
$("img.HCSkull").fadeIn().attr("id", "Skullsize")
$("img.HCSkull").animate({width: '-=300px'}, 2000)
setTimeout(() => {
    $("img").fadeIn(); $("div.btn").fadeIn(); 
}, 1000);
setTimeout(() => { $("img.HCSkull").removeAttr("id", "Skullsize")
    nextSeqHC()    
}, 2500 );
}



function resetHC () {$("body").removeAttr("id", "HCbody"); $("h1").removeAttr("class", "HCh1").css("margin-bottom", "5%"); $("div.btn").removeAttr("id", "HCbox" )
$("img.bti").attr("src", "images/skulldemon.png"); doomloop.pause(); doom.pause(); clearInterval(doomthing); doom.currentTime=0; doomloop.currentTime=0; clearTimeout(doomthang)
}

function nextSeqHC () {rndNum = Math.floor(Math.random()*6);
    let chosenButton = buttons[rndNum];
    pattern.push(chosenButton); 
    
    delayb.push(300*pattern.length); 
    
    userPattern.length=[0]; 
    
    for (i=0; i<pattern.length; i++) {
      
        switch (pattern[i]) {
            case "fst": setTimeout(() => {
            $("img.bti1").attr("src", "images/darkdeath.png"); $("div.fst").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti1"; trigt="div.fst";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "fst" ? i : 'fst').filter(String)[i]]);
            break;

            case "snd": setTimeout(() => {
            $("img.bti2").attr("src", "images/darkdeath.png"); $("div.snd").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti2"; trigt="div.snd";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "snd" ? i : 'snd').filter(String)[i]]);
            break;

            case "trd": setTimeout(() => {
            $("img.bti3").attr("src", "images/darkdeath.png"); $("div.trd").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti3"; trigt="div.trd";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "trd" ? i : 'trd').filter(String)[i]]);
            break;

            case "fth": setTimeout(() => {
            $("img.bti4").attr("src", "images/darkdeath.png"); $("div.fth").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti4"; trigt="div.fth";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "fth" ? i : 'fth').filter(String)[i]]);
            break;

            case "pth": setTimeout(() => {
            $("img.bti5").attr("src", "images/darkdeath.png"); $("div.pth").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti5"; trigt="div.pth";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "pth" ? i : 'pth').filter(String)[i]]);
            break;

            case "sth": setTimeout(() => {
            $("img.bti6").attr("src", "images/darkdeath.png"); $("div.sth").removeAttr("id", "HCbox").attr("id", "aHC");trig="img.bti6"; trigt="div.sth";HCiRev (trig, trigt);  
            }, delayb[pattern.map((e, i) => e === "sth" ? i : 'sth').filter(String)[i]]);
            break;
            default:
        }
        


    }
    
}

function HCiRev (that, thus) {
setTimeout(() => {
$(that).attr("src", "images/gameoverskull.png")
$(thus).removeAttr("id", "aHC").attr("id", "HCbox")
}, 250);
}

