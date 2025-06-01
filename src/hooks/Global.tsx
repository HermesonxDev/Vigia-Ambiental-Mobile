import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthForm, User } from "../utils/interfaces";
import mocked_users from "../mock/users";

interface IGlobalContext {
    logged: boolean,
    loading: boolean,
    signUp(formState: AuthForm): void
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
            signUp
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