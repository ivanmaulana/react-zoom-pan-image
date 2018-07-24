import React from 'react'
import ReactDOM from 'react-dom'
import queryString from 'query-string'
import Cropper from '../../src'
import './styles.css'

const urlArgs = queryString.parse(window.location.search)
// const imageSrc = urlArgs.img || '' // so we can change the image from our tests
const imageSrc = urlArgs.img || '/images/dog.jpeg' // so we can change the image from our tests
// const imageSrc = urlArgs.img || 'https://qlapa.com/assets/images/ep/ep_koleksi_batik.jpg' // so we can change the image from our tests
// const imageSrc = urlArgs.img || 'http://localhost:9000/assets/uploads/items/original/c23f4d3a6ed2fd820eb81d9cb889aa0ae6364bb2d6fc6e6025275f953cd72811.jpg' // so we can change the image from our tests
// const imageSrc = urlArgs.img || 'https://d2z1i9y16ulya2.cloudfront.net/uploads/items/original_small/60cb2f5523312e5c38dc52740cd854f85eaf02f3376168d61f853ea630bc09fd.jpg' // so we can change the image from our tests
// const imageSrc = urlArgs.img || "https://d2z1i9y16ulya2.cloudfront.net/uploads/shops/cover/7262_5a3fb421cf65a0dc8e996fb5efaca9eda12e49b3097ad5805c2338e3d2a6513c.jpg" // so we can change the image from our tests

class App extends React.Component {
  state = {
    imageSrc,
    crop: { x: 0, y: 0 },
    zoom: 1,
  }

  onCropChange = crop => {
    this.setState({ crop })
  }

  onCropComplete = (croppedAreaPixels) => {
    console.log(croppedAreaPixels)
  }

  onZoomChange = zoom => {
    this.setState({ zoom })
  }

  render() {
    return (
      <div className="App">
        <div className="crop-container">
          <Cropper
            image={this.state.imageSrc}
            crop={this.state.crop}
            zoom={this.state.zoom}
            onCropChange={this.onCropChange}
            onCropComplete={this.onCropComplete}
            onZoomChange={this.onZoomChange}
          />
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
