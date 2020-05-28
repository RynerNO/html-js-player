import './player.sass'

//SVG's
import DefaultSpeedIco from './assets/DefaultSpeed.svg'
import FirstSpeedIco  from './assets/FirstSpeed.svg'
import SecondSpeedIco  from './assets/SecondSpeed.svg'
import PlayIco from './assets/Play.svg'
import PauseIco from './assets/Pause.svg'
//html template
import HtmlTemplate from './assets/Template.pug'
class Player {
    #icons = {
        play: PlayIco,
        pause: PauseIco,
        firstSpeed: FirstSpeedIco,
        secondSpeed: SecondSpeedIco,
        defaultSpeed: DefaultSpeedIco
    }
    #getElement(id) {
        return document.getElementById(`#${id}`)
    }
    constructor(target, source) {
        this.target = this.#getElement(target)
    }
   
}

export default Player