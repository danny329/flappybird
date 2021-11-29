const birdElem = document.querySelector('[data-bird]')
const BIRDSPEED = .5
let timeSinceLastJump = Number.POSITIVE_INFINITY
const JUMP_DURATION = 125
export function updateBird(delta){
    if(timeSinceLastJump < JUMP_DURATION){
        setTop(getTop() - BIRDSPEED * delta)
    }
    else{
        setTop(getTop() + BIRDSPEED * delta)
    }
    timeSinceLastJump += delta
}

function setTop(top){
    birdElem.style.setProperty("--bird-top", top)
}

function getTop(){
    return parseFloat(getComputedStyle(birdElem).getPropertyValue('--bird-top'))
}

export function setUpBird(){
    setTop(window.innerHeight/2)
    document.removeEventListener('keydown', handleJump)
    document.addEventListener('keydown', handleJump)
}

function handleJump(e){
    if(e.code !== 'Space') return

    timeSinceLastJump = 0
}

export function getBirdRect(){
    return birdElem.getBoundingClientRect()
}