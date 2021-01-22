const modalBtn = document.querySelectorAll('[data-modal]'),
      body = document.body,
      modalClose = document.querySelectorAll('.modal__close'),
      modal = document.querySelectorAll('.modal');


modalBtn.forEach(btn => {
    btn.addEventListener('click', (event) => {
        let e = event.currentTarget;
        let modalId = e.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout( function() {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        }, 2);
    });
});

function closeModal(modal) {
    let modalContent = modal.querySelector('.modal__content');
    modalContent.removeAttribute('style');
    
    setTimeout(() => {
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 250);
}

modalClose.forEach(item => {
    item.addEventListener('click', (e) => {
        let currentModal = e.currentTarget.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', (e) => {
        let currentModal = e.target;

        closeModal(currentModal);
    });
});
