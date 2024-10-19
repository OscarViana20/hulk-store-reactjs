export const makeAction = (type, payload = null) => {
    return payload !== null ? { type, payload } : { type };
};