var speechRecognisation = window.webkitSpeechRecognition;
var recognisation = new speechRecognisation();
function Start(){
    document.getElementById("textbox").innerHTML="";
    recognisation.start();
}
recognisation.onresult=function run(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=='take my selfie'){
        speak();
    }
}
function speak(){
    synth=window.speechSynthesis;
    speakData="Taking Selfie In 5 Seconds";
    utter= new SpeechSynthesisUtterance(speakData);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='selfie_image' src="+data_uri+">";
    }) ;   
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}