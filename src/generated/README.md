# lewkin_tienda_online

LewkinTiendaOnline - JavaScript client for lewkin_tienda_online
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.10.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install lewkin_tienda_online --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your lewkin_tienda_online from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LewkinTiendaOnline = require('lewkin_tienda_online');

var defaultClient = LewkinTiendaOnline.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: Bearer Authentication
var Bearer Authentication = defaultClient.authentications['Bearer Authentication'];
Bearer Authentication.accessToken = "YOUR ACCESS TOKEN"

var api = new LewkinTiendaOnline.AuthenticationControllerImplApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.fakeLogout(callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**fakeLogout**](docs/AuthenticationControllerImplApi.md#fakeLogout) | **POST** /api/v1/auth/logout | Log out a user
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**login**](docs/AuthenticationControllerImplApi.md#login) | **POST** /api/v1/auth/login | Log in a user
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**recoverPassword**](docs/AuthenticationControllerImplApi.md#recoverPassword) | **POST** /api/v1/auth/recover | 
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**register**](docs/AuthenticationControllerImplApi.md#register) | **POST** /api/v1/auth/register | Register a user
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**resendVerification**](docs/AuthenticationControllerImplApi.md#resendVerification) | **POST** /api/v1/auth/verification/resend | 
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**sendPasswordRecoveryMail**](docs/AuthenticationControllerImplApi.md#sendPasswordRecoveryMail) | **POST** /api/v1/auth/recover/send | 
*LewkinTiendaOnline.AuthenticationControllerImplApi* | [**verifyEmailByToken**](docs/AuthenticationControllerImplApi.md#verifyEmailByToken) | **GET** /api/v1/auth/verification/verify | Verifies an new user&#39;s email
*LewkinTiendaOnline.DemoControllerImplApi* | [**demoHasAdminRole**](docs/DemoControllerImplApi.md#demoHasAdminRole) | **GET** /api/v1/auth/demo/role/admin | Checks if user has ADMIN role
*LewkinTiendaOnline.DemoControllerImplApi* | [**demoHasUserRole**](docs/DemoControllerImplApi.md#demoHasUserRole) | **GET** /api/v1/demo/role/user | Checks if user has USER role
*LewkinTiendaOnline.DemoControllerImplApi* | [**demoNoAuthentication**](docs/DemoControllerImplApi.md#demoNoAuthentication) | **GET** /demo | Test an endpoint without authentication
*LewkinTiendaOnline.ProductoControllerApi* | [**listadoColeccionGimnasio**](docs/ProductoControllerApi.md#listadoColeccionGimnasio) | **GET** /lewkin/api/gimnasio | 
*LewkinTiendaOnline.ProductoControllerApi* | [**listadoColeccionHotel**](docs/ProductoControllerApi.md#listadoColeccionHotel) | **GET** /lewkin/api/hotel | 


## Documentation for Models

 - [LewkinTiendaOnline.AskForPasswordRecoveryRequest](docs/AskForPasswordRecoveryRequest.md)
 - [LewkinTiendaOnline.AuthenticationResponse](docs/AuthenticationResponse.md)
 - [LewkinTiendaOnline.ErrorResponse](docs/ErrorResponse.md)
 - [LewkinTiendaOnline.LoginRequest](docs/LoginRequest.md)
 - [LewkinTiendaOnline.PasswordRecoveryRequest](docs/PasswordRecoveryRequest.md)
 - [LewkinTiendaOnline.ProductoData](docs/ProductoData.md)
 - [LewkinTiendaOnline.RegisterRequest](docs/RegisterRequest.md)
 - [LewkinTiendaOnline.ResendVerificationResponse](docs/ResendVerificationResponse.md)
 - [LewkinTiendaOnline.SendPasswordRecoverMailResponse](docs/SendPasswordRecoverMailResponse.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### Bearer Authentication

- **Type**: Bearer authentication (JWT)

