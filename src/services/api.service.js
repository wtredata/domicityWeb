import axios from "axios";
import { TokenService } from "../services/storage.service";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ApiService = {
  init() {
    axios.defaults.baseURL = "https://api.domicity.co/";
    /* this.getFirstTokenWeb(); */

    },

    setHeader() {
        axios.defaults.baseURL = "https://api.domicity.co/";
        // axios.defaults.baseURL = "http://192.168.1.8:8000/";
        let token = TokenService.getToken();
        axios.defaults.headers.common["Content-Type"] = 'application/json';

        /* axios.defaults.headers.common[
            "Authorization"
        ] = token == null ? null : `Bearer ${token}`; */
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    },

    get(resource) {
        return axios.get(resource);
    },

    post(resource, data) {
        return axios.post(resource, data);
    },

    put(resource, data) {
        return axios.put(resource, data);
    },

    delete(resource) {
        return axios.delete(resource);
    },


    customRequest(data) {
        this.setHeader();
        let response = axios(data);
        return response;
    },
    customRequest2(data) {
        let response = axios(data);
        return response;
    },
    /* getFirstTokenWeb() {
        let token = TokenService.getTokenWeb(token);

        if (TokenService.getToken() != null) {
            let user = TokenService.getUser();

            if (user.kottigo == null) {
                let data = {
                    method: "patch",
                    url: "negocio/administrador/" + user.administrador.id + "/",
                    data: {
                        token_web: token,
                    },
                };

                ApiService.customRequest(data);
            }
        }
    },
    async saveTokenWeb(id) {
        let temp = await TokenService.getTokenWeb();

        let data = {
            method: "patch",
            url: "negocio/administrador/" + id + "/",
            data: { token_web: temp },
        };
        try {
            this.customRequest(data);
        } catch (error) {
            if (error.response) {
                if (error.response.status != 200) console.log(error.response);
            }
        }
    }, */

    /* Guardar token */
    async getToken(username, password) {
        const requestData = {
            method: "post",
            url: "api-token-auth/",
            responseType: "json",
            data: {
                username: username,
                password: password,
            },
        };
        let tempToken = await axios(requestData);
        TokenService.saveToken(tempToken.data.token);

    },

    /* Get usuario con administrador */
    async getAliadoAdmin() {
        const userDataAdmin = {
            method: "get",
            url: "usuario/usuario/?query=1",
        };

        let userAdmin = await this.customRequest(userDataAdmin);
        if (userAdmin.data.length != 0 && !userAdmin.data[0].is_superuser && userAdmin.data[0].administrador != null) {

            if (userAdmin.data[0].administrador.activo) {

                const userData = {
                    method: "get",
                    url: "negocio/aliadocrud/?query=2",
                };

                let aliado = await this.customRequest(userData);

                if (aliado.data[0].disponible) {

                    //Guarda el aliado con los administradores y la empresa
                    TokenService.saveAliado(aliado.data[0]);

                    // Guardar usuario + administrador
                    TokenService.saveUser(userAdmin.data[0]);

                    //Guardar token web notificaciones
                    this.saveTokenWeb(userAdmin.data[0].administrador.id);

                    Swal.fire({
                        icon: "success",
                        title: "Validación completada",
                        text: "Bienvenido(a), " +
                            userAdmin.data[0].administrador.nombre +
                            " " +
                            userAdmin.data[0].administrador.apellido,
                        showConfirmButton: false,
                        timer: 3500,
                    });
                } else {
                    TokenService.removeToken();
                    Swal.fire({
                        icon: "warning",
                        title: "Oops...",
                        html: 'No tiene permiso de acceso ' +
                            '<a href="https://kotti.com.co/#newAlly">Soporte</a>',
                        showConfirmButton: false,
                        timer: 3500,
                    });
                }
            } else {
                TokenService.removeToken();
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    html: 'No tiene permiso de acceso ' +
                        '<a href="https://kotti.com.co/">Soporte</a>',
                    showConfirmButton: false,
                });
            }


        } else if (userAdmin.data.length != 0 && userAdmin.data[0].kottigo != null && userAdmin.data[0].kottigo.coordinador == null) {
            TokenService.saveUser(userAdmin.data[0]);
            Swal.fire({
                icon: "success",
                title: "Validación completada",
                text: "Bienvenido(a), " +
                    userAdmin.data[0].first_name +
                    " " +
                    userAdmin.data[0].last_name,
                showConfirmButton: false,
                timer: 3500,
            });
        } else {
            TokenService.removeToken();
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Con los credenciales proporcionados no tiene acceso",
                showConfirmButton: false,
                timer: 3500,
            });
        }

    },

    async getAccess(username, password) {
        try {
            await this.getToken(username, password);
            await this.getAliadoAdmin();
        } catch (error) {
            Swal.close();
            if (error.response) {
                console.log(error.response);
                Swal.fire({
                    icon: "info",
                    title: "Oops...",
                    text: error.response.data.non_field_errors,
                    showConfirmButton: false,
                    timer: 3500,
                });
            }
        }
    },

};

export default ApiService;