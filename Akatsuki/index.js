document.addEventListener("DOMContentLoaded", function() {
  const painImage = document.querySelector('.pain-image');
  if (!painImage) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          painImage.classList.add('visible');
        } else {
          painImage.classList.remove('visible');
        }
      });
    },
    { threshold: 0.4 }
  );

  observer.observe(painImage);
}); 

document.addEventListener("DOMContentLoaded", function() {
  
  const images = document.querySelectorAll('.slider .akatsuki');
  const arrowBtn = document.querySelector('.arrow-right');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  showImage(current);

  arrowBtn.addEventListener('click', function() {
    current = (current + 1) % images.length;
    showImage(current);
  });
});

function goTosakura() {
  window.location.href = "sakura.html";
}
function akatsuki(){
  window.location.href = "akatsuki.html";
}
function sasuke(){
  window.location.href = "sasuke.html";
}
function naruto() {
  window.location.href = "naruto.html";
}
function comics() {
  window.location.href = "comics.html";
}
const searchBar = document.getElementById('searchBar');
  const cards = document.querySelectorAll('.mini-card');

  searchBar.addEventListener('input', () => {
    const value = searchBar.value.toLowerCase();

    cards.forEach(card => {
      const name = card.getAttribute('data-name').toLowerCase;
      if (name.includes(value)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  searchBar.addEventListener('input', () => {
  const value = searchBar.value.toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    if (name.includes(value)) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  document.getElementById('noResult').style.display = visibleCount === 0 ? 'block' : 'none';
});

