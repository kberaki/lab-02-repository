const $main = $('main')
const $selector = $('#image-selector')
const allPhotos = []

const apiURL = 'https://raw.githubusercontent.com/kberaki/lab-02-repository/lab-2/page-1.json'


const Photo = function(title, filePath, description, keyword) {
  this.title = title
  this.path = filePath
  this.description = description
  this.keyword = keyword
}

Photo.prototype.displayPhoto = function() {
  const $clonePhoto = $('#template').clone()
  $main.append($clonePhoto)
  $clonePhoto.attr('class', this.keyword)
  $clonePhoto.find('img').attr('class', 'image')
  $clonePhoto.find('img').attr('src', this.path)
  $clonePhoto.find('img').attr('alt', this.keyword)
  $clonePhoto.find('h6').text(this.title)
}

$($selector).on('change', () => {
  $('div').hide()
  $(`.${event.target.value}`).show()
})

$.getJSON(apiURL)
  .then(response => {
    response.forEach(photo => {
      let newphoto = new Photo(photo.title, photo.image_url,photo.description, photo.keyword)
      newphoto.displayPhoto()
      allPhotos.push(newphoto)
      $selector.append(`<option value=${newphoto.keyword}>${newphoto.keyword}</option>`)
    })
    // console.log($(`option[value='Odie']`))
    // if($(`option[value='photo']`[0])) {
    //   console.log('nope')
    // /}

    //
  })




