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

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  const updateCounter = () => {

    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 100;

    if(count < target){

      counter.innerText = Math.ceil(count + increment);

      setTimeout(updateCounter,20);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});
