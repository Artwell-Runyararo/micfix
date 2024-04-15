import React from "react";
import axios from "axios";

const BASE_URL = 'https://api.emailjs.com';

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
    const data = {
        service_id: 'service_4wxse8d',
        template_id: 'template_bp1rfob',
        user_id: 'KYskwA-48COl3ta7u',
        template_params: {
            'from_name': requestBody?.from_name,
            'email': requestBody?.email,
            'user_phone': requestBody?.user_phone,
            'message': requestBody?.message,
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };
    console.log(data);

    const responseData = await axiosBase_URL.post(`/api/v1.0/email/send`, JSON.stringify(data),
        axiosConfig
    ).then((response) => {
        return response.data;
    });
    return responseData;
}