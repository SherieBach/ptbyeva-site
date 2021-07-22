
const state = {
    isOpen: false
};
const mutations = {
    setIsClosed() {state.isOpen = false},
    toggle() { state.isOpen = !state.isOpen; }  
};

const actions = {

};
const getters = {

};

export default {
    getters,
    actions,
    mutations,
    state
}
