import React from 'react';

const images = [
  {
    id: 1,
    src: 'data:image/jpeg;base64,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',
    alt: 'Image 1',
    caption: 'Image 1 '
  },
  {
    id: 2,
    src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIBAwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QANhAAAgIBAwIFAgQFAwUBAAAAAQIAAxEEEiExQQUTIlFhMnEUQoGRIzNSocEGsdFiY4Lh8BX/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIEAwX/xAAjEQEBAAICAgEEAwAAAAAAAAAAAQIRAyESMQQTIjJBUWFx/9oADAMBAAIRAxEAPwD1lfXE00DrE1dR7ATTUO04x2ogOYYHqlqsLG140rC+rMLBzCVcw1WMKUcQgMQguJY5jJAJXcS+kF2AYQMYYZxkZ9peAcTzep1HmeI2bi3pO3rHUeIXadtlpZ6em4n1L/zOM58d6d7wZeO3dJA4Bi2MCuxbVDoRtPT5kZveddzThq7EJAOIrzGzhUx8mAWsJAwOfmRbFyHHiDwekX/FUE46exmM6202siqQV5JPSc8s5FzG306DMlS5dgF9yYqvWI/CKxrz9RnOAt1L7rnwo+lf8wbbOPLWwKP+kZMPqRX0noPUSAMY+YYXEXpippU7h0jvtO0Z7NUIWQrgQ8SES4RWJRGYwiCYApli2Ea0AxAhhAxHke8BgIAo9IlgZoI4imGYjJkh7ZIAKAAR1YzFouY1Mq0UOtKr0hFc4kTkQxHolqIfSVCAzAIekpRzGBcSuMxkE8TPqW2Yb5mg+o4EXbXvxu4xFl3FR5PVpnxOxbG2VtYctnBms3aej+CrK3srgtF/6n0bugtpG9wcFR+acrwfVamzU2abU1tbTUMOxHrrPbPx8zy8r453b1cZ58cs/Tt6fVtRb/225AxjBm9NStrk1+lcYJPbM5jahb9tFCMvvu6zr6LShQFYEKy+ojkS+PktvjHLkwxndgN6u/lhiWz9RkpRi7bWB254jaNMoqZHZga7Cwz7Q9LWEtc4yDOstc7JC0ZmVqyp3AZI+JlYMLTVkYbo3/M6mrtq0z+fqGFdbLjPcnsAO5+BM67dXRu/B6ilR0axdrH/AMeojyxLHLTj6vZpch3GW/pyCfuRyJWhrqus8yu5rcdQWyB+4zOkws8svU5dQD6V6wvCLDqdKtwrdFfPps68f3kzHtdy1i2aav0jP7TaqccRKDAjVJxNePphy9iIEojiFiCZ0iQEQCIwiVAFlcQCscRmAQBAEsIoiPbEU0QJYRTRzRTRGCSTEkAusbeMR6jmLRs9es0VgEQh0aCHIoxDXmUkIOfiOURJQ785jk6YiMR5EoCEBCA5jIC19TFWFf6v7TS0SxwOkVhuJ4iwFi5AxnB5nnfCP9PNovGb9bfqHcYNYZvzjr+s9N4nWHDEYU46mc7xLVpmupn2lsDied8nrtv+Pb6hLaoJqxXoa9xJ9dgGcD4m9vw91yG2u1X91vYf2BjF1A0wSiqjzGI5mrTUqbPOsVc/0L0nDi3Oo7cln8Mur1dvh2p04VLbtLeGRxY25qz2YHrjrn9Jsp1tQCgqG4xkd4Rq/FM4cKpxhTwcTxOrr8Z8I134e65Wq1D4pdM4JPY+00XO43aMOPHkmt9vaq2ou11ljBdqqFoOOg7n9cyrUdbs2DA/qJ6zR4dpbdP4clV1we3GSwXA/SPfPl87TO/hvtnuXjdMBRaj5lDbkJw4/wAx1TAkbfpI/vAGnStmw38wern/AGmbQF0sFFjFin5j3HaL8bCvcdXGcQukEEACFnmaIz0WZJYUYl4wJW0g7wtuZXBMvoIwBuIthGtiLI9oAsiKYRrfMU8VBLxTRzCKYRGVJCkgFqTH0nEzqCYxSBwYjas5IjU6zNWZqSVO0ixmReGhCQckwAwOIQlAywY4AuQIJcHjEaQD1EBtoEVDna+oWIcCedvrL6pbAMup5PtPUWkMjFTkieY8Zvt0Vyuik1kncB3P/wBz+k8/5kmt1t+NbLqN+hqSttxsZnJ5DHBE6dj7Ky9dRsx2TrPN0+OaMgfjtFq6dvWwIXUftz/adTSa7R6kb/DdYl+fyo27H39px4spJ07cmNt7Ps1hSo2HePdSpyJ5zxVPFPFHq8sHTpXYLFazksR047Cepr1BztsQD9IwtURkrzu6zvry/acc/C70x+GWeIitatXp8EfnRsq01ktXYXtcY/LWP8y7tUwUhSF+ZlsRWAfzFJJ5G7mdt6mnGzdBdbc6NaOEXke8z+A22aoPqbF27mwFzk4mu/Qi7TnzCRxwFPMyUWfgNO2F+hchSZmyyszm/Tpjj5TUd5bK0DNYQAvUntCqtruAZGBB5Bz1E8k2usvK7nFmDuIxgZ9sTR4dqrKr663sOTYcJjC4wSf2nXH5MuWhn8O447epBxKOSeDiArBgpB4MMEdJtYBY4lGWfiCcwAW5gE4hmCRAFtzFsI4xbcwBDxTAxzjES33iMvHzLlSQBg4kwCekpTnpIo/iY74iNoUYxNCnCmZxGLyMRkcrZX5hr0i1hDrDYMhCLDYlh8mMjQYm1grFW6Qm6ZmTWW4pVvY4PxFTiFlViM8djOL4g2dYqY9XBxNmps2qP3zEVD8TqFs67Mrn9Zj575TTVxTXbdSoZQpUH34itR4ZS3rqUV2dyvGZpJCDcBuI7AyV6+okhsgjticpx461XS5Ze4VpdNYRi7IYfOZrOkxnngCRdWh+kEn4E0V2Bxnn9Z2wxwjlllaz/g03bic/eWaqkOdq57cTS2AMmYtTc6/ylB9zLy1imbo3+klyVAGTieQ1d9o02q1jncrBkqTr15wZv1uouW5rLLMjH09p5+gWlnrVya95chj9JmDm5PK6jfw4eMtcr8bqC1RtLV7FB+koCZ6Dwd9Rqr/LZ0azg8L9KmDp9mstfTV+XYR9WDkA/wDM9F4X4XT4YmEH8R+Sccw4OK5ZdL5+eTDVnbq1AJWEXoBgR1YJHWLRfQCPeOSevHjW79r3dgJWZZOIOYyUYJhEiSALMAxrQGgGeyZ3zNTzPZEZOTJIZIASHHEYchwy8zOv1GOrDDvxJU0q4aMXiJXjtGgykmg4hEgDMUIRG/EAEsesouR0h4weekvaCItACWEghj9vvM2oZWRkPQzSyr7Tm3lsNjqJOVVIRrDvxWpO7bgYkU2bdlbcAYLdszCtlv4vY/X4nSPpqVVJ3sckzDbutmE1A6VyhewWMwUYHsZtp26vT7sKG9xMNieXSUX0gjJIHWClzaetEqySvXHeOZeN7V479Orp/R6bAA83JjoBiYNPYbqwLMZHfuIzT3Ekq59QOJox04Xf7M1F35RmZbGxWWPQDMOz68574mLWv5aW4/pJnPkuptWEc9WTXX6ik8gL2+ZxvEvDEULXZaVZxtVwcHH+YlNafB/EaTqgfK1Sj+ITwDnpPWAU6mlbSi2g9CJixxmc79tdvh/jjf6d8I1FOqqe61NiLtARNuR8/M7zakPqjtb0rxyY/QIyMdx9PYGc+gY1txAxluJt4sPDGf2yc2dzy7dql/SB2jQ4marjj4jFbrNbLo0sPeCWEAkHtKPsOsZCyTLBMEHHXrKLxge73k6xYMvMCRwJnsWaCeImwiI2fZJCLSoAutTnceJoXGJkDmNpfPERtGRkQt4EQz4IB6ywSTzAj1c++BC80REvKgZ/3gej1sQy2XIyGmbehPP6Qg5HB6QPQi236jmY7SN5HY8iPtcHpOfexFZI5K9PtOeapGa/0akEDnPWb2IQru7A8zlG8M4D8Z45j31ROlxsL8cEdZit1a149xra5HbaG6dxMzoTYSGOSD+gnmqtdqtL4r5lmBQ2AAT3noKrlYly3GOZEzmTp43F1NFYFOH+o8ZjzkagWdsc/M51IZsEAnPOR2nTIK6c7hNPHtw5NCT18n7zmeMEgioD+YpA/adKlsKOJg8ape1UavOam38dx3lcs3gnC/c5T6fTa7R1U6ysMVOPUPbpL0Whs0ljV6bUnyj0QjODNWo8jyA7Lw3OfaD4OjZbLhgTlW6/3mKY/dI02/a06rUXaWobWBdjtGR0haRGyrWctjrMzGy/XFsDagxy3f7Tpom0A95u4ptk5K01txLHEBWAhbxNDgZ0lZGYG4npLB94yWTk+0EyEyjALBxLLARRMHMAN3iWY98SMYh854ipwe8S5nw3vLk7PQlWMRcNmLVsQg2RKI59pMoHA6xWTIX2iAPDywy9+kzBiYYI7nPxFsz81n2lN6e8Dao/9QC23g9IqcXY3OJgvbazDd+80s4xz17GZLEV8lyJGS5HK19nAK8Fe/tNGnvT8ILHbaoBPHSI8Q0RcM1T5yMFczk3hnSrTi90KceUp4/X3mDllla+PsjxHzvF9QK9ONqZ4b/M62m8R0/haJXrXLKBjf7/AHl1hdPSEr+o/U0w+I0aS7yxeft8mZ5lppvfT2mk1elNSvWw2sAQfeabdQLFKgcTy3glNL2IlRby0P054nqECnHSelw5+U2w8uPjRV+lRLLgkhwADwJTOqjHE5V2rY3sa0favEvLORExuS9WilGTqM4M5OhvuostrBBpUYQLxz9ppt1DM3m1t6vzL7iZvxFdl+AhrbPdeDMWV3nLGmSzGx1dJp2V3cZ9ZyJ06t20bvq7zlJZYOVbAzwJuosfjdhvuJv49MWftptyq7hBrckfELzCVwQIkHHTtOlRGgNL3RG+AXMcpaafMlGzMz7jiVuPvHsjDZzKLGUgGIDcd8wBm7MFosNIW4ipoZIk3YPSSQoTfUI1JJJSVt1EVZ/MWSSFEMXrF2HmXJJMVBJU5Ml/8oySRnGKxj+HPJnNudum4/vJJOGa4w2OwsTDEer3i1A//QtOBkjrJJMfK1cTH4g7AHDEev3iGJbzMnOMYzJJMzbh+L1X+nQAy4HadxD/AAzJJPR4PxYOb82FWY6g5Y/vI5PlPz+UySSclOJUxDoQSDiPUDnj80kkzY+3a+nXH0iaqZJJ6WPpgy9nCAO8kk6VzSUZUkAvtBkkjSNekFpJJREn6pftJJFTZH+sySSSFP/Z',
    alt: 'Image 2',
    caption: 'Image 2 '
  },
  // Add more images as needed
];

function ImageGallery() {
  return (
    <div>
      <h2>Image Gallery</h2>
      <div className="gallery">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} width={180} height={100} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;