
const state = {
    isOpen: false
};
const mutations = {

    setIsOpen: (state) => (state.isOpen = state), // sets and defines the state -
    toggle() { state.isOpen = !state.isOpen; }  // setting the state to true whenever the panel is open with method inside Sidebar component
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
