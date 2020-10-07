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
selectFont.addEventListener('change', replaceFont)
function replaceFont() {
    const fontSel = selectFont.value
  
    display.style.fontFamily = fontSel
    showFont.innerHTML = fontSel
  }

// The input field for text color
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
inputColor.addEventListener('input', fontColor)
function fontColor() {
    const fontColor = inputColor.value
  
    display.style.color = fontColor
    showColor.innerHTML = fontColor
  }

// The input field for background color
const inputBGColor = document.querySelector('#input-bg-color')
const showBGColor = document.querySelector('#show-bg-color')
inputBGColor.addEventListener('input', BGColor)
function BGColor() {
    const BGColorInput = inputBGColor.value
  
    display.style.backgroundColor = BGColorInput
    showBGColor.innerHTML = BGColorInput
}

// The input field for changing the text
const inputText = document.querySelector('#enter-text')
inputText.addEventListener('input', displayText)
function displayText() {
    const textInput = document.querySelector('#enter-text')
    let inputStr = textInput.value

    display.innerHTML = `${inputStr}`
}