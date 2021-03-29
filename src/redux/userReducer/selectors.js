const isUserLogin = store => store.user.isLogin;
const getToken = store => store.user.token;
const getIsLoading = store => store.user.loading;
const getUserName = store => store.user.data.name;
const getError = store => store.user.error

export { isUserLogin, getToken, getIsLoading, getUserName, getError };
