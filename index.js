const  personForm = document.querySelector('#personForm')

function handleSubmit(ev) {
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor = f.favoriteColor.value
    const age = f.age.value

    // const colorDiv = `
    // <div style="background-color: ${favoriteColor}; width: 100px; height: 50px;"></div>
    // `

    // details.innerHTML = `
    //     <ul>
    //         <li>Name: ${name}</li>
    //         <li>Favorie Color: ${colorDiv}</li>
    //         <li>Age: ${age}</li>
    //     </ul>
    //     `
    
    addToDetails(name, favoriteColor, age)



    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name

    // details.appendChild(boldedName)

    /** 
    const heading = document.querySelector('h1')
    const emptyParagrah = document.querySelector('#emptyParagraph')
    const color = f.personColor.value
    heading.textContent = f.personName.value + "'s favorite color is " + color
    emptyParagraph.textContent = 'This color'
    emptyParagraph.style.color = color
    */
}

function addToDetails(name, favoriteColor, age){
    const unOrderedList = document.createElement('ul')
    const listName = document.createElement('li')
    listName.textContent = `Name: ${name}`

    const listFavoriteColor = document.createElement('li')
    listFavoriteColor.innerHTML = `Favorite Color: ${renderColor(favoriteColor).outerHTML}`

    const listAge = document.createElement('li')
    listAge.textContent = `Age: ${age}`
   
    details.appendChild(unOrderedList)
    unOrderedList.appendChild(listName)
    unOrderedList.appendChild(listFavoriteColor)
    unOrderedList.appendChild(listAge)
}

function renderColor(color){
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div
}

personForm.addEventListener('submit', handleSubmit)