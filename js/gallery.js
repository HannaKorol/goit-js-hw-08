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
    <img class="gallery-image" data-source="${original}" src="${preview}" alt="${description}"/>
    </a> 
    </li>`
    )
    .join("");
}

  // 2) Cтворити пустий "ul" список для додавання посилань
  const galleryList = document.querySelector(".gallery");

  // 3) Вставка згенерованої HTML-розмітки всередину пустого "ul" списка з класом gallery.
galleryList.insertAdjacentHTML("beforeend", createGalleryImgs(images)); 

// 4) Забороняємо поведінку за замовчуванням для тегу <a> (скачування картинок).
galleryList.addEventListener("click", (e) => {
  e.preventDefault();

// метод closest повертає посилання на найближчий батьківський елемент який відповідає переданому селектору.
const clickedImg = e.target.closest(".gallery-item");
if (!clickedImg) return; // Виходимо, якщо клік не по картинці


const clickedElement = clickedImg.querySelector(".gallery-image");
    const originalImageSrc = clickedElement.dataset.source;
    const imageDescription = clickedElement.alt;


/*     // Тут можна додати відкриття модального вікна або інші дії
    console.log("Clicked Image Source:", originalImageSrc);
    console.log("Image Description:", imageDescription);
});
 */


//-----------------
/* 
galleryList.addEventListener("click", handleCardClick) //при кліку на карточку відкривається модалка


function handleCardClick(event){ 
  if(event.currentTarget === event.target) { // )При кліку між елементами галереї нічого не відбувається. (//перевіряємо місклік, тобто перевірка на те, що ми клікнули поза елементами галереї. Тут перевіряється рівніть currentTarget і target. Вони будуть рівними тільки тоді, коли ми клікнемо на сам елемент батьківсього galleryList. А батьківський galleryList і є цим місклікліком між елементами галереї.)
    return;}
  console.log(event.target) //виведемо в консоль те на що ми натиснули
} */

/* 
1. отримати id картинки на яку було написнуто.
2. знайти в масиві картинок ту картинку яка відповідає нашому id натиснутої картинки.
3. створити розмітку для модального вікна на основі знайденого об"єкта.
*/



// створення екземпляру модального вікна за допомогою бібліотеки
const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${originalImageSrc}" alt="${imageDescription}"/>
  </div>
`);

// виклик методу який відкриє модальне вікно (з документації бібліотеки).
instance.show()
});




/* 

    // Вішаємо обробник подій на батьківський елемент 
    galleryList.addEventListener("click", handleImgClick)
    function handleImgClick (event) {
        console.log(event.target);
        console.log(event.currentTarget);

    }

     */