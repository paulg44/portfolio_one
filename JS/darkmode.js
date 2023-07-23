// Dark mode logic

const darkmodeBtn = document.getElementById('darkmode-btn')
const documentBody = document.getElementById('darkmode-body')

darkmodeBtn.addEventListener('click', function() {
    documentBody.classList.toggle('darkmode')
})