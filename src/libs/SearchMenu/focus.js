export default {
    mounted (el) {
        const oSelectorInput = el.querySelector('.search-menu-input'),
              oSelectorPlaceHolder = oSelectorInput.querySelector('.placeholder'),
              oInput = oSelectorInput.querySelector('.input'),
              oSelectorIcon = oSelectorInput.querySelector('.iconfont'),
              oSelectorMenu = el.querySelector('.selector-menu')


        oInput.addEventListener('focus', () => {
            oSelectorPlaceHolder.style.display = 'none'
            if (oInput.value.length != 0) {
                oSelectorIcon.className = 'iconfont icon-search'
            }
            setTimeout(() => {
                oSelectorMenu.style.display = 'block'
            }, 100);
        }, false)

        oInput.addEventListener('blur', () => {
            setTimeout(() => {
                oSelectorMenu.style.display = 'none'
                if (oInput.value.length != 0) {
                    // oSelectorPlaceHolder.style.display = 'none'
                    oSelectorIcon.className = 'iconfont icon-search'
                } else {
                    oSelectorIcon.className = 'iconfont icon-arrow-down'
                    oSelectorPlaceHolder.style.display = 'block'
                }
            }, 100);
        },false)
        
        oInput.addEventListener('input', () => {
            if (oInput.value.length != 0) {
                oSelectorIcon.className = 'iconfont icon-search'
            } else {
                oSelectorIcon.className = 'iconfont icon-arrow-down'
            }
        })
    }
}