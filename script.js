document.addEventListener("DOMContentLoaded", function () {
    let typedElement = document.querySelector('.tipo');
    let typedItems = typedElement.getAttribute('data-typed-items').split(', ');

    new Typed('.tipo', {
        strings: typedItems,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.item');

    function showItems() {
        items.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('show');
            }, index * 450);
        });
    }

    showItems();
});


document.addEventListener("DOMContentLoaded", function() {
    const emailLink = document.querySelector('.email-link');
  
    emailLink.addEventListener('click', function() {
      window.location.href = 'mailto:dksfugimoto@gmail.com?subject=Vim%20pelo%20seu%20site&body=%20';
    });
  });