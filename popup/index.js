const btnScripting = document.getElementById('btnscript')
const divLoading = document.getElementById('divLoading')

btnScripting.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: alertHelloWorld
  })
})

function alertHelloWorld() {
  const cards = document.querySelectorAll('[id^=jobcard-]')
  divLoading.style.display = 'flex'
  console.log(cards)
}
