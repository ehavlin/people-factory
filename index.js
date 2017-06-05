const  personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    const color = document.querySelector('#emptyParagraph')
    color.textContent = 'This color: ' + f.personColor.value
    heading.textContent = f.personName.value + "'s favorite color is " + f.personColor.value
}

personForm.addEventListener('submit', handleSubmit)