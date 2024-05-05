import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GridLayout from "./layout/GridLayout";

function App() {
    return (
        <AuthProvider>
            <GridLayout>
                <Header/>
                <Outlet/>
                <Footer/>
            </GridLayout>
        </AuthProvider>
    );
}

export default App;