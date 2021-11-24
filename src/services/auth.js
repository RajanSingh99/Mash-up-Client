const auth = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? true : false;
  };

  const login = (token) => {
    localStorage.setItem("authToken", token);
  };

  const logout = () => localStorage.removeItem("authToken");

  return {
    isLoggedIn,
    login,
    logout,
  };
};

export default auth();
