const input = document.querySelector("#file");
const brightnessRange = document.querySelector("#brightness-range");
const container = document.getElementById("container"); 

input.addEventListener("change", () => {
    const inputFile = input.files[0];
    // console.log(input.value)

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
      localStorage.setItem('wallpaper', base64String);
      container.style.background = `url(data:image/png;base64,${base64String})`;
    };
    reader.readAsDataURL(inputFile);
});

brightnessRange.addEventListener("change",(e)=>{
    let val = brightnessRange.value
    container.style.filter = `brightness(${val}%)`

})