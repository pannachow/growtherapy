/**
 * Auth helper methods
 * All localStorage implementation is here
 **/


class Auth {

    static loginUser(token, userId) {
        localStorage.token = token;
        localStorage.userId = userId;
    }
    
    static logoutUser() {
        localStorage.clear();
    }
    
    static getToken() {
        return ('token' in localStorage) ? localStorage.token : '';
    }
    
    static getUserId() {
        return ('userId' in localStorage) ? localStorage.userId : '';
    }

}


export default Auth;