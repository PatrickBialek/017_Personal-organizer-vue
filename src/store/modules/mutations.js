export const updateIsUserOnline = (state, payload) => {
	state.user.isUserOnline = payload;
}

export const updateUserID = (state, payload) => {
	state.user.userID = payload;
}

export const updateNavigationDrawer = (state, payload) => {
	state.layout.navigationDrawer = payload;
}