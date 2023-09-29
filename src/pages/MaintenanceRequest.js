import {MaintenanceRequestTable} from "../components/MaintenanceRequestTable";
import {useNavigate } from "react-router-dom";

export const MaintenanceRequest =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <MaintenanceRequestTable />
        </>
    )
}