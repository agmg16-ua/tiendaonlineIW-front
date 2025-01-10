# LewkinTiendaOnline.ProductoControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listadoColeccionGimnasio**](ProductoControllerApi.md#listadoColeccionGimnasio) | **GET** /lewkin/api/gimnasio | 
[**listadoColeccionHotel**](ProductoControllerApi.md#listadoColeccionHotel) | **GET** /lewkin/api/hotel | 



## listadoColeccionGimnasio

> [ProductoData] listadoColeccionGimnasio()



### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.ProductoControllerApi();
apiInstance.listadoColeccionGimnasio((error, data, response) => {
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

[**[ProductoData]**](ProductoData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listadoColeccionHotel

> [ProductoData] listadoColeccionHotel()



### Example

```javascript
import LewkinTiendaOnline from 'lewkin_tienda_online';

let apiInstance = new LewkinTiendaOnline.ProductoControllerApi();
apiInstance.listadoColeccionHotel((error, data, response) => {
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

[**[ProductoData]**](ProductoData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

