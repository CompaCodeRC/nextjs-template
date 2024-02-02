import { setCookie, deleteCookie } from "cookies-next";
import { setStorage } from "./local_storage";

const useLogin = ({ token, user }) => {
    setCookie("token", token, {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
    });

    setStorage("user", user);
};
const useLogout = () => {
    deleteCookie("token");
    localStorage.clear();
    window.location.href = "/";
};
export { useLogin, useLogout };