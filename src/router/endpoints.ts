const baseUrl = 'http://localhost:8080';

//Demo Endpoints
export const DemoEndpoint = baseUrl + '/demo'
export const RoleUserEndpoint = baseUrl + '/api/v1/demo/role/user'
export const RoleHotelEndpoint = baseUrl + '/api/v1/auth/demo/role/hotel'
export const RoleGymEndpoint = baseUrl + '/api/v1/auth/demo/role/gym'
export const RoleAdminEndpoint = baseUrl + '/api/v1/auth/demo/role/admin'

export const demoEndpoints = {
    DemoEndpoint,
    RoleUserEndpoint,
    RoleHotelEndpoint,
    RoleGymEndpoint,
    RoleAdminEndpoint
}

//Auth Endpoints
export const VerificarionResendEndpoint = baseUrl + '/api/v1/auth/verification/resend';
export const RegisterEndpoint = baseUrl + '/api/v1/auth/register';
export const RecoverEndpoint = baseUrl + '/api/v1/auth/recover'; 
export const RecoverSendEndpoint = baseUrl + '/api/v1/auth/recover/send';
export const LogoutEndpoint = baseUrl + '/api/v1/auth/logout';
export const LoginEndpoint = baseUrl + '/api/v1/auth/login';
export const VerificarionVerityEndpoint = baseUrl + '/api/v1/auth/verification/verify';

export const authEndpoints = {
    VerificarionResendEndpoint,
    RegisterEndpoint,
    RecoverEndpoint,
    RecoverSendEndpoint,
    LogoutEndpoint,
    LoginEndpoint,
    VerificarionVerityEndpoint
}

//Products Endpoints
export const POSTProductEndpoint = baseUrl + '/lewkin/api/producto/nuevo';
export const POSTUpdateProductEndpoint = baseUrl + '/lewkin/api/producto/{id}/actualizar';
export const GETProductsEndpoint = baseUrl + '/lewkin/api/productos';
export const GETProductEndpoint = baseUrl +  '/lewkin/api/producto/{id}';
export const DELETEProductEndpoint = baseUrl + '/lewkin/api/producto/{id}/eliminar';
export const GETMenProductsEndpoint = baseUrl + '/lewkin/api/productos/hombre';
export const GETWomenProductsEndpoint = baseUrl + '/lewkin/api/productos/mujer';
export const GETNinoProductsEndpoint = baseUrl + '/lewkin/api/productos/nino';
export const GETNinaProductsEndpoint = baseUrl + '/lewkin/api/productos/nina';

export const productEndpoints = {
    POSTProductEndpoint,
    POSTUpdateProductEndpoint,
    GETProductsEndpoint,
    GETProductEndpoint,
    DELETEProductEndpoint,
    GETMenProductsEndpoint,
    GETWomenProductsEndpoint,
    GETNinoProductsEndpoint,
    GETNinaProductsEndpoint,
}

//Direccion Endpoints
export const POSTDireccionEndpoint = baseUrl + '/direccion/nueva'
export const POSTUpdateDireccionEndpoint = baseUrl + '/direccion/{id}/modificar'
export const GETDireccionesEndpoint = baseUrl + '/direcciones'
export const GETDireccionEndpoint = baseUrl + '/direccion/{id}'
export const DELETEDireccionEndpoint = baseUrl + '/direccion/{id}/eliminar'

export const direccionEndpoints = {
    POSTDireccionEndpoint,
    POSTUpdateDireccionEndpoint,
    GETDireccionesEndpoint,
    GETDireccionEndpoint,
    DELETEDireccionEndpoint
}

//Comentario Endpoints
export const POSTComentarioEndpoint = baseUrl + '/comentario/nuevo'
export const POSTUpdateComentarioEndpoint = baseUrl + '/comentario/{id}/modificar'
export const GETComentariosEndpoint = baseUrl + '/comentarios'
export const GETComentarioEndpoint = baseUrl + '/comentario/{comentarioId}'
export const DELETEComentarioEndpoint = baseUrl + '/comentario/{comentarioId}/eliminar'

export const comentarioEndpoints = {
    POSTComentarioEndpoint,
    POSTUpdateComentarioEndpoint,
    GETComentariosEndpoint,
    GETComentarioEndpoint,
    DELETEComentarioEndpoint
}
