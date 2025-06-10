import './assets/css/index.scss'
import { WIN, LOSE } from './dictionary'
import title from './components/Title'
import cards from './components/Cards'
import { btn_play_template, btn_refresh_template } from './components/Botton'

document.querySelector('#root').innerHTML = `
<div class="content">
  <div class="game" id="game">
    ${title}
    <div id="btn_group">${btn_play_template}</div>
  </div>
</div>
`

const game = document.getElementById('game')
const btn_play = document.getElementById('btn_play')

btn_play.addEventListener('click', () => {
  let win_card = Math.round(Math.random() * 6) - 1
  let attempts = 0

  game.innerHTML = cards
  const card = document.querySelectorAll('.card')

  card.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (win_card == i) {
        el.classList.add('winner')
        el.innerHTML = `<h3>${WIN}</h3>`
      } else {
        el.classList.add('lose')
        el.innerHTML = `<h3>${LOSE}</h3>`
        if (attempts > 2) {
          el.removeEventListener('click', null)
        }
        attempts++
      }
    })
  })
})