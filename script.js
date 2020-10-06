// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')
inputSize.addEventListener('input', changeSize)
function changeSize() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}

// The select field for font
const selectFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
selectFont.addEventListener('input', replaceFont)
function replaceFont() {
    const h1 = document.querySelector('#display') // Selects the h1 tag
    
    const selectFont = document.querySelector('#select-font')
    let font_str = selectFont.value
    console.log(font_str)
  
    h1.style['font-family'] = font_str
  }

// The input field for text color
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
inputColor.addEventListener('input', fontColor)
function fontColor() {
    const h1 = document.querySelector('#display')
    
    const color_input = document.querySelector('#input-color')
    let color_str = color_input.value
    console.log(color_str)
  
    h1.style.color = color_str
  }

// The input field for background color
const inputBGColor = document.querySelector('#input-bg-color')
const showBGColor = document.querySelector('#show-bg-color')
inputBGColor.addEventListener('input', BGColor)

// The input field for changing the text
const inputBGColor = document.querySelector('#enter-text')
const showBGColor = document.querySelector('#show-bg-color')
inputBGColor.addEventListener('input', display)