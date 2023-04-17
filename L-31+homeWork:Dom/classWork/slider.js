/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png" alt="photo" class="img_slider_btn">

<div class="trigers">
   <button class="button_left"> < </button>
    <button class="button_right"> > </button>
</div> */

// --------
const imgSliderBtn = document.querySelector(".img_slider_btn");
const leftBtn = document.querySelector(".button_left");
const rightBtn = document.querySelector(".button_right");

const photos_slider = [
  "https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg",
  "https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg",
  "https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg",
];

let photo_Index = 0;

leftBtn.addEventListener("click", () => {
  imgSliderBtn.src = photos_slider[photo_Index++ % photos_slider.length];
});

rightBtn.addEventListener("click", () => {
  imgSliderBtn.src = photos_slider[photo_Index-- % photos_slider.length];
});

// --------

// .trigers .button_left,
// .trigers .button_right {
//   display: flex;
//   flex-direction: row;
//   background-color: aquamarine;
//   margin: 0 auto;
// }
