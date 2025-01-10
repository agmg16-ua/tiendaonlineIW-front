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
import ErrorResponse from '../model/ErrorResponse';
import ProductoData from '../model/ProductoData';

/**
* ProductoController service.
* @module api/ProductoControllerApi
* @version 1.0.0
*/
export default class ProductoControllerApi {

    /**
    * Constructs a new ProductoControllerApi. 
    * @alias module:api/ProductoControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listadoColeccionGimnasio operation.
     * @callback module:api/ProductoControllerApi~listadoColeccionGimnasioCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductoData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ProductoControllerApi~listadoColeccionGimnasioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductoData>}
     */
    listadoColeccionGimnasio(callback) {
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
      let returnType = [ProductoData];
      return this.apiClient.callApi(
        '/lewkin/api/gimnasio', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listadoColeccionHotel operation.
     * @callback module:api/ProductoControllerApi~listadoColeccionHotelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProductoData>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ProductoControllerApi~listadoColeccionHotelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProductoData>}
     */
    listadoColeccionHotel(callback) {
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
      let returnType = [ProductoData];
      return this.apiClient.callApi(
        '/lewkin/api/hotel', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
