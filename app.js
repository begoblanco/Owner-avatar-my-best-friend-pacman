
document.addEventListener('DOMContentLoaded', (event) => {
   
    const image1 = document.getElementById('/public/assets/media/fantasmito.png');
    const image2 = document.getElementById('/public/assets/media/pacman-icon.png');
  
    
    image1.addEventListener('click', () => {
      // Hide the first image
      image1.style.display = 'none';
      // Show the second image
      image2.style.display = 'block';
    });
  });