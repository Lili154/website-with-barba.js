const images = [
    "gallery/gallery1.jpg",
    "gallery/gallery2.jpg",
    "gallery/gallery3.jpg",
    "gallery/gallery4.jpg",
    "gallery/gallery5.jpg",
    "gallery/gallery6.jpg",
    "gallery/gallery7.jpg",
    "gallery/gallery8.jpg",
    "gallery/gallery9.jpg",
    "gallery/gallery10.jpg",
    "gallery/gallery11.jpg",
    "gallery/gallery12.jpg"
  ];
  
  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.getElementsByClassName("thumb");
  
  function updateGallery() {
    mainImage.src = images[currentIndex];
    for (let i = 0; i < thumbs.length; i++) {
      thumbs[i].classList.remove("active");
    }
    thumbs[currentIndex].classList.add("active");
  }
  
  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateGallery();
  }
  
  function setSlide(index) {
    currentIndex = index;
    updateGallery();
  }
  
  // Init on load
  updateGallery();
  