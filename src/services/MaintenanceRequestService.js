import axios from 'axios';

const MAINTENANCE_REQUEST_BASE_API_URL = 'http://localhost:8080/api/v1/maintenance-request';

export function getAllMaintenanceRequests(){
    return axios.get(MAINTENANCE_REQUEST_BASE_API_URL);
}

export function createMaintenanceRequest(maintenanceRequest){
    return axios.post(MAINTENANCE_REQUEST_BASE_API_URL,maintenanceRequest);
}

export function getById(id){
    return axios.get(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`);
}

export function updateMaintenanceRequest(id, maintenanceRequest){
    console.log(id);
    return axios.put(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`, maintenanceRequest);
}

export function deleteMaintenanceRequest(id){
    return axios.delete(`${MAINTENANCE_REQUEST_BASE_API_URL}/${id}`);
}