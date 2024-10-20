
let state;
let setStateCallback;

export function useState(initialValue) {
  state = state || initialValue;

  function setState(newValue) {
    state = newValue;
    setStateCallback();
  }

  return [state, setState];
}

export function registerSetStateCallback(callback) {
  setStateCallback = callback;
}
