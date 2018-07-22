import React, { PureComponent } from 'react'
import Cropper from "./Cropper"

class App extends PureComponent {
    state = {
        width: 0,
        height: 0,
    }

    componentDidMount() {
        const self = this
        const img = new Image()
        img.onload = function() {
            self.setState({
                width: this.width,
                height: this.height,
            })
        }

        img.src = this.props.image
    }

    render() {
        const {
            width,
            height
        } = this.state

        if (!width || !height) return null

        return <Cropper
            {...this.props}
            width={width}
            height={height}
        />
    }
}

export default App