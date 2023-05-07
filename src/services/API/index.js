import axios from 'axios';
import toast from 'react-hot-toast';
import { getCookie } from 'cookies-next';

import routes from './routes';

const API = async (route, data) => {
    const routing = route.split('.');
    const token = getCookie('token');

    const toast_loading = toast.loading('Espere un momento...');
    try {
        const response = await axios({
            url: process.env.NEXT_PUBLIC_HOST + routes[routing[0]][routing[1]].url,
            method: routes[routing[0]][routing[1]].method,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": token
            },
            data
        });
        toast.dismiss(toast_loading);
        if (response.data?.message) toast.success(response.data.message);
        return response.data;
    } catch (error) {
        toast.dismiss(toast_loading);
        toast.error(error.response.data?.message || 'Problema desconocido');
        return null;
    }
}

export default API;