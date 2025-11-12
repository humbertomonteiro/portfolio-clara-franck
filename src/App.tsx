import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./infra/routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
