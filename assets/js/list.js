// 카테고리 active
const h1Text = document.querySelector('.category_wrap h1').textContent;
const categoryListItems = document.querySelectorAll('.category_list li');
categoryListItems.forEach(item => {
  const anchorText = item.querySelector('a').textContent;
  if (h1Text === anchorText) {
    item.classList.add('active');
  }
});
