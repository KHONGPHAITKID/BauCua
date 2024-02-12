window.onload = function() {
    const dicesWidth = document.querySelector('.dices').offsetWidth;
    const bowl = document.querySelector('.bowl');
    bowl.style.width = dicesWidth + 'px';
};

let notifications = document.querySelector('.notifications');

function createToast(type, icon, title, text) {
    let newToast = document.createElement('div');
    newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(() => {
        newToast.remove()
    }, 3000)
}

let status = 'show';

function showDices() {
    status = 'show';
    const bowl = document.querySelector('.bowl');
    bowl.style.top = '-66%';
}

function hideDices() {
    status = 'hide';
    const bowl = document.querySelector('.bowl');
    bowl.style.top = '0%';
}

function shakeDice() {
    let extraTime = 0;
    // if (status == 'show') {
    //     extraTime = 1500;
    //     hideDices();
    // }

    setTimeout(() => {
        const bowl = document.querySelector('.bowl');
        // bowl.classList.remove('shake');
        // void bowl.offsetWidth;
        bowl.classList.add('shake');
        setTimeout(() => {
            bowl.classList.remove('shake');
        }, 750);
    }, extraTime);
    
    const dices = document.querySelectorAll('.dice');
    
    dices.forEach(dice => {
        setTimeout(() => {
            const randomFace = Math.floor(Math.random() * 6) + 1;
            dice.src = `img/${getFaceName(randomFace)}.jpg`;
        }, 500);
    });
    setTimeout(() => {
        shakeNotify();
    }, extraTime + 250)
}

function shakeNotify() {
    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Ok';
    let text = 'Đã lắc thành công!';
    createToast(type, icon, title, text);
}

function getFaceName(faceNumber) {
    switch (faceNumber) {
        case 1:
            return 'bau';
        case 2:
            return 'ga';
        case 3:
            return 'nai';
        case 4:
            return 'cua';
        case 5:
            return 'tom';
        case 6:
            return 'ca';
    }
}
