function PreloadImages(imageUrls: string[]): Promise<void[]> {
    return Promise.all(
      imageUrls.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject(new Error(`Failed to load image ${src}`));
        });
      })
    );
  }

export default PreloadImages;