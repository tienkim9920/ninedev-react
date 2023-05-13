import blogType from "./blogType";

const initialData = {
    list: [],
};

const blogReducer = (state = initialData, actions) => {
    switch(actions.type) {
        case blogType.SETBLOG:
            return {
                list: actions.data
            }

        case blogType.CREATE_BLOG:
            return {
                list: state.list.length 
                    ? [actions.data, ...state.list]
                    : []
            }

        case blogType.DELETE_BLOG:
            return {
                list: state.list.length 
                    ? [...state.list.filter(item => item.id !== Number(actions.data))] 
                    : []
            }

        default: return state
    }
}

export default blogReducer;