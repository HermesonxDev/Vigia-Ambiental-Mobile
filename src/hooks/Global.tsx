import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthForm, User } from "../utils/interfaces";
import mocked_users from "../mock/users";

interface IGlobalContext {
    logged: boolean,
    loading: boolean,
    user: User | null,
    updateUser(id: number | undefined, formState: AuthForm): void,
    signUp(formState: AuthForm): void,
    signIn(formState: AuthForm): void,
    signOut(): void
}

const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

const GlobalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [logged, setLogged] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<User[]>(mocked_users || [])
    const [user, setUser] = useState<User | null>(null)

    const updateUser = async (id: number | undefined, formState: AuthForm) => {
        try {
            setLoading(true)

            const currentUsers = users || []

            const userIndex = currentUsers.findIndex(user => user.id === id)
            
            if (userIndex === -1) {
                console.log('Usuário não encontrado')
                setLoading(false)
            }

            const updatedUser = {
                ...currentUsers[userIndex],
                name: formState.name || currentUsers[userIndex].name,
                email: formState.email,
                password: formState.password
            }

            const updatedUsers = [...currentUsers]
            updatedUsers[userIndex] = updatedUser
            
            setUsers(updatedUsers)
            await AsyncStorage.setItem('users', JSON.stringify(updatedUsers))

            if (user && user.id === id) {
                setUser(updatedUser)
                await AsyncStorage.setItem('user', JSON.stringify(updatedUser))
            }

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on update user: ', String(error))
        }
    }

    const signUp = async (formState: AuthForm) => {
        try {
            setLoading(true)

            const currentUsers = users || []

            const newUser = {
                id: currentUsers.length + 1,
                name: formState?.name || '',
                email: formState.email,
                password: formState.password
            }

            const updatedUsers = [...currentUsers, newUser]
            setUsers(updatedUsers)
            await AsyncStorage.setItem('users', JSON.stringify(updatedUsers))

            setLogged(true)
            await AsyncStorage.setItem('logged', 'true')

            setUser(newUser)
            await AsyncStorage.setItem('user', JSON.stringify(newUser))
            
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on sign up: ', String(error))
        }
    }

    const signIn = async (formState: AuthForm) => {
        try {
            setLoading(true)

            const currentUsers = users || []

            const foundUser = currentUsers.find(user => 
                user.email === formState.email && 
                user.password === formState.password
            )
            
            if (foundUser) {
                setLogged(true)
                await AsyncStorage.setItem('logged', 'true')

                setUser(foundUser)
                await AsyncStorage.setItem('user', JSON.stringify(foundUser))
            } else {
                console.log('Credenciais inválidas')
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
            setUser(null)
            
            await AsyncStorage.removeItem('logged')
            await AsyncStorage.removeItem('user')

            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error on sign out: ', String(error))
        }
    }

    useEffect(() => {
        const loadStoredData = async () => {
            try {
                const storedUsersString = await AsyncStorage.getItem('users')
                if (storedUsersString) {
                    const storedUsers = JSON.parse(storedUsersString)
                    setUsers(Array.isArray(storedUsers) ? storedUsers : mocked_users || [])
                } else {
                    setUsers(mocked_users || [])
                }

                const loggedValue = await AsyncStorage.getItem('logged')
                const isLogged = !!loggedValue

                if (isLogged) {
                    const userString = await AsyncStorage.getItem('user')
                    const currentUser = userString ? JSON.parse(userString) : null
                    
                    setLogged(true)
                    setUser(currentUser)
                }
            } catch (error) {
                console.error('Error loading stored data: ', String(error))
                setUsers(mocked_users || [])
            }
        }

        loadStoredData()
    }, [])

    return (
        <GlobalContext.Provider value={{
            logged,
            loading,
            user,
            updateUser,
            signUp,
            signIn,
            signOut
        }}>
            {children}
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