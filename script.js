function addAnimal () {
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
    .then(response => response.json())
    .then(animal => {
      const animalName = animal.name

      const animalHeader = document.createElement('h1')
      animalHeader.textContent = `Animal name: ${animalName}`
      document.querySelector('.animal').appendChild(animalHeader)

      const geoRangeSubheader = document.createElement('h2')
      geoRangeSubheader.textContent = `Geo range: ${animal.geo_range}`
      document.querySelector('.animal').appendChild(geoRangeSubheader)

      const titleForImg = document.createElement('div')
      titleForImg.textContent = 'This is the image: '
      document.querySelector('.animal').appendChild(titleForImg)

      const imageImg = document.createElement('img')
      imageImg.src = animal.image_link
      imageImg.textContent = "Images don't care about your words"
      document.querySelector('.animal').appendChild(imageImg)
    })
}
