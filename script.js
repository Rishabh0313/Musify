let songIndex=1;
let audioElement=new Audio(`psong${songIndex}.mp3`);
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let get=document.getElementById('gif');
let songit=Array.from(document.getElementsByClassName("songbanner"));
let songs=[
    {SongName:"One bottle down",audioPath:"psong1.mp3" ,coverPath:"cover1.jpg"},
    {SongName:"Let me love you",audioPath:"psong2.mp3" ,coverPath:"cover2.jpg"},
    {SongName:"O Mere Dil Ke Chan",audioPath:"psong3.mp3" ,coverPath:"cover3.jpg"},
    {SongName:"Dil Dhadakne Do",audioPath:"psong4.mp3" ,coverPath:"cover4.jpg"},
    {SongName:"Cute Vol 1",audioPath:"psong5.mp3" ,coverPath:"cover5.jpg"},
    {SongName:"Kesariya",audioPath:"psong6.mp3" ,coverPath:"cover6.jpg"}
]

songit.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songit")[0].innerText=songs[i].SongName;
});
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause');
        get.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play');
        get.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})
let makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-circle-play');
})
}
Array.from(document.getElementsByClassName('songitemsplay')).forEach((element)=>{
   element.addEventListener("click",(e)=>{
    //   console.log(e.target);
      makeAllPlays();
      songIndex=parseInt(e.target.id);
      masterSongName.innerText=songs[songIndex-1].SongName;
      audioElement.src=`psong${songIndex}.mp3`;
    //   if(audioElement==play){
    //       e.target.classList.remove('fa-pause');
    //       e.target.classList.add('fa-circle-play');
    //       audioElement.pause();
    // }
    // else{
          e.target.classList.remove('fa-circle-play');
          e.target.classList.add('fa-pause');
          audioElement.currentTime=0;
          audioElement.play();
          masterPlay.classList.remove('fa-circle-play');
          masterPlay.classList.add('fa-pause');
          get.style.opacity=1;

    //   }
   })
})
document.getElementById('next').addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`psong${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].SongName;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      get.style.opacity=1;
})
document.getElementById('previous').addEventListener("click",()=>{
    if(songIndex<=1){
        songIndex=6;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`psong${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex-1].SongName;
      audioElement.currentTime=0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-pause');
      get.style.opacity=1;
})