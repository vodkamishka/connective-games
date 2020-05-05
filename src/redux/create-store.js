const createStore = reducer => {
    let state;
    const callbacks = [];

    const getState = () => state;

    const dispatch = (actions) => {
      actions.forEach(action => state = reducer(action, state))
      callbacks.forEach(callback => callback());
      console.log('paint')
    };

    const subscribe = callback => callbacks.push(callback);

    return { getState, dispatch, subscribe };
  }

  export default createStore;