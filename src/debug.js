const DEBUG = true;

var DEBUG_TOOLS = {};
if (DEBUG) {
  DEBUG_TOOLS =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

export { DEBUG_TOOLS };
