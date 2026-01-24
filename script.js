console.log("Welcome to Spotify");
//Initialize the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songs=[
    {songName:"salam-e-ishq", filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
    {songName:"salam-e-ishq", filePath:"song/1.mp3" , coverPath:"covers/1.jpg"},
]
//Handle play/pause click
masterplay.addEventListener('click' ,()=>{
       if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
       }
       else{
        audioElement.pause();
       masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity =0;
       }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})
