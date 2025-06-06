import './assets/css/style.css'
import cards from './components/Cards'
import { btn_play_template, btn_refresh_template } from './components/Botton'


const WIN = 'WIN'
const LOSE = 'LOSE'

document.querySelector('#root').innerHTML = `
<div class="content">
  <div class="game" id="game"></div>
  <div id="btn_group">${btn_play_template}</div>
</div>
`

const game = document.getElementById('game')
const btn_group = document.getElementById('btn_group')
const btn_play = document.getElementById('btn_play')

btn_play.addEventListener('click', () => {
  let win_card = Math.round(Math.random() * 6) - 1

  game.innerHTML = cards
  btn_group.innerHTML = btn_refresh_template
  const card = document.querySelectorAll('.card')

  card.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (win_card == i) {
        el.classList.add('winner')
        el.innerHTML = `<h3>${WIN}</h3>`
      } else {
        el.classList.add('lose')
        el.innerHTML = `<h3>${LOSE}</h3>`
      }
    })
  })

  const btn_refresh = document.getElementById('btn_refresh')
  btn_refresh.addEventListener('click', () => {
    window.location.reload()
  })
})