const baseUrl = 'http://localhost:8080/';

//Auth Endpoints
export const VerificarionResendEndpoint = baseUrl + 'api/v1/auth/verification/resend';
export const RegisterEndpoint = baseUrl + 'api/v1/auth/register';
export const RecoverEndpoint = baseUrl + 'api/v1/auth/recover'; 
export const RecoverSendEndpoint = baseUrl + 'api/v1/auth/recover/send';
export const LogoutEndpoint = baseUrl + 'api/v1/auth/logout';
export const LoginEndpoint = baseUrl + 'api/v1/auth/login';
export const VerificarionVerityEndpoint = baseUrl + 'api/v1/auth/verification/verify';

export const authEndpoints = {
    VerificarionResendEndpoint,
    RegisterEndpoint,
    RecoverEndpoint,
    RecoverSendEndpoint,
    LogoutEndpoint,
    LoginEndpoint,
    VerificarionVerityEndpoint
}
