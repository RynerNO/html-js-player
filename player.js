function Player(target, src) {
    let pause_svg = `<span class="PlayButton-control" tabindex="-1">
    <svg width="62" height="62"  class="SvgSymbol-root SvgSymbol-medium SvgSymbol-play" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.8276 17H42.1724C42.6294 17 43 17.3177 43 17.7095V45.2905C43 45.6823 42.6294 46 42.1724 46H34.8276C34.3706 46 34 45.6823 34 45.2905V17.7095C34 17.3177 34.3706 17 34.8276 17Z" fill="black"/>
    <path d="M20.8276 17H28.1724C28.6294 17 29 17.3177 29 17.7095V45.2905C29 45.6823 28.6294 46 28.1724 46H20.8276C20.3706 46 20 45.6823 20 45.2905V17.7095C20 17.3177 20.3706 17 20.8276 17Z" fill="black"/>
    </svg>
    </span>`
    let play_svg = `<span class="PlayButton-control" tabindex="-1">	
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root SvgSymbol-medium SvgSymbol-play" width="62" height="62" viewBox="0 0 62 62">
        <path d="M24.35 41.772a.5.5 0 0 1-.739-.439V20.667a.5.5 0 0 1 .74-.44l18.944 10.334a.5.5 0 0 1 0 .878L24.351 41.772z" fill-rule="nonzero"></path>
    </svg>
    </span>`
    let defaultSpeed_svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="SvgSymbol-root" width="25" height="27" viewBox="0 0 25 27">
    <path d="M9.955 18v-4.84l-1.11 1.13-.81-.85 2.1-2.11h1.24V18h-1.42zm4.6-2.78l-1.4 1.41-.57-.55 1.41-1.42-1.41-1.41.57-.56 1.4 1.42 1.41-1.42.56.56-1.41 1.41 1.41 1.42-.56.55-1.41-1.41z" fill-rule="nonzero"></path>
    <path d="M12.5 27C19.404 27 25 21.404 25 14.5S19.404 2 12.5 2 0 7.596 0 14.5 5.596 27 12.5 27zm0-1.5c-6.075 0-11-4.925-11-11s4.925-11 11-11 11 4.925 11 11-4.925 11-11 11z" fill-rule="nonzero"></path>
    </svg>`;
    let firstSpeed_svg = `<svg width="25" height="27" class="SvgSymbol-root" viewBox="0 0 25 27" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 27C19.404 27 25 21.404 25 14.5C25 7.596 19.404 2 12.5 2C5.596 2 0 7.596 0 14.5C0 21.404 5.596 27 12.5 27ZM12.5 25.5C6.425 25.5 1.5 20.575 1.5 14.5C1.5 8.425 6.425 3.5 12.5 3.5C18.575 3.5 23.5 8.425 23.5 14.5C23.5 20.575 18.575 25.5 12.5 25.5Z" fill-rule="nonzero"/>
    <path d="M18.57 15.94L19.97 14.53L21.38 15.94L21.94 15.39L20.53 13.97L21.94 12.56L21.38 12L19.97 13.42L18.57 12L18 12.56L19.41 13.97L18 15.39L18.57 15.94Z" fill-rule="nonzero"/>
    <path d="M8.12891 17H7V12.6484L5.65234 13.0664V12.1484L8.00781 11.3047H8.12891V17ZM10.0859 16.4453C10.0859 16.2656 10.1458 16.1198 10.2656 16.0078C10.388 15.8958 10.5404 15.8398 10.7227 15.8398C10.9076 15.8398 11.0599 15.8958 11.1797 16.0078C11.3021 16.1198 11.3633 16.2656 11.3633 16.4453C11.3633 16.6224 11.3034 16.7669 11.1836 16.8789C11.0638 16.9883 10.9102 17.043 10.7227 17.043C10.5378 17.043 10.3854 16.9883 10.2656 16.8789C10.1458 16.7669 10.0859 16.6224 10.0859 16.4453ZM12.4766 14.2031L12.8047 11.3125H15.9922V12.2539H13.7305L13.5898 13.4766C13.8581 13.3333 14.1432 13.2617 14.4453 13.2617C14.987 13.2617 15.4115 13.4297 15.7188 13.7656C16.026 14.1016 16.1797 14.5716 16.1797 15.1758C16.1797 15.543 16.1016 15.8724 15.9453 16.1641C15.7917 16.4531 15.5703 16.6784 15.2812 16.8398C14.9922 16.9987 14.651 17.0781 14.2578 17.0781C13.9141 17.0781 13.5951 17.0091 13.3008 16.8711C13.0065 16.7305 12.7734 16.5339 12.6016 16.2812C12.4323 16.0286 12.3424 15.7409 12.332 15.418H13.4492C13.4727 15.6549 13.5547 15.8398 13.6953 15.9727C13.8385 16.1029 14.0247 16.168 14.2539 16.168C14.5091 16.168 14.7057 16.0768 14.8438 15.8945C14.9818 15.7096 15.0508 15.4492 15.0508 15.1133C15.0508 14.7904 14.9714 14.543 14.8125 14.3711C14.6536 14.1992 14.4284 14.1133 14.1367 14.1133C13.8685 14.1133 13.651 14.1836 13.4844 14.3242L13.375 14.4258L12.4766 14.2031Z" fill-rule="nonzero"/>
    </svg>`;
    
    let secondSpeed_svg = `<svg width="25" height="27" class="SvgSymbol-root" viewBox="0 0 25 27" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 27C19.404 27 25 21.404 25 14.5C25 7.596 19.404 2 12.5 2C5.596 2 0 7.596 0 14.5C0 21.404 5.596 27 12.5 27ZM12.5 25.5C6.425 25.5 1.5 20.575 1.5 14.5C1.5 8.425 6.425 3.5 12.5 3.5C18.575 3.5 23.5 8.425 23.5 14.5C23.5 20.575 18.575 25.5 12.5 25.5Z" fill-rule="nonzero"/>
    <path d="M13.57 15.94L14.97 14.53L16.38 15.94L16.94 15.39L15.53 13.97L16.94 12.56L16.38 12L14.97 13.42L13.57 12L13 12.56L14.41 13.97L13 15.39L13.57 15.94Z" fill-rule="nonzero"/>
    <path d="M12.2852 17H8.38672V16.2266L10.2266 14.2656C10.4792 13.9896 10.6654 13.7487 10.7852 13.543C10.9076 13.3372 10.9688 13.1419 10.9688 12.957C10.9688 12.7044 10.9049 12.5065 10.7773 12.3633C10.6497 12.2174 10.4674 12.1445 10.2305 12.1445C9.97526 12.1445 9.77344 12.2331 9.625 12.4102C9.47917 12.5846 9.40625 12.8151 9.40625 13.1016H8.27344C8.27344 12.7552 8.35547 12.4388 8.51953 12.1523C8.6862 11.8659 8.92057 11.6419 9.22266 11.4805C9.52474 11.3164 9.86719 11.2344 10.25 11.2344C10.8359 11.2344 11.2904 11.375 11.6133 11.6562C11.9388 11.9375 12.1016 12.3346 12.1016 12.8477C12.1016 13.1289 12.0286 13.4154 11.8828 13.707C11.737 13.9987 11.487 14.3385 11.1328 14.7266L9.83984 16.0898H12.2852V17Z" fill-rule="nonzero"/>
    </svg>`;
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
_rangeGradient = () => {
        let multiplier = 100 / this._controls.range.max;
        this._controls.range.style.background =  'linear-gradient(to right, #b9bab7 0%, #b9bab7 '+(this._controls.range.value*multiplier) +'%, #ddd ' + (this._controls.range.value*multiplier)+ '%, #ddd 100%)';
    }
// add html 
    _initControls = () => {
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
            _rangeGradient();
        })
        // button click event
        this._controls.play.addEventListener('click', ()=> {
                (this._controls.audio.paused) ? this._controls.audio.play() : this._controls.audio.pause();
        })
        
        // input events
        this._controls.range.addEventListener('input', () => {
            this._controls.audio.currentTime = this._controls.range.value
            _rangeGradient();
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
_injectPlayer = () => { 
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
 _initControls()

}
_injectPlayer()
}

