import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Diagnostic from "../pages/Diagnostic/Diagnostic";
import DiagnosticResult from "../pages/DiagnosticResult/DiagnosticResult";
import StudyPlan from "../pages/StudyPlan/StudyPlan";
import Questions from "../pages/Questions/Questions";
import Statistics from "../pages/Statistics/Statistics";


export default function AppRoutes(){

    return(
        <BrowserRouter>

           <Routes>

    <Route 
        path="/" 
        element={<Home/>}
    />

    <Route 
        path="/login" 
        element={<Login/>}
    />

    <Route 
        path="/register" 
        element={<Register/>}
    />

    <Route 
        path="/diagnostic" 
        element={<Diagnostic/>}
    />

    <Route 
        path="/diagnostic-result" 
        element={<DiagnosticResult/>}
    />

    <Route 
        path="/dashboard" 
        element={<Dashboard/>}
    />

    <Route
    path="/study-plan"
    element={<StudyPlan/>}
/>

<Route
    path="/questions"
    element={<Questions/>}
/>

<Route
    path="/statistics"
    element={<Statistics/>}
/>

</Routes>

        </BrowserRouter>
    )
}