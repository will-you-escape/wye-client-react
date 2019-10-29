const DEBUG = true;

var DEBUG_TOOLS = {};
if (DEBUG) {
  DEBUG_TOOLS =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__();
}

export { DEBUG_TOOLS };
