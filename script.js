const services = ['Consulting', 'Mentorship', 'Networking', 'Resources'];

const featureList = document.getElementById('featureCards');
services.forEach(service => {
  const li = document.createElement('li');
  li.className = 'card';
  li.textContent = service;
  featureList.appendChild(li);
});

const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
  document.getElementById('contentSection').scrollIntoView({ behavior: 'smooth' });
});

function handleScroll() {
  document.querySelectorAll('.card').forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('visible');
    }
  });
}

document.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
