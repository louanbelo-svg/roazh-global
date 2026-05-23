const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }

  });

},{
  threshold:0.15
});

fades.forEach(fade => {
  observer.observe(fade);
});
