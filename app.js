const sections = document.querySelectorAll('.section');
const sectButtons = document.querySelectorAll('.controls');
const sectButton = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];

function PageTransition() {
  //button click active class
  for (let i = 0; i < sectButton.length; i++) {
    sectButton[i].addEventListener('click', function () {
      let currentButton = document.querySelectorAll('.active-btn');
      currentButton[0].className = currentButton[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //sections active class
  allSections.addEventListener('click', (e) => {
    // @ts-ignore
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other sectButtons
      sectButtons.forEach((btn) => {
        btn.classList.remove('active');
      });
      // @ts-ignore
      e.target.classList.add('active');

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });
}

PageTransition();
