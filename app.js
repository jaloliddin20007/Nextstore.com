var colorOptions = document.querySelectorAll(".color-option");

colorOptions.forEach(function(option) {
  option.addEventListener("click", function() {
    colorOptions.forEach(function(option) {
      option.classList.remove("selected");
    });

    option.classList.add("selected");
    var selectedColor = option.style.backgroundColor;
  });
});

window.onload = function() {
    const images = document.querySelectorAll('.image-container img');
    const displayedImage = document.getElementById('displayed-image');
  
    // Add event listener to each image
    images.forEach(image => {
      image.addEventListener('click', function() {
        const selectedSrc = this.getAttribute('src');
        displayedImage.setAttribute('src', selectedSrc);
  
        // Remove selected class from all images
        images.forEach(img => {
          img.classList.remove('selected');
        });
  
        // Add selected class to the clicked image
        this.classList.add('selected');
      });
    });
  };

  function selectButton(button) {
    var buttons = document.querySelectorAll('.button-container .button-option');
  
    // Remove selected class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove('selected');
    });
  
    // Add selected class to the clicked button
    button.classList.add('selected');
  }

  function tolash(){
    Swal.fire('Yaxshi!','Siz Bolib tolash tugmasini bosdingiz! Xaridingiz uchun tashakkur!','success')
  }
    function bolib() {
    Swal.fire(
        'Yaxshi!','Siz Sotib olish tugmasini bosdingiz! Xaridingiz uchun tashakkur!','success'
    )
}

  