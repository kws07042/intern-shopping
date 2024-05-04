import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <AuthProvider>
            <Header/>
            <Outlet/>
            <Footer/>
        </AuthProvider>
    );
}

export default App;