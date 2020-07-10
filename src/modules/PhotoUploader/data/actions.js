export const NAME_ENTERED = 'modules/nameInput/NAME_ENTERED';

/**
 * Calls action when a new name was entered
 */
export const nameEntered = name => ({
    type: NAME_ENTERED,
    payload: name,
});

