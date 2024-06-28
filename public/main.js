/* eslint-disable no-undef */
window.addEventListener('scroll', onScroll)

const flow = document.getElementById('flow')
const journey = document.getElementById('journey')
// const business = document.getElementById('business')
const client = document.getElementById('client')
const questions = document.getElementById('questions')
const prices = document.getElementById('prices')

onScroll()

function onScroll() {
  showNavOnScroll()
  // showBackToTopButtonOnScroll()
  activeMenuAtCurrentSection(flow)
  activeMenuAtCurrentSection(journey)
  // activeMenuAtCurrentSection(business)
  activeMenuAtCurrentSection(client)
  activeMenuAtCurrentSection(questions)
  activeMenuAtCurrentSection(prices)
}

function activeMenuAtCurrentSection(section) {
  // linha alvo
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?

  // o topo da seção
  let sectionTop
  if (section.getAttribute('id') === 'journey') {
    sectionTop = flow.offsetTop // Use o offsetTop da primeira seção como referência
  } else {
    sectionTop = section.offsetTop
  }

  // a altura da seção
  const sectionHeight = section.offsetHeight

  // o topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados vou precisar?

  // a seção termina onde?
  const sectionEndsAt = sectionTop + sectionHeight

  // o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId =
    section.getAttribute('id') === 'journey'
      ? 'flow'
      : section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll')
  }
}

// function showBackToTopButtonOnScroll() {
//   if (scrollY > 400) {
//     document.getElementById('backToTopButton').classList.add('show')
//   } else {
//     document.getElementById('backToTopButton').classList.remove('show')
//   }
// }

// ScrollReveal({
//   origin: 'top',
//   distance: '30px',
//   duration: 700,
// }).reveal(`
// #home,
// #home img,
// #home .stats,
// #services,
// #services .card,
// #about,
// #about header,
// #about .content`)
