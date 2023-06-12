const token = localStorage.getItem("token") || null;
export const reAuth = (state = token, action) => {
  switch (action.type) {
    case "Login":
      return true;
    case "Logout":
      return false;
    default:
      return state;
  }
};

export const acLogin = () => ({ type: "Login"});
export const acLogout = () => ({ type: "Logout"});
