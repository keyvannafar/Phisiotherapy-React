const initstate = {
  ZoomBox: false,
};

const LightBoxfunc = (state = initstate, action) => {
  if (action.type === "lightBoxOn") {
    return {
      ...state,
      ZoomBox: (state.ZoomBox = true),
    };
  } else if (action.type === "lightBoxOff") {
    return {
      ...state,
      ZoomBox: (state.ZoomBox = false),
    };
  }
  {
    return state;
  }
};

export default LightBoxfunc;
