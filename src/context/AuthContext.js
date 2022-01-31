import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setLoggedIn(true);
            setUser(JSON.parse(localStorage.getItem('user')));
            setLoading(false);
        }
        else {
            setLoading(false);
        }
    }, [])

    const login = (user) => {
        setLoggedIn(true);
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
    };

    const logout = async (cb) => {
        setLoggedIn(false);
        setUser(null);
        localStorage.removeItem('user');
        cb();
    };


    if (loading) {
        return <p>Loading...</p>
    }


    const values = { user, loggedIn, loading, setLoading, login, logout };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
