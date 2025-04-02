const volume = document.getElementById('volume_button');
const background = document.getElementById('bg');
const volumeIcon = document.getElementById('volume');

if(volume && background){
    volume.addEventListener('click', volumeSwitch);
}

function volumeSwitch(){
    background.muted = !background.muted;
    
    if (background.muted){
        volumeIcon.src = "./public/icons/volume_on.svg";
    } else{
        volumeIcon.src = "./public/icons/volume_off.svg";
    }
};
