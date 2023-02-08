function rombs() {
    let rombsWrapper = document.querySelectorAll('.rombs');

    rombsWrapper.forEach(rombs => {
        rombs.style.cssText = `
        display: flex;
        `;

        for(let i = 0; i < 4; i++) {
            const romb = document.createElement('div');
            romb.style.cssText = `
                margin-right: 30px;
                width: 10px;
                height: 10px;
                left: 975.14px;
                top: 438px;
                background: #DB3138;
                transform: rotate(-45deg);
            `;
            rombs.append(romb);
        }
    });
}
export default rombs;