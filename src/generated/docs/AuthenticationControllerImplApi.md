# LewkinTiendaOnline.AuthenticationControllerImplApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fakeLogout**](AuthenticationControllerImplApi.md#fakeLogout) | **POST** /api/v1/auth/logout | Log out a user
[**login**](AuthenticationControllerImplApi.md#login) | **POST** /api/v1/auth/login | Log in a user
[**recoverPassword**](AuthenticationControllerImplApi.md#recoverPassword) | **POST** /api/v1/auth/recover | 
[**register**](AuthenticationControllerImplApi.md#register) | **POST** /api/v1/auth/register | Register a user
[**resendVerification**](AuthenticationControllerImplApi.md#resendVerification) | **POST** /api/v1/auth/verification/resend | 
[**sendPasswordRecoveryMail**](AuthenticationControllerImplApi.md#sendPasswordRecoveryMail) | **POST** /api/v1/auth/recover/send | 
[**verifyEmailByToken**](AuthenticationControllerImplApi.md#verifyEmailByToken) | **GET** /api/v1/auth/verification/verify | Verifies an new user&#39;s email



## fakeLogout

> fakeLogout()

Log out a user

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';
let defaultClient = LewkinTiendaOnline.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: Bearer Authentication
let Bearer Authentication = defaultClient.authentications['Bearer Authentication'];
Bearer Authentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
apiInstance.fakeLogout((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## login

> AuthenticationResponse login(loginRequest)

Log in a user

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';
let defaultClient = LewkinTiendaOnline.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: Bearer Authentication
let Bearer Authentication = defaultClient.authentications['Bearer Authentication'];
Bearer Authentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
let loginRequest = new LewkinTiendaOnline.LoginRequest(); // LoginRequest | 
apiInstance.login(loginRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

[Bearer Authentication](../README.md#Bearer Authentication)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recoverPassword

> SendPasswordRecoverMailResponse recoverPassword(token, passwordRecoveryRequest)



### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
let token = "token_example"; // String | 
let passwordRecoveryRequest = new LewkinTiendaOnline.PasswordRecoveryRequest(); // PasswordRecoveryRequest | 
apiInstance.recoverPassword(token, passwordRecoveryRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 
 **passwordRecoveryRequest** | [**PasswordRecoveryRequest**](PasswordRecoveryRequest.md)|  | 

### Return type

[**SendPasswordRecoverMailResponse**](SendPasswordRecoverMailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## register

> AuthenticationResponse register(registerRequest)

Register a user

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
let registerRequest = new LewkinTiendaOnline.RegisterRequest(); // RegisterRequest | 
apiInstance.register(registerRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerRequest** | [**RegisterRequest**](RegisterRequest.md)|  | 

### Return type

[**AuthenticationResponse**](AuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## resendVerification

> ResendVerificationResponse resendVerification()



### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
apiInstance.resendVerification((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ResendVerificationResponse**](ResendVerificationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendPasswordRecoveryMail

> SendPasswordRecoverMailResponse sendPasswordRecoveryMail(askForPasswordRecoveryRequest)



### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
let askForPasswordRecoveryRequest = new LewkinTiendaOnline.AskForPasswordRecoveryRequest(); // AskForPasswordRecoveryRequest | 
apiInstance.sendPasswordRecoveryMail(askForPasswordRecoveryRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **askForPasswordRecoveryRequest** | [**AskForPasswordRecoveryRequest**](AskForPasswordRecoveryRequest.md)|  | 

### Return type

[**SendPasswordRecoverMailResponse**](SendPasswordRecoverMailResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## verifyEmailByToken

> String verifyEmailByToken(token)

Verifies an new user&#39;s email

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.AuthenticationControllerImplApi();
let token = "token_example"; // String | 
apiInstance.verifyEmailByToken(token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

