const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'
const USER = 'user'
const TOKEN_WEB = 'token_web'
const ADMIN = 'admin'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    /* Token user */
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },
    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },
    async removeToken() {
        await localStorage.removeItem(TOKEN_KEY)
    },
    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },
    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },
    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    },

    /* User-aliado-empresa-administradores */
    saveAliado(user) {
        let temp = JSON.stringify(user);
        localStorage.setItem(USER, temp);
    },
    getAliado() {
        let info = JSON.parse(localStorage.getItem(USER))
        return info
    },
    async removeAliado() {
        await localStorage.removeItem(USER)
    },

    /* Token Web */
    /* async saveTokenWeb(token) {
        await localStorage.setItem(TOKEN_WEB, token)
    },
    getTokenWeb() {
        return localStorage.getItem(TOKEN_WEB)
    },
    removeTokenWeb() {
        localStorage.removeItem(TOKEN_WEB)
    }, */

    /* Admin */
    async saveUser(admin) {
        let temp = JSON.stringify(admin);
        await localStorage.setItem(ADMIN, temp)
    },
    getUser() {
        let info = JSON.parse(localStorage.getItem(ADMIN))
        return info
    },
    async removeUser() {
        await localStorage.removeItem(ADMIN)
    },
    async removeAll() {
        await this.removeAliado();
        await this.removeToken();
        await this.removeUser();
        localStorage.setItem("notificaciones", JSON.stringify([]));

    }
}

export { TokenService }