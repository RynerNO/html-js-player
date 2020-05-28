function Player(target, src) {
    const pause_svg = PauseIco
    const play_svg = PlayIco
    const defaultSpeed_svg = DefaultSpeedIco;
    const firstSpeed_svg = FirstSpeedIco;
    const secondSpeed_svg = SecondSpeedIco;
Object.defineProperties(this, {
    prefix: {
        value: (function () {
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = [];
            for (let i = 0; i < 15; i++) {
                result.push(characters.charAt(Math.floor(Math.random() * characters.length)));
            }
            return result.join('')
        })()
    }
})
 Object.defineProperties(this, {
    target: {
        value: document.querySelector(target)
    }
})
Object.defineProperties(this, {
    src: {
        value: src,
        writable: true
    },
    speed: {
        value: 1,
        writable: true
    }
    
})
this._rangeGradient = function() {
        let multiplier = 100 / this._controls.range.max;
        this._controls.range.style.background =  'linear-gradient(to right, #b9bab7 0%, #b9bab7 '+(this._controls.range.value*multiplier) +'%, #ddd ' + (this._controls.range.value*multiplier)+ '%, #ddd 100%)';
    }
// add html 
this._initControls = () => {
        Object.defineProperties(this, {
            _controls: {
                value: {
                    play: document.querySelector(`#AudioPanel_playButton_${this.prefix}`),
                    audio: document.querySelector(`#AudioPanel_audio_${this.prefix}`),
                    trackName: document.querySelector(`#AudioPanel_title_${this.prefix}`),
                    range: document.querySelector(`#range_input_${this.prefix}`),
                    currentTime: document.querySelector(`#AudioPanel_currentTime_${this.prefix}`),
                    endTime: document.querySelector(`#AudioPanel_endTime_${this.prefix}`),
                    download: document.querySelector(`#AudioPanel_buttonDownload_${this.prefix}`),
                    skipForward: document.querySelector(`#AudioPanel_skipForward_${this.prefix}`),
                    skipBack: document.querySelector(`#AudioPanel_skipBack_${this.prefix}`),
                    speed: document.querySelector(`#AudioPanel_speedChange_${this.prefix}`)
                    
                }
            }
        })
        window.addEventListener('load', () => {
            this._controls.audio.src = this.src;
            this._controls.trackName.innerHTML = decodeURI(this._controls.audio.currentSrc).replace(/^.*[\\\/]/, '')
            console.log(this._controls.audio.src)
            let end_sec = (Math.floor(this._controls.audio.duration % 60) < 10) ? ('0' + (Math.floor(this._controls.audio.duration % 60))) : Math.floor(this._controls.audio.duration % 60)
            this._controls.endTime.innerHTML = '0:00'
            this._controls.range.max = 0;
        })
        
        this._controls.audio.addEventListener('play', ()=> {
            this._controls.play.innerHTML = pause_svg;
            this._controls.trackName.innerHTML =  decodeURI(this._controls.audio.currentSrc).replace(/^.*[\\\/]/, '')
            let end_sec = (Math.floor(this._controls.audio.duration % 60) < 10) ? ('0' + (Math.floor(this._controls.audio.duration % 60))) : Math.floor(this._controls.audio.duration % 60)
            this._controls.endTime.innerHTML = `${Math.floor(this._controls.audio.duration / 60) + ':' +  end_sec}`
            this._controls.range.max = this._controls.audio.duration;
        })
        this._controls.audio.addEventListener('pause', ()=> {
            this._controls.play.innerHTML = play_svg;
        })
        this._controls.audio.addEventListener('timeupdate', ()=> {
            let current_sec = (Math.floor(this._controls.audio.currentTime % 60) < 10) ? ('0' + (Math.floor(this._controls.audio.currentTime % 60))) : Math.floor(this._controls.audio.currentTime % 60) 
            this._controls.currentTime.innerHTML = `${Math.floor(this._controls.audio.currentTime / 60) + ':' +  current_sec}`
            this._controls.range.value = this._controls.audio.currentTime;
            this._rangeGradient();
        })
        // button click event
        this._controls.play.addEventListener('click', ()=> {
                (this._controls.audio.paused) ? this._controls.audio.play() : this._controls.audio.pause();
        })
        
        // input events
        this._controls.range.addEventListener('input', () => {
            this._controls.audio.currentTime = this._controls.range.value
            this._rangeGradient();
        })
            
        //speed change
        this._controls.speed.addEventListener('click', () => {
            switch (this.speed) {
                case 1:
                    this.speed = 1.5;
                    this._controls.speed.innerHTML = firstSpeed_svg;
                    break;
                case 1.5:
                    this.speed = 2;
                    this._controls.speed.innerHTML = secondSpeed_svg;
                    break;
                case 2:
                    this.speed = 1;
                    this._controls.speed.innerHTML = defaultSpeed_svg;
                    break;
            }
            this._controls.audio.playbackRate = this.speed;       
                
            
        })
        this._controls.download.addEventListener('click', ()=> {
            this._controls.download.setAttribute('download', decodeURI(this._controls.audio.currentSrc).replace(/^.*[\\\/]/, ''))
            fetch(this._controls.audio.currentSrc)
               .then(response => response.blob())
               .then(blob => {
                 const blobURL = URL.createObjectURL(blob);
                 this._controls.download.setAttribute('href', blobURL)
               })
        })
        this._controls.skipForward.addEventListener('click', () => {
            this._controls.audio.currentTime = this._controls.audio.currentTime + 15;
        })
        this._controls.skipBack.addEventListener('click', () => {
            this._controls.audio.currentTime = this._controls.audio.currentTime - 15;
        })
}
this._injectPlayer = () => { 
this.target.innerHTML = `<div class="AudioPanel-root">
    <audio id="AudioPanel_audio_${this.prefix}" src="${this.src}"></audio>
    <div class="AudioPanel-container">
        <div class="AudioPanel-controls">
            
            <div class="AudioPanel-button AudioPanel-buttonPlay">
                <button class="PlayButton-root PlayButton-isInAudioPanel" aria-label="play button" data-unplayed="true" type="button" id="AudioPanel_playButton_${this.prefix}">
                    <span class="PlayButton-control" tabindex="-1">	
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root SvgSymbol-medium SvgSymbol-play" width="62" height="62" viewBox="0 0 62 62">
                            <path d="M24.35 41.772a.5.5 0 0 1-.739-.439V20.667a.5.5 0 0 1 .74-.44l18.944 10.334a.5.5 0 0 1 0 .878L24.351 41.772z" fill-rule="nonzero"></path>
                        </svg>
                    </span>
                </button>
            </div>
            
            <button class="AudioPanel-button" type="button" id="AudioPanel_speedChange_${this.prefix}">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="25" height="27" viewBox="0 0 25 27">
                    <path d="M9.955 18v-4.84l-1.11 1.13-.81-.85 2.1-2.11h1.24V18h-1.42zm4.6-2.78l-1.4 1.41-.57-.55 1.41-1.42-1.41-1.41.57-.56 1.4 1.42 1.41-1.42.56.56-1.41 1.41 1.41 1.42-.56.55-1.41-1.41z" fill-rule="nonzero"></path>
                    <path d="M12.5 27C19.404 27 25 21.404 25 14.5S19.404 2 12.5 2 0 7.596 0 14.5 5.596 27 12.5 27zm0-1.5c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11z" fill-rule="nonzero"></path>
                </svg>
            </button>
            
            <button class="AudioPanel-button " type="button" id="AudioPanel_skipBack_${this.prefix}">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="25" height="27" viewBox="0 0 25 27">
                    <path d="M13 0v2.01c6.672.263 12 5.754 12 12.49C25 21.404 19.404 27 12.5 27S0 21.404 0 14.5c0-3.493 1.441-6.758 3.936-9.105a.75.75 0 111.028 1.092A10.965 10.965 0 001.5 14.5c0 6.075 4.925 11 11 11s11-4.925 11-11c0-5.907-4.656-10.727-10.499-10.989L13 6 8 3l5-3zm3.295 11.33v1.25h-3.16v1.63c.32-.32.86-.56 1.47-.56 1.13 0 2.14.81 2.14 2.16 0 1.42-1.06 2.31-2.67 2.31-1.16 0-2-.38-2.57-1l.79-.99c.45.47 1.07.73 1.77.73.79 0 1.24-.45 1.24-.99 0-.59-.44-.99-1.2-.99-.55 0-1 .16-1.4.54l-.99-.26v-3.83h4.58zm-5.94 0V18h-1.42v-4.84l-1.11 1.13-.81-.85 2.1-2.11h1.24z" fill-rule="nonzero"></path>
                </svg>
            </button>
            
            <button class="AudioPanel-button " type="button" id="AudioPanel_skipForward_${this.prefix}">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="25" height="27" viewBox="0 0 25 27">
                    <path d="M12 0l5 3-5 3V3.511C6.157 3.773 1.5 8.592 1.5 14.5c0 6.075 4.925 11 11 11s11-4.925 11-11c0-3.075-1.267-5.946-3.464-8.013a.75.75 0 011.028-1.092A12.465 12.465 0 0125 14.5C25 21.404 19.404 27 12.5 27S0 21.404 0 14.5C0 7.764 5.328 2.272 12 2.01V0zm4.295 11.33v1.25h-3.16v1.63c.32-.32.86-.56 1.47-.56 1.13 0 2.14.81 2.14 2.16 0 1.42-1.06 2.31-2.67 2.31-1.16 0-2-.38-2.57-1l.79-.99c.45.47 1.07.73 1.77.73.79 0 1.24-.45 1.24-.99 0-.59-.44-.99-1.2-.99-.55 0-1 .16-1.4.54l-.99-.26v-3.83h4.58zm-5.94 0V18h-1.42v-4.84l-1.11 1.13-.81-.85 2.1-2.11h1.24z" fill-rule="nonzero"></path>
                </svg>
            </button>
            
            <a class="AudioPanel-button AudioPanel-buttonDownload" target="_blank" id="AudioPanel_buttonDownload_${this.prefix}"  download>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="25" height="27" viewBox="0 0 25 27">
                    <path d="M12.5 2C19.404 2 25 7.596 25 14.5S19.404 27 12.5 27 0 21.404 0 14.5 5.596 2 12.5 2zm0 1.5c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm6 15.75a.75.75 0 01.102 1.493l-.102.007h-12a.75.75 0 01-.102-1.493l.102-.007h12zm-6-12a.75.75 0 01.743.648L13.25 8v7.598l1.834-1.222a.75.75 0 11.832 1.248l-3 2a.75.75 0 01-.832 0l-3-2a.75.75 0 11.832-1.248l1.834 1.223V8a.75.75 0 01.648-.743l.102-.007z" fill-rule="nonzero"></path>
                </svg>
            </a>			
        </div>	
        
        <div class="AudioPanel-title" id="AudioPanel_title_${this.prefix}"></div>
        
        <div>
            <div class="Progress-panel Progress-isInAudioPanel" data-unplayed="true">
                <!-- <div class="Progress-track">
                    <div class="Progress-played" style="width:0%"></div>
                    <div class="Progress-knob" style="left:0%"></div>
                   
                </div> -->
                <input type="range" class="range_input" id="range_input_${this.prefix}" value="0" max="100">
            </div>
            <div class="AudioPanel-progressText">
                <span id="AudioPanel_currentTime_${this.prefix}">00:00</span>
                <span id="AudioPanel_endTime_${this.prefix}"></span>
            </div>
        </div>

        
    </div>	
</div>`
this._initControls()

}
this._injectPlayer()
}