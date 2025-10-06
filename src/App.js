import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./Components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <Router>
            <Header />
            <Container style={{ marginTop: "80px" }}>
                <AppRoutes />
            </Container>
        </Router>
    );
}

export default App;
