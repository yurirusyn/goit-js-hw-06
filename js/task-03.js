const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];






// const listEl = document.createElement('li');
// const image = document.createElement("img");
// image.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
// image.alt = 'Group of Horses Running'

// listEl.append(image)
// productsBooksEl.append(listEl) 



// const productsBooksEl = document.querySelector('ul');
// const makePhotoCard = ({ url, alt }) => {
//   const listEl = document.createElement('li');
//   const image = document.createElement("img");
//   image.src = url;
//   image.alt = alt;
//   image.classList.add('task3_img');
  
//   listEl.append(image)

//   console.log(listEl)
//   return listEl;
 
// };

// const elements = images.map(makePhotoCard);

// console.log(elements);
// productsBooksEl.append(...elements);


const makePhotoCard = (transaction) => {
  const {  url, alt  } = transaction;
  return `
  <li class="task3_li" >
  <img src= ${url} alt= ${alt} class="task3_img">
  </li>`;

}

const productsBooksEl = document.querySelector('ul');
const elements = images.map(makePhotoCard).join('');

productsBooksEl.insertAdjacentHTML('beforeend', elements);


