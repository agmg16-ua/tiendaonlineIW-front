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


import ApiClient from './ApiClient';
import AskForPasswordRecoveryRequest from './model/AskForPasswordRecoveryRequest';
import AuthenticationResponse from './model/AuthenticationResponse';
import ErrorResponse from './model/ErrorResponse';
import LoginRequest from './model/LoginRequest';
import PasswordRecoveryRequest from './model/PasswordRecoveryRequest';
import ProductoData from './model/ProductoData';
import RegisterRequest from './model/RegisterRequest';
import ResendVerificationResponse from './model/ResendVerificationResponse';
import SendPasswordRecoverMailResponse from './model/SendPasswordRecoverMailResponse';
import AuthenticationControllerImplApi from './api/AuthenticationControllerImplApi';
import DemoControllerImplApi from './api/DemoControllerImplApi';
import ProductoControllerApi from './api/ProductoControllerApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var LewkinTiendaOnline = require('index'); // See note below*.
* var xxxSvc = new LewkinTiendaOnline.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new LewkinTiendaOnline.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new LewkinTiendaOnline.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new LewkinTiendaOnline.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AskForPasswordRecoveryRequest model constructor.
     * @property {module:model/AskForPasswordRecoveryRequest}
     */
    AskForPasswordRecoveryRequest,

    /**
     * The AuthenticationResponse model constructor.
     * @property {module:model/AuthenticationResponse}
     */
    AuthenticationResponse,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest,

    /**
     * The PasswordRecoveryRequest model constructor.
     * @property {module:model/PasswordRecoveryRequest}
     */
    PasswordRecoveryRequest,

    /**
     * The ProductoData model constructor.
     * @property {module:model/ProductoData}
     */
    ProductoData,

    /**
     * The RegisterRequest model constructor.
     * @property {module:model/RegisterRequest}
     */
    RegisterRequest,

    /**
     * The ResendVerificationResponse model constructor.
     * @property {module:model/ResendVerificationResponse}
     */
    ResendVerificationResponse,

    /**
     * The SendPasswordRecoverMailResponse model constructor.
     * @property {module:model/SendPasswordRecoverMailResponse}
     */
    SendPasswordRecoverMailResponse,

    /**
    * The AuthenticationControllerImplApi service constructor.
    * @property {module:api/AuthenticationControllerImplApi}
    */
    AuthenticationControllerImplApi,

    /**
    * The DemoControllerImplApi service constructor.
    * @property {module:api/DemoControllerImplApi}
    */
    DemoControllerImplApi,

    /**
    * The ProductoControllerApi service constructor.
    * @property {module:api/ProductoControllerApi}
    */
    ProductoControllerApi
};
