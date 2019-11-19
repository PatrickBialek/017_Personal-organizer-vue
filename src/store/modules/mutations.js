export const updateIsUserOnline = (state, payload) => {
	state.user.isUserOnline = payload;
}

export const updateNavigationDrawer = (state, payload) => {
	state.layout.navigationDrawer = payload;
}