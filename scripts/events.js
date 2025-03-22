function loadImages() {
    fetch('data/images.json')  
        .then(response => response.json())  
        .then(images => {
            const imageContainer = document.getElementById('image-container');
            imageContainer.innerHTML = '';

            
            images.data.forEach(image => {
                const div = document.createElement('div');
                div.classList.add('image-item', image.category); 
                const img = document.createElement('img');
                img.src = image.src;  
                img.alt = image.alt;  
                div.appendChild(img);
                imageContainer.appendChild(div);
            });

            
            filterImages('all');
        })
        .catch(error => console.error('Error loading the images JSON:', error));
}


function filterImages(category) {
    const allImages = document.querySelectorAll('.image-item');
    allImages.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}


window.onload = loadImages;
