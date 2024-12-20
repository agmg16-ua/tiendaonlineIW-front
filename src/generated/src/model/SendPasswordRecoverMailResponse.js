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

import ApiClient from '../ApiClient';

/**
 * The SendPasswordRecoverMailResponse model module.
 * @module model/SendPasswordRecoverMailResponse
 * @version 1.0.0
 */
class SendPasswordRecoverMailResponse {
    /**
     * Constructs a new <code>SendPasswordRecoverMailResponse</code>.
     * @alias module:model/SendPasswordRecoverMailResponse
     */
    constructor() { 
        
        SendPasswordRecoverMailResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendPasswordRecoverMailResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendPasswordRecoverMailResponse} obj Optional instance to populate.
     * @return {module:model/SendPasswordRecoverMailResponse} The populated <code>SendPasswordRecoverMailResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendPasswordRecoverMailResponse();

            if (data.hasOwnProperty('ok')) {
                obj['ok'] = ApiClient.convertToType(data['ok'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SendPasswordRecoverMailResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SendPasswordRecoverMailResponse</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} ok
 */
SendPasswordRecoverMailResponse.prototype['ok'] = undefined;






export default SendPasswordRecoverMailResponse;

