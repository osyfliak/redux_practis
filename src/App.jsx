import { AuthPage } from "./pages/AuthPage/AuthPage";
import { WellcomePage } from "./pages/WellcomePage/WellcomePage";
import { useSelector } from "react-redux";

function App() {
const state = useSelector((state)=>{return state});
console.log(state);

  return (
    state.auth.isAuth ?<WellcomePage/>: < AuthPage /> 
  );
}

export default App;
