import React, { useEffect, useState } from 'react';

function MyComponent() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Chiamata all'API per ottenere l'array di immagini
    // Esempio di chiamata API con fetch:
    fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=UwUope7u9WCLG7Ab2awwNEfWviZnNEdt')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error(error));
  }, []);

  const selectedImageIndex = 0; // Indice dell'immagine da visualizzare

  return (
    <div>
      {images.length > 0 && selectedImageIndex < images.length && (
        <img src={images[selectedImageIndex].url} alt="Immagine" />
      )}
    </div>
  );
}

export default MyComponent;