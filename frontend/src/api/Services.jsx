import React from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:5000';

const axiosBase_URL = axios.create({
    baseURL: BASE_URL,
});

// Error Message Responses
export const getErrorMessage = (error) => {
    return error
        ? error.response
            ? error.response.data
                ? error.response.data.error_description
                    ? error.response.data.error_description
                    : error.response.data.errors.length > 0
                        ? error.response.data.errors[0].message
                        : error.message
                : error.message
            : error.message
        : 'Something went wrong';
};
// End of Error Message Responses

export const sendingEmails = async (requestBody) => {

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            accept: "application/json",
        },
    };
    const details = {
        'recip_name': requestBody?.name,
        'recip_email': requestBody?.email,
        'recip_phone': requestBody?.phone,
        'recip_message': requestBody?.message,
    }
    console.log(details);
    const responseData = await axiosBase_URL.post(`/send_email`, details,
        axiosConfig
    ).then((response) => {
        return response.data;
    });
    return responseData;
}