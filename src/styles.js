import styled from 'react-emotion'

export const Container = styled('div')({
  width: '240px',
  position: 'relative',
  height: '240px',
  overflow: 'hidden',
})

export const Component = styled('div')({
  position: 'absolute',
  width: '1000px',
  top: 0,
  left: '-380px',
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  background: 'white',
  userSelect: 'none',
  touchAction: 'none',
  cursor: 'move',
})

export const Img = styled('img')({
  margin: 'auto',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  willChange: 'transform', // this improves performances and prevent painting issues on iOS Chrome
})

const cropperLines = {
  content: '" "',
  boxSizing: 'border-box',
  position: 'absolute',
}

export const CropArea = styled('div')({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  boxSizing: 'border-box',
  // boxShadow: '0 0 0 9999em white',
  boxShadow: '0 0 0 9999em #222',
})
