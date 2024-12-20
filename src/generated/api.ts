/* tslint:disable */
/* eslint-disable */
/**
 * Lewkin Tienda Online
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface AskForPasswordRecoveryRequest
 */
export interface AskForPasswordRecoveryRequest {
    /**
     * 
     * @type {string}
     * @memberof AskForPasswordRecoveryRequest
     */
    'email': string;
}
/**
 * 
 * @export
 * @interface AuthenticationResponse
 */
export interface AuthenticationResponse {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationResponse
     */
    'jwt'?: string;
}
/**
 * 
 * @export
 * @interface ErrorResponse
 */
export interface ErrorResponse {
    /**
     * 
     * @type {string}
     * @memberof ErrorResponse
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface PasswordRecoveryRequest
 */
export interface PasswordRecoveryRequest {
    /**
     * 
     * @type {string}
     * @memberof PasswordRecoveryRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RegisterRequest
 */
export interface RegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface ResendVerificationResponse
 */
export interface ResendVerificationResponse {
    /**
     * 
     * @type {boolean}
     * @memberof ResendVerificationResponse
     */
    'ok'?: boolean;
}
/**
 * 
 * @export
 * @interface SendPasswordRecoverMailResponse
 */
export interface SendPasswordRecoverMailResponse {
    /**
     * 
     * @type {boolean}
     * @memberof SendPasswordRecoverMailResponse
     */
    'ok'?: boolean;
}

/**
 * AuthenticationControllerImplApi - axios parameter creator
 * @export
 */
export const AuthenticationControllerImplApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Log out a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fakeLogout: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (loginRequest: LoginRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('login', 'loginRequest', loginRequest)
            const localVarPath = `/api/v1/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} token 
         * @param {PasswordRecoveryRequest} passwordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword: async (token: string, passwordRecoveryRequest: PasswordRecoveryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('recoverPassword', 'token', token)
            // verify required parameter 'passwordRecoveryRequest' is not null or undefined
            assertParamExists('recoverPassword', 'passwordRecoveryRequest', passwordRecoveryRequest)
            const localVarPath = `/api/v1/auth/recover`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(passwordRecoveryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (registerRequest: RegisterRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequest' is not null or undefined
            assertParamExists('register', 'registerRequest', registerRequest)
            const localVarPath = `/api/v1/auth/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendVerification: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/auth/verification/resend`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {AskForPasswordRecoveryRequest} askForPasswordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendPasswordRecoveryMail: async (askForPasswordRecoveryRequest: AskForPasswordRecoveryRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'askForPasswordRecoveryRequest' is not null or undefined
            assertParamExists('sendPasswordRecoveryMail', 'askForPasswordRecoveryRequest', askForPasswordRecoveryRequest)
            const localVarPath = `/api/v1/auth/recover/send`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(askForPasswordRecoveryRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Verifies an new user\'s email
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyEmailByToken: async (token: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('verifyEmailByToken', 'token', token)
            const localVarPath = `/api/v1/auth/verification/verify`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationControllerImplApi - functional programming interface
 * @export
 */
export const AuthenticationControllerImplApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationControllerImplApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Log out a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fakeLogout(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.fakeLogout(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.fakeLogout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(loginRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.login']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} token 
         * @param {PasswordRecoveryRequest} passwordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recoverPassword(token: string, passwordRecoveryRequest: PasswordRecoveryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendPasswordRecoverMailResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.recoverPassword(token, passwordRecoveryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.recoverPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(registerRequest: RegisterRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(registerRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.register']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resendVerification(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResendVerificationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resendVerification(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.resendVerification']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {AskForPasswordRecoveryRequest} askForPasswordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendPasswordRecoveryMail(askForPasswordRecoveryRequest: AskForPasswordRecoveryRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SendPasswordRecoverMailResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendPasswordRecoveryMail(askForPasswordRecoveryRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.sendPasswordRecoveryMail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Verifies an new user\'s email
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyEmailByToken(token: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyEmailByToken(token, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthenticationControllerImplApi.verifyEmailByToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthenticationControllerImplApi - factory interface
 * @export
 */
export const AuthenticationControllerImplApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationControllerImplApiFp(configuration)
    return {
        /**
         * 
         * @summary Log out a user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fakeLogout(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.fakeLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Log in a user
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationResponse> {
            return localVarFp.login(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} token 
         * @param {PasswordRecoveryRequest} passwordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recoverPassword(token: string, passwordRecoveryRequest: PasswordRecoveryRequest, options?: RawAxiosRequestConfig): AxiosPromise<SendPasswordRecoverMailResponse> {
            return localVarFp.recoverPassword(token, passwordRecoveryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Register a user
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(registerRequest: RegisterRequest, options?: RawAxiosRequestConfig): AxiosPromise<AuthenticationResponse> {
            return localVarFp.register(registerRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resendVerification(options?: RawAxiosRequestConfig): AxiosPromise<ResendVerificationResponse> {
            return localVarFp.resendVerification(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {AskForPasswordRecoveryRequest} askForPasswordRecoveryRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendPasswordRecoveryMail(askForPasswordRecoveryRequest: AskForPasswordRecoveryRequest, options?: RawAxiosRequestConfig): AxiosPromise<SendPasswordRecoverMailResponse> {
            return localVarFp.sendPasswordRecoveryMail(askForPasswordRecoveryRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Verifies an new user\'s email
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyEmailByToken(token: string, options?: RawAxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.verifyEmailByToken(token, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationControllerImplApi - object-oriented interface
 * @export
 * @class AuthenticationControllerImplApi
 * @extends {BaseAPI}
 */
export class AuthenticationControllerImplApi extends BaseAPI {
    /**
     * 
     * @summary Log out a user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public fakeLogout(options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).fakeLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Log in a user
     * @param {LoginRequest} loginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public login(loginRequest: LoginRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).login(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} token 
     * @param {PasswordRecoveryRequest} passwordRecoveryRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public recoverPassword(token: string, passwordRecoveryRequest: PasswordRecoveryRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).recoverPassword(token, passwordRecoveryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Register a user
     * @param {RegisterRequest} registerRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public register(registerRequest: RegisterRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).register(registerRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public resendVerification(options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).resendVerification(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {AskForPasswordRecoveryRequest} askForPasswordRecoveryRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public sendPasswordRecoveryMail(askForPasswordRecoveryRequest: AskForPasswordRecoveryRequest, options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).sendPasswordRecoveryMail(askForPasswordRecoveryRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Verifies an new user\'s email
     * @param {string} token 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationControllerImplApi
     */
    public verifyEmailByToken(token: string, options?: RawAxiosRequestConfig) {
        return AuthenticationControllerImplApiFp(this.configuration).verifyEmailByToken(token, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * DemoControllerImplApi - axios parameter creator
 * @export
 */
export const DemoControllerImplApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Checks if user has ADMIN role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoHasAdminRole: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/auth/demo/role/admin`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Checks if user has USER role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoHasUserRole: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/demo/role/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Test an endpoint without authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoNoAuthentication: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/demo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DemoControllerImplApi - functional programming interface
 * @export
 */
export const DemoControllerImplApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DemoControllerImplApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Checks if user has ADMIN role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async demoHasAdminRole(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.demoHasAdminRole(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DemoControllerImplApi.demoHasAdminRole']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Checks if user has USER role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async demoHasUserRole(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.demoHasUserRole(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DemoControllerImplApi.demoHasUserRole']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Test an endpoint without authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async demoNoAuthentication(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.demoNoAuthentication(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DemoControllerImplApi.demoNoAuthentication']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DemoControllerImplApi - factory interface
 * @export
 */
export const DemoControllerImplApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DemoControllerImplApiFp(configuration)
    return {
        /**
         * 
         * @summary Checks if user has ADMIN role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoHasAdminRole(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.demoHasAdminRole(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Checks if user has USER role
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoHasUserRole(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.demoHasUserRole(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Test an endpoint without authentication
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        demoNoAuthentication(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.demoNoAuthentication(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DemoControllerImplApi - object-oriented interface
 * @export
 * @class DemoControllerImplApi
 * @extends {BaseAPI}
 */
export class DemoControllerImplApi extends BaseAPI {
    /**
     * 
     * @summary Checks if user has ADMIN role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DemoControllerImplApi
     */
    public demoHasAdminRole(options?: RawAxiosRequestConfig) {
        return DemoControllerImplApiFp(this.configuration).demoHasAdminRole(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Checks if user has USER role
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DemoControllerImplApi
     */
    public demoHasUserRole(options?: RawAxiosRequestConfig) {
        return DemoControllerImplApiFp(this.configuration).demoHasUserRole(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Test an endpoint without authentication
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DemoControllerImplApi
     */
    public demoNoAuthentication(options?: RawAxiosRequestConfig) {
        return DemoControllerImplApiFp(this.configuration).demoNoAuthentication(options).then((request) => request(this.axios, this.basePath));
    }
}



