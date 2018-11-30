const $main = $('main')
const $selector = $('#image-selector')
const allDogs = []

const apiURL = 'https://github.com/kberaki/lab-02-repository/blob/lab-2/json.md'


const Dog = function(title, filePath, description) {
  this.title = title
  this.path = filePath
  this.description = description
}

Dog.prototype.displayDog = function() {
  const $cloneDog = $('#template').clone()
  $main.append($cloneDog)
  $cloneDog.attr('id', this.title)
  $cloneDog.find('img').attr('class', 'images')
  $cloneDog.find('img').attr('src', this.path)
  $cloneDog.find('img').attr('alt', this.description)
  $cloneDog.find('h6').text(this.title)
}

$($selector).on('change', () => {
  $('div').hide()
  $(`#${event.target.value}`).show()
})

$.getJSON(apiURL)
  .then(response => {
    response.forEach(dog => {
      let newDog = new Dog(dog.name, dog.image_url, dog.hobbies)
      newDog.displayDog()
      allDogs.push(newDog)
      $selector.append(`<option>${newDog.title}</option>`)
    })
  })





