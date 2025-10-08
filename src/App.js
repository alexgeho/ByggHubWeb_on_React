import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Container style={{ marginTop: "80px" }}>
                <AppRoutes />
            </Container>

            <Footer/>

        </Router>
    );
}

export default App;
