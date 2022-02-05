import {createContext, useContext, useState} from "react";
const ProfileContext = createContext()

const ProfileProvider = ({ children }) => {
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  const values = { isProfileClicked, setIsProfileClicked }
  return <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
}
const useProfile = () => useContext(ProfileContext)
export { ProfileProvider, useProfile }