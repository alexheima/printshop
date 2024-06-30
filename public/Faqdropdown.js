function Faq() {
  const faqList = document.querySelector('.faq-list ul');
  
  faqList.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('li');
    if (clickedItem) {
      clickedItem.classList.toggle('active');
    }
  });

  }

Faq();
