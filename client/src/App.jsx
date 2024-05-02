import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {AuthProvider} from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </AuthProvider>
    );
}

export default App;