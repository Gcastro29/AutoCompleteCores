const colors = [
    {
      id: 1,
      name: 'DARK',
      hexColor: '#23232e'
    },
    {
      id: 2,
      name: 'LARANJA ESCURO',
      hexColor: '#a35405'
    },
    {
      id: 3,
      name: 'LARANJA CLARO',
      hexColor: '#e67207'
    },
    {
      id: 4,
      name: 'ROXO',
      hexColor: '#5a0382'
    },

    {
      id: 5,
      name: 'VERDE ESCURO',
      hexColor: '#026b1e'
    },

    {
      id: 6,
      name: 'AZUL ESCURO',
      hexColor: '#032e59'
    },
    {
      id: 7,
      name: 'VERMELHO VINHO',
      hexColor: '#5e0303'
    }
  ]
  
  const input = document.querySelector('.input-color')
  const list  = document.querySelector('.list-colors')
  
  const onKeyUp = (event) => {
    const minimumChars = 1
    let selectedColors = ''
  
    if (event.target.value.length >= minimumChars) {
  
      colors.map((color) => {
        if (color.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
          selectedColors += `<li data-color="${color.hexColor}" data-id="${color.id}">${color.name}</li>`
        }
      })
  
    } else {
      list.innerHTML = ''
    }
  
    list.innerHTML = selectedColors
  
    const dataColors = document.querySelectorAll('[data-color]')
  
    const onClick = (event) => {
      const body = document.querySelector('body')
  
      body.style.backgroundColor = event.target.dataset.color
    }
  
    Array.from(dataColors).map((li) => {
      li.addEventListener('click', onClick)
    })
  }
  
  input.addEventListener('keyup', onKeyUp)