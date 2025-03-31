import axios from "axios";
import { use } from "react";

export const baseURL = "http://localhost:8000"; 

export const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    });

export const getResume = async (description) => {
    try {
        const response = await axiosInstance.post("/api/v1/resume/generate",{
            userDescription: description,
        });
        
        return response.data;
    } catch (error) {
        console.error("Error fetching resume:", error);
        throw error;
    }
}