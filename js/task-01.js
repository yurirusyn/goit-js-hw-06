// const items = document.querySelectorAll('.item');
// console.log('Number of categories:', items.length)
// Array.prototype.forEach.call(items, (element) => {
//     const title = element.querySelector('h2').innerHTML;
//     const itemsLength = element.querySelectorAll('li').length;
//     console.log(`Category: ${title} \nElements: ${itemsLength}`);
// })




const allItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${allItems.length}`)


const allItemsLi = [...allItems].map(categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`).join(".\n");
console.log(allItemsLi);



