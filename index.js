const cat_result = document.getElementById("cat_result");
const dog_result = document.getElementById("dog_result");
const cat_btn = document.getElementById("cat_btn");
const dog_btn = document.getElementById("dog_btn");
const fox_result = document.getElementById("fox_result");
const fox_btn = document.getElementById("fox_btn");

cat_btn.addEventListener("click", getRandomCat);
dog_btn.addEventListener("click", getRandomDog);
fox_btn.addEventListener("click", getRandomFox);

async function getRandomCat() {
  await fetch("https://aws.random.cat/meow")
    .then((res) => res.json())
    .then((data) => {
      if (data.file.includes(".mp4")) {
        getRandomCat();
      } else {
        cat_result.innerHTML = `<img src="${data.file}"/>`;
      }
    });
}

async function getRandomDog() {
  await fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src="${data.url}"/>`;
      }
    });
}

async function getRandomFox() {
  await fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      if (data.image.includes(".mp4")) {
        getRandomFox();
      } else {
        fox_result.innerHTML = `<img src="${data.image}"/>`;
      }
    });
}
