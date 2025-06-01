import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthForm, User } from "../utils/interfaces";
import mocked_users from "../mock/users";

interface IGlobalContext {
    logged: boolean,
    loading: boolean,
    signUp(formState: AuthForm): void,
    signIn(formState: AuthForm): void,
    signOut(): void
}

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [logged, setLogged] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const [users, setUsers] = useState<User[]>(mocked_users)

    const signUp = async (formState: AuthForm) => {
        try {
            setLoading(true)

            const user = {
                id: users.length + 1,
                name: formState?.name || '',
                email: formState.email,
                password: formState.password
            }

            setUsers((prev) => [...prev, user])
            
            setLogged(true)
            await AsyncStorage.setItem('logged', 'true')
            
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on sign up: ', String(error))
        }
    }

    const signIn = async (formState: AuthForm) => {
        try {
            setLoading(true)

            const user = users.filter(user => user.email === formState.email && user.password === formState.password)

            if (user) {
                setLogged(true)
                await AsyncStorage.setItem('logged', 'true')
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on sign in: ', String(error))
        }
    }

    const signOut = async () => {
        try {
            setLoading(true)

            setLogged(false)
            await AsyncStorage.removeItem('logged')

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on sign out: ', String(error))
        }
    }

    useEffect(() => {
        const checkLogged = async () => {
            try {
                const value = await AsyncStorage.getItem('logged');
                setLogged(!!value);
            } catch (error) {
                console.error('Error on check login: ', String(error));
            }
        };

        checkLogged();
    }, []);

    return (
        <GlobalContext.Provider value={{
            logged,
            loading,
            signUp,
            signIn,
            signOut
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

function useGlobal(): IGlobalContext {
    const context = useContext(GlobalContext)
    if (!context) {
        throw new Error("useGlobal must be used within a GlobalProvider")
    }
    return context
}

export { GlobalProvider, useGlobal }