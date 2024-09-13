window.addEventListener('scroll', onScroll)

const flow = document.getElementById('flow')
const journey = document.getElementById('journey')
const google = document.getElementById('google')
const statistics = document.getElementById('statistics')
const client = document.getElementById('client')
const questions = document.getElementById('questions')
const prices = document.getElementById('prices')

onScroll()
addClassPrivacyPolicy()

function onScroll() {
  const currentURL = window.location.href
  if (currentURL.includes('PrivacyPolicy') || currentURL.includes('TermsUse')) {
    return
  }
  showNavOnScroll()

  activeMenuForSystemSection([flow, journey, google, statistics]) // Agrupa as seções do menu "O Sistema"

  activeMenuAtCurrentSection(client)
  activeMenuAtCurrentSection(questions)
  activeMenuAtCurrentSection(prices)
}

function activeMenuForSystemSection(sections) {
  const targetLine = scrollY + innerHeight / 2

  // Iterar pelas seções agrupadas
  let inSystemSection = false
  sections.forEach((section) => {
    const sectionTop = section?.offsetTop
    const sectionHeight = section?.offsetHeight
    const sectionEndsAt = sectionTop + sectionHeight

    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    if (sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine) {
      inSystemSection = true
    }
  })

  // Obter o elemento do menu "O Sistema"
  const menuElement = document.querySelector('.menu a[href*="flow"]')

  // Ativar ou desativar a classe "active"
  if (inSystemSection) {
    menuElement?.classList.add('active')
  } else {
    menuElement?.classList.remove('active')
  }
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section?.offsetTop
  const sectionHeight = section?.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section?.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement?.classList.remove('active')

  if (sectionBoundaries) {
    menuElement?.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    document.getElementById('navigation')?.classList.add('scroll')
  } else {
    document.getElementById('navigation')?.classList.remove('scroll')
  }
}

function addClassPrivacyPolicy() {
  const currentURL = window.location.href

  if (currentURL.includes('PrivacyPolicy') || currentURL.includes('TermsUse')) {
    const menuElement = document.querySelector(`.menu a[href*=${'flow'}]`)
    menuElement?.classList.remove('active')

    document.getElementById('navigation')?.classList.add('scroll')
  }
}
