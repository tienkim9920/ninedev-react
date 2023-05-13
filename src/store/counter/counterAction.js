import counterType from "./counterType"

export const incrementCouter = () => {
    return {
        type: counterType.INCREMENT
    }
}