const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTION = [
    {
        name: 'rock',
        emoji: '✊',
        beats1: 'scissors',
        beats2: 'lizard'
        
    }, 
    {
        name: 'paper',
        emoji: '🖐️',
        beats1: 'rock',
        beats2: 'spock'
    },  
    {
        name: 'scissors',
        emoji: '✌️',
        beats1: 'paper',
        beats2: 'lizard'
    }, 
    {
        name: 'lizard',
        emoji: '🤏',
        beats1: 'spock',
        beats2: 'paper'
    }, 
    {
        name: 'spock',
        emoji: '🖖',
        beats1: 'scissors',
        beats2: 'rock'
    }

];


selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTION.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
const div = document.createElement('div')
div.innerText = selection.emoji
div.classList.add('result-selection')
if (winner) div.classList.add('winner')
finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats1 === opponentSelection.name || selection.beats2 === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTION.length)
    return SELECTION[randomIndex]
}