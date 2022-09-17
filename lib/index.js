import keyboard from './vPay'
const zfcPassword = {
    install (Vue) {
        Vue.component('vPay', keyboard)
    }
}

export default zfcPassword