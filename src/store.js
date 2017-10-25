import createStore from "redux-zero";

let commentary = [];
const initialState = {
    commentary: commentary,
    selectedComment: 0
};

const store = createStore(initialState);
export default store;