import { createContext, useContext, useEffect, useState } from "react";
import { getUserList } from '../api';

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

    const updateStorage = async (id) => {
        const users = await getUserList();
        const updateUser = users.find(u => u._id === id);
        setUser({ ...updateUser, tokens: user.tokens });
        localStorage.setItem('user', JSON.stringify({ ...updateUser, tokens: user.tokens }));
    }

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


    const values = { user, loggedIn, loading, setLoading, login, logout, updateStorage };
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
