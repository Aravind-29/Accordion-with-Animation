
const accordionHeaders = document.querySelectorAll('.accordion-header');


accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
 
    const accordionItem = header.parentElement;
    const content = accordionItem.querySelector('.accordion-content');

  
    const isActive = accordionItem.classList.toggle('active');

    if (isActive) {
     
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
     
      content.style.maxHeight = '0';
    }

    document.querySelectorAll('.accordion-item').forEach(item => {
      if (item !== accordionItem) {
        item.classList.remove('active');
        item.querySelector('.accordion-content').style.maxHeight = '0'; 
      }
    });
  });
});
