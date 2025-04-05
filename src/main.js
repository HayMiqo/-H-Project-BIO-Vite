//! volume button
const volume = document.getElementById('volume_button');
const background = document.getElementById('bg');
const volumeIcon = document.getElementById('volume');

if(volume && background){
    volume.addEventListener('click', (volumeSwitch));
}
if(volume && background){
    volume.addEventListener('click', (volumePosition));
}

function volumeSwitch(){
    background.muted = !background.muted;
    
    if (background.muted){
        volumeIcon.src = "/icons/volume_on.svg";
    } else{
        volumeIcon.src = "/icons/volume_off.svg";
    }
};



//!  title color 
const title = document.querySelector('.about__name');

const darkPalette = [
    '#111111', // угольно-чёрный
    '#333333', // тёмный графит
    '#555555', // серый бетон
    '#777777', // стальной
    '#999999', // серебристый
    '#bbbbbb', // светлое серебро
    '#dddddd', // платина
    '#1a1a2e', // тёмно-синий (ночь)
    '#16213e', // морская глубина
    '#3a0ca3', // глубокий фиолетовый
    '#7209b7', // драгоценный аметист
    '#4361ee', // сапфировый (приглушённый)
    '#4cc9f0', // бирюзовый (тёмный)
    '#4895ef', // лазурный
    '#3f37c9', // королевский синий
    '#560bad', // пурпурно-фиолетовый
    '#b5179e', // тёмная фуксия
    '#f72585', // тёмная роза
    '#480ca8', // виноградный
    '#4a051c', // бордовый
    '#6a040f', // тёмно-красный
    '#9d0208', // киноварь
    '#d00000', // рубиновый (приглушённый)
    '#dc2f02', // тыквенный (тёмный)
    '#e85d04', // охра
    '#f48c06', // золотистый
    '#ffba08', // мёд
    '#2d6a4f', // тёмный изумруд
    '#40916c', // малахит
    '#52b788', // эвкалипт
    '#74c69d', // мята
    '#b7e4c7', // светлая мята
    '#0b090a', // абсолютный чёрный
    '#212529', // графит
    '#343a40', // мокрый асфальт
    '#495057', // дымчатый
    '#6c757d', // мышиный
    '#adb5bd', // светлый графит
    '#ced4da'  // лунный свет
];

const getRandomColor = () => {
    return darkPalette[Math.floor(Math.random() * darkPalette.length)]
};

setInterval( () => {
    title.style.color = getRandomColor();
}, 1000);

//! theme button
const themeButton = document.querySelector('.menu__theme-button');
