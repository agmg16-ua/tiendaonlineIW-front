declare module '@/generated/src/model/LoginRequest' {
    export default class LoginRequest {
      /**
       * Constructs a new <code>LoginRequest</code>.
       * @param email {string}
       * @param password {string}
       */
      constructor(email: string, password: string);
  
      /**
       * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
       * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
       * @param data The plain JavaScript object bearing properties of interest.
       * @param obj Optional instance to populate.
       * @return {LoginRequest} The populated <code>LoginRequest</code> instance.
       */
      static constructFromObject(data: any, obj?: LoginRequest): LoginRequest;
  
      email: string;
      password: string;
    }
  }
  