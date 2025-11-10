const carData = [
  {
    modelName: "Ultimate Series",
    cars: [
      { name: "P1", img: "../pngs/cars/Ultimate_Series/WhatsApp Image 2025-03-31 at 13.42.00_fbede85e.jpg" },
      { name: "P1 GTR", img: "../pngs/cars/Ultimate_Series/WhatsApp Image 2025-03-31 at 13.42.01_4bfdbd2a.jpg" },
      { name: "Senna", img: "../pngs/cars/Ultimate_Series/WhatsApp Image 2025-03-31 at 13.42.01_76db9bac.jpg" },
      { name: "Elva", img: "../pngs/cars/Ultimate_Series/WhatsApp Image 2025-03-31 at 13.42.01_6e5990ff.jpg" },
    ],
  },
  {
    modelName: "Sports Series",
    cars: [
      { name: "570S", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.23_d9e26727.jpg" },
      { name: "540C", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.23_2bb8ee8c.jpg" },
      { name: "600LT", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.24_8780c9ea.jpg" },
      { name: "620R", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.24_41c6305f.jpg" },
      { name: "570GT", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.24_328c78ae.jpg" },
      { name: "570S GT4", img: "../pngs/cars/Sports_Series/WhatsApp Image 2025-03-31 at 13.42.22_6fac42ad.jpg" },
    ],
  },
  {
    modelName: "Super Series 2",
    cars: [
      { name: "650S", img: "../pngs/cars/Super_Series_2/WhatsApp Image 2025-03-18 at 19.10.50_b6fb09d3.jpg" },
      { name: "675LT", img: "../pngs/cars/Super_Series_2/WhatsApp Image 2025-03-18 at 19.14.07_19c604b2.jpg" },
      { name: "720S", img: "../pngs/cars/Super_Series_2/WhatsApp Image 2025-03-18 at 19.18.01_7e5fc59d.jpg" },
      { name: "765LT", img: "../pngs/cars/Super_Series_2/WhatsApp Image 2025-03-18 at 19.20.01_67d2d40c.jpg" },
    ],
  },
  {
    modelName: "Lecacy Models",
    cars: [
      { name: "F1", img: "../pngs/cars/Wildcard/WhatsApp Image 2025-03-18 at 19.25.08_aa4ad731.jpg" },
      { name: "F1 GTR", img: "../pngs/cars/Wildcard/WhatsApp Image 2025-03-18 at 19.27.11_ae654a03.jpg" },
      { name: "MP4-12C", img: "../pngs/cars/Wildcard/WhatsApp Image 2025-03-18 at 19.28.35_dc13f155.jpg" },
      { name: "612C Spider20R", img: "../pngs/cars/Wildcard/WhatsApp Image 2025-03-18 at 19.31.39_94cd3d97.jpg" },
    ],
  },
];

const models = document.querySelectorAll('.model');
const modelContainer = document.querySelector('.model-container');
const modelMenu = document.querySelector('.model-menu');
const mainContent = document.querySelector('.main-content');
const carInfoDiv = document.querySelector('.car_info');
const closeButton = document.querySelector('.close-button');

models.forEach((model) => {
  model.addEventListener("click", (event) => {
    const modelIndex = Array.from(models).indexOf(event.currentTarget); 
    const { modelName, cars } = carData[modelIndex];

    modelContainer.style.display = "block";
    modelContainer.style.top = "50%";
    modelContainer.style.left = "50%";
    modelContainer.style.transform = "translate(-50%, -50%)";
    modelContainer.style.opacity = "1";
    modelContainer.style.transition = "all 0.5s ease-in-out";

    mainContent.style.display = "block";
    carInfoDiv.style.display = "none";

    mainContent.innerHTML = `
      <h2>${modelName}</h2>
      <div class="cars-container">
        ${cars.map((car, carIndex) => `
          <div class="car" onclick="showCarInfo(${modelIndex}, ${carIndex})">
            <img src="${car.img}" alt="${car.name}">
            <p>${car.name}</p>
          </div>
        `).join("")}
      </div>
    `;
  });
});

function showCarInfo(modelIndex, carIndex) {
  const { cars } = carData[modelIndex];
  const car = cars[carIndex];

  mainContent.style.display = "none";
  carInfoDiv.style.display = "block";

  carInfoDiv.innerHTML = `
    <div class="car-info">
      <button class="back-button" onclick="reloadModels(${modelIndex})">← Back</button>
      <h2>${car.name}</h2>
      <img src="${car.img}" alt="${car.name}">
      <p>Description of ${car.name} (Add more details here)</p>
    </div>
  `;
}

function reloadModels(modelIndex) {
  const { modelName, cars } = carData[modelIndex];

  mainContent.style.display = "block";
  carInfoDiv.style.display = "none";
}

closeButton.addEventListener("click", () => {
  modelContainer.style.top = "-1000px";
  modelContainer.style.opacity = "0";
  setTimeout(() => {
    modelContainer.style.display = "none";
  }, 500);
});
