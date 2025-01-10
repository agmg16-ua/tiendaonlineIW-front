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
 *
 */


import ApiClient from "../ApiClient";
import AskForPasswordRecoveryRequest from '../model/AskForPasswordRecoveryRequest';
import AuthenticationResponse from '../model/AuthenticationResponse';
import ErrorResponse from '../model/ErrorResponse';
import LoginRequest from '../model/LoginRequest';
import PasswordRecoveryRequest from '../model/PasswordRecoveryRequest';
import RegisterRequest from '../model/RegisterRequest';
import ResendVerificationResponse from '../model/ResendVerificationResponse';
import SendPasswordRecoverMailResponse from '../model/SendPasswordRecoverMailResponse';

/**
* AuthenticationControllerImpl service.
* @module api/AuthenticationControllerImplApi
* @version 1.0.0
*/
export default class AuthenticationControllerImplApi {

    /**
    * Constructs a new AuthenticationControllerImplApi. 
    * @alias module:api/AuthenticationControllerImplApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fakeLogout operation.
     * @callback module:api/AuthenticationControllerImplApi~fakeLogoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out a user
     * @param {module:api/AuthenticationControllerImplApi~fakeLogoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    fakeLogout(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer Authentication'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/auth/logout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/AuthenticationControllerImplApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log in a user
     * @param {module:model/LoginRequest} loginRequest 
     * @param {module:api/AuthenticationControllerImplApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationResponse}
     */
    login(loginRequest, callback) {
      let postBody = loginRequest;
      // verify the required parameter 'loginRequest' is set
      if (loginRequest === undefined || loginRequest === null) {
        throw new Error("Missing the required parameter 'loginRequest' when calling login");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer Authentication'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationResponse;
      return this.apiClient.callApi(
        '/api/v1/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the recoverPassword operation.
     * @callback module:api/AuthenticationControllerImplApi~recoverPasswordCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendPasswordRecoverMailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} token 
     * @param {module:model/PasswordRecoveryRequest} passwordRecoveryRequest 
     * @param {module:api/AuthenticationControllerImplApi~recoverPasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendPasswordRecoverMailResponse}
     */
    recoverPassword(token, passwordRecoveryRequest, callback) {
      let postBody = passwordRecoveryRequest;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling recoverPassword");
      }
      // verify the required parameter 'passwordRecoveryRequest' is set
      if (passwordRecoveryRequest === undefined || passwordRecoveryRequest === null) {
        throw new Error("Missing the required parameter 'passwordRecoveryRequest' when calling recoverPassword");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendPasswordRecoverMailResponse;
      return this.apiClient.callApi(
        '/api/v1/auth/recover', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the register operation.
     * @callback module:api/AuthenticationControllerImplApi~registerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthenticationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register a user
     * @param {module:model/RegisterRequest} registerRequest 
     * @param {module:api/AuthenticationControllerImplApi~registerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthenticationResponse}
     */
    register(registerRequest, callback) {
      let postBody = registerRequest;
      // verify the required parameter 'registerRequest' is set
      if (registerRequest === undefined || registerRequest === null) {
        throw new Error("Missing the required parameter 'registerRequest' when calling register");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthenticationResponse;
      return this.apiClient.callApi(
        '/api/v1/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resendVerification operation.
     * @callback module:api/AuthenticationControllerImplApi~resendVerificationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResendVerificationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AuthenticationControllerImplApi~resendVerificationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResendVerificationResponse}
     */
    resendVerification(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ResendVerificationResponse;
      return this.apiClient.callApi(
        '/api/v1/auth/verification/resend', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendPasswordRecoveryMail operation.
     * @callback module:api/AuthenticationControllerImplApi~sendPasswordRecoveryMailCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SendPasswordRecoverMailResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/AskForPasswordRecoveryRequest} askForPasswordRecoveryRequest 
     * @param {module:api/AuthenticationControllerImplApi~sendPasswordRecoveryMailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SendPasswordRecoverMailResponse}
     */
    sendPasswordRecoveryMail(askForPasswordRecoveryRequest, callback) {
      let postBody = askForPasswordRecoveryRequest;
      // verify the required parameter 'askForPasswordRecoveryRequest' is set
      if (askForPasswordRecoveryRequest === undefined || askForPasswordRecoveryRequest === null) {
        throw new Error("Missing the required parameter 'askForPasswordRecoveryRequest' when calling sendPasswordRecoveryMail");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SendPasswordRecoverMailResponse;
      return this.apiClient.callApi(
        '/api/v1/auth/recover/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the verifyEmailByToken operation.
     * @callback module:api/AuthenticationControllerImplApi~verifyEmailByTokenCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verifies an new user's email
     * @param {String} token 
     * @param {module:api/AuthenticationControllerImplApi~verifyEmailByTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    verifyEmailByToken(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling verifyEmailByToken");
      }

      let pathParams = {
      };
      let queryParams = {
        'token': token
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v1/auth/verification/verify', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
