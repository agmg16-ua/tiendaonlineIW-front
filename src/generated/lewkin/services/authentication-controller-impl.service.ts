/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AuthenticationResponse } from '../models/authentication-response';
import { fakeLogout } from '../fn/authentication-controller-impl/fake-logout';
import { FakeLogout$Params } from '../fn/authentication-controller-impl/fake-logout';
import { login } from '../fn/authentication-controller-impl/login';
import { Login$Params } from '../fn/authentication-controller-impl/login';
import { recoverPassword } from '../fn/authentication-controller-impl/recover-password';
import { RecoverPassword$Params } from '../fn/authentication-controller-impl/recover-password';
import { register } from '../fn/authentication-controller-impl/register';
import { Register$Params } from '../fn/authentication-controller-impl/register';
import { resendVerification } from '../fn/authentication-controller-impl/resend-verification';
import { ResendVerification$Params } from '../fn/authentication-controller-impl/resend-verification';
import { ResendVerificationResponse } from '../models/resend-verification-response';
import { SendPasswordRecoverMailResponse } from '../models/send-password-recover-mail-response';
import { sendPasswordRecoveryMail } from '../fn/authentication-controller-impl/send-password-recovery-mail';
import { SendPasswordRecoveryMail$Params } from '../fn/authentication-controller-impl/send-password-recovery-mail';
import { verifyEmailByToken } from '../fn/authentication-controller-impl/verify-email-by-token';
import { VerifyEmailByToken$Params } from '../fn/authentication-controller-impl/verify-email-by-token';

@Injectable({ providedIn: 'root' })
export class AuthenticationControllerImplService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `resendVerification()` */
  static readonly ResendVerificationPath = '/api/v1/auth/verification/resend';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `resendVerification()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendVerification$Response(params?: ResendVerification$Params, context?: HttpContext): Observable<StrictHttpResponse<ResendVerificationResponse>> {
    return resendVerification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `resendVerification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  resendVerification(params?: ResendVerification$Params, context?: HttpContext): Observable<ResendVerificationResponse> {
    return this.resendVerification$Response(params, context).pipe(
      map((r: StrictHttpResponse<ResendVerificationResponse>): ResendVerificationResponse => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/api/v1/auth/register';

  /**
   * Register a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `recoverPassword()` */
  static readonly RecoverPasswordPath = '/api/v1/auth/recover';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `recoverPassword()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recoverPassword$Response(params: RecoverPassword$Params, context?: HttpContext): Observable<StrictHttpResponse<SendPasswordRecoverMailResponse>> {
    return recoverPassword(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `recoverPassword$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  recoverPassword(params: RecoverPassword$Params, context?: HttpContext): Observable<SendPasswordRecoverMailResponse> {
    return this.recoverPassword$Response(params, context).pipe(
      map((r: StrictHttpResponse<SendPasswordRecoverMailResponse>): SendPasswordRecoverMailResponse => r.body)
    );
  }

  /** Path part for operation `sendPasswordRecoveryMail()` */
  static readonly SendPasswordRecoveryMailPath = '/api/v1/auth/recover/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `sendPasswordRecoveryMail()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPasswordRecoveryMail$Response(params: SendPasswordRecoveryMail$Params, context?: HttpContext): Observable<StrictHttpResponse<SendPasswordRecoverMailResponse>> {
    return sendPasswordRecoveryMail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `sendPasswordRecoveryMail$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  sendPasswordRecoveryMail(params: SendPasswordRecoveryMail$Params, context?: HttpContext): Observable<SendPasswordRecoverMailResponse> {
    return this.sendPasswordRecoveryMail$Response(params, context).pipe(
      map((r: StrictHttpResponse<SendPasswordRecoverMailResponse>): SendPasswordRecoverMailResponse => r.body)
    );
  }

  /** Path part for operation `fakeLogout()` */
  static readonly FakeLogoutPath = '/api/v1/auth/logout';

  /**
   * Log out a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fakeLogout()` instead.
   *
   * This method doesn't expect any request body.
   */
  fakeLogout$Response(params?: FakeLogout$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fakeLogout(this.http, this.rootUrl, params, context);
  }

  /**
   * Log out a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fakeLogout$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fakeLogout(params?: FakeLogout$Params, context?: HttpContext): Observable<void> {
    return this.fakeLogout$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `login()` */
  static readonly LoginPath = '/api/v1/auth/login';

  /**
   * Log in a user.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: Login$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return login(this.http, this.rootUrl, params, context);
  }

  /**
   * Log in a user.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: Login$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.login$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

  /** Path part for operation `verifyEmailByToken()` */
  static readonly VerifyEmailByTokenPath = '/api/v1/auth/verification/verify';

  /**
   * Verifies an new user's email.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `verifyEmailByToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyEmailByToken$Response(params: VerifyEmailByToken$Params, context?: HttpContext): Observable<StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>> {
    return verifyEmailByToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Verifies an new user's email.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `verifyEmailByToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  verifyEmailByToken(params: VerifyEmailByToken$Params, context?: HttpContext): Observable<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'> {
    return this.verifyEmailByToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<'100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED'>): '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 EARLY_HINTS' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED' => r.body)
    );
  }

}
