# LewkinTiendaOnline.DemoControllerImplApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**demoHasAdminRole**](DemoControllerImplApi.md#demoHasAdminRole) | **GET** /api/v1/auth/demo/role/admin | Checks if user has ADMIN role
[**demoHasUserRole**](DemoControllerImplApi.md#demoHasUserRole) | **GET** /api/v1/demo/role/user | Checks if user has USER role
[**demoNoAuthentication**](DemoControllerImplApi.md#demoNoAuthentication) | **GET** /demo | Test an endpoint without authentication



## demoHasAdminRole

> demoHasAdminRole()

Checks if user has ADMIN role

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';
let defaultClient = LewkinTiendaOnline.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: Bearer Authentication
let Bearer Authentication = defaultClient.authentications['Bearer Authentication'];
Bearer Authentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LewkinTiendaOnline.DemoControllerImplApi();
apiInstance.demoHasAdminRole((error, data, response) => {
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


## demoHasUserRole

> demoHasUserRole()

Checks if user has USER role

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';
let defaultClient = LewkinTiendaOnline.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: Bearer Authentication
let Bearer Authentication = defaultClient.authentications['Bearer Authentication'];
Bearer Authentication.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new LewkinTiendaOnline.DemoControllerImplApi();
apiInstance.demoHasUserRole((error, data, response) => {
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


## demoNoAuthentication

> demoNoAuthentication()

Test an endpoint without authentication

### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.DemoControllerImplApi();
apiInstance.demoNoAuthentication((error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

