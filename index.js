const $marquee = function ( option = { text: '这是一个默认的文字', color: 'red', fontSize: '16px', duration: '20s', delay: '10s' }) 
{
  let eleArray = []
  for (let i = 0; i < 3; i++) {
    eleArray.push(document.createElement('div'))
  }

  const styles = document.createElement('style')
  const keyframes = ` 
    @keyframes scroll {
      0%{
        left: 100%;
      }
      100% {
        left: -100%;
      }
    }
  `
  styles.innerHTML = keyframes
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(styles)

  const style0 = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '40px',
    lineHeight: '40px',
    overflow: 'hidden',
    zIndex: 2000
  }

  const commonStyle = {
    position: 'absolute',
    left: '100%',
    top: 0,
    color: option.color,
    fontSize: option.fontSize,
    whiteSpace: 'nowrap',
  }
  const textStyle1 = {
    animation: `scroll ${option.duration} linear infinite`
  }
  const textStyle2 = {
    animation: `scroll ${option.duration} linear ${option.delay} infinite`
  }
  const style1 = Object.assign({}, commonStyle, textStyle1)
  const style2 = Object.assign({}, commonStyle, textStyle2)

  eleArray.forEach((ele, index) => {
    setStyle(ele, eval(`style${index}`))
  })
  
  eleArray.forEach((ele, index) => {
    if (!index) {
      return
    }
    wrapper.appendChild(ele).innerText = option.text
  })
  const wrapper = document.body.appendChild(eleArray[0])
}

function setStyle(ele, json) {
  for(let i in json) {
    ele.style[i] = json[i]
  }
}