const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];


// 1) Функція для формування розмітки списку картинок галереї на основі масиву картинок.
function createGalleryImgs(images){
    return images
    .map(
      ({preview, original, description }) => 
    `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" data-source="${original}" alt="${description}" width="360"
          height="200"/>
    </a> 
    </li>`
    )
    .join("");
};

// 2) Cтворити пустий "ul" список 
const galleryList = document.querySelector(".gallery");

// 3) Вставка згенерованої HTML-розмітки всередину пустого "ul" списка з класом gallery.
galleryList.insertAdjacentHTML("beforeend", createGalleryImgs(images)); 

// 4) Забороняємо поведінку за замовчуванням для тегу <a> (скачування картинок на дивайс).
galleryList.addEventListener("click", (e) => {
  e.preventDefault();

// 5) метод closest повертає посилання на найближчий батьківський елемент який відповідає переданому селектору.
const clickedImg = e.target.closest(".gallery-item"); //тут ми кажемо що якщо ми натиснули на картинку то отримаємо значення li елементаю. Цей рядок коду знаходить найближчий батьківський елемент з класом gallery-item для елемента, на який був здійснений клік.
if (!clickedImg) return; // якщо клік не по картинці, то отримаємо значення  li елемента


// 6)шукаємо дочірній елемент з класом gallery-image всередині знайденого gallery-item.
const clickedElement = clickedImg.querySelector(".gallery-image");

    // 6.1 Отримаємо значення цього атребута - dataset.source з картинки
    const originalImageSrc = clickedElement.dataset.source; 
    // 6.2  Отримаємо значення цього атребута alt з картинки
    const imageDescription = clickedElement.alt; 

// 7) створення екземпляру модального вікна за допомогою бібліотеки 
const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${originalImageSrc}" alt="${imageDescription}" width="1112" height="640"/>
  </div>
`);

// 8) Виклик методу який відкриє модальне вікно (з документації бібліотеки).
instance.show()
});