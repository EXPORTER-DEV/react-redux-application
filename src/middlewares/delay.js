export const delay = (store) => (next) => (action) => {
    const delay = action?.meta?.delay;
    if(delay){
        const timeoutDelay = setTimeout(() => next(action), delay);
        return () => {
            clearTimeout(timeoutDelay);
        }
    }else{
        return next(action);
    }
}