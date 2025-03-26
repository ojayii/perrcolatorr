// import { createContext, useState, useEffect, useContext } from "react";
// import { supabase } from "../supabaseClient";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if the user is logged in
//     const getUser = async () => {
//       const { data } = await supabase.auth.getUser();
//       setUser(data?.user || null);
//     };

//     getUser();

//     // Listen for auth state changes
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user || null);
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
