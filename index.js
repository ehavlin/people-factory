const  personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    const emptyParagrah = document.querySelector('#emptyParagraph')
    const color = f.personColor.value
    heading.textContent = f.personName.value + "'s favorite color is " + color
    emptyParagraph.textContent = 'This color'
    emptyParagraph.style.color = color
}

personForm.addEventListener('submit', handleSubmit)