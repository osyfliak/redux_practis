import { AuthPage } from "./pages/AuthPage/AuthPage";
import { WellcomePage } from "./pages/WellcomePage/WellcomePage";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { PublicRoute } from "./PublicRoute/PublicRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";

function App() {
const state = useSelector((state)=>{return state});
console.log(state);

  return (
    <Routes>
      <Route path='/' element={<PublicRoute><HomePage/></PublicRoute>}/>
      <Route path='/welcome' element={<PrivateRoute><WellcomePage/></PrivateRoute>}/>
      <Route path='/auth' element={<PublicRoute restricted>< AuthPage /> </PublicRoute>}/>
      <Route path='*' element={<Navigate to='/'></Navigate>}/>
    </Routes>
  );
}

export default App;
