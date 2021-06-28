export const changeLanguage = (value) => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: {
            value,
        }
    }
}