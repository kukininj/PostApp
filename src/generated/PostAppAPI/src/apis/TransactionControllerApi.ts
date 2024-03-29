/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Message,
  NewMessage,
  NewTransactionRequest,
  NewTransactionResponse,
  Transaction,
} from '../models';
import {
    MessageFromJSON,
    MessageToJSON,
    NewMessageFromJSON,
    NewMessageToJSON,
    NewTransactionRequestFromJSON,
    NewTransactionRequestToJSON,
    NewTransactionResponseFromJSON,
    NewTransactionResponseToJSON,
    TransactionFromJSON,
    TransactionToJSON,
} from '../models';

export interface GetInfoRequest {
    transactionId: string;
}

export interface GetMessagesRequest {
    transactionId: string;
}

export interface NewTransactionOperationRequest {
    newTransactionRequest: NewTransactionRequest;
}

export interface SendMessageRequest {
    transactionId: string;
    newMessage: NewMessage;
}

/**
 * 
 */
export class TransactionControllerApi extends runtime.BaseAPI {

    /**
     */
    async getInfoRaw(requestParameters: GetInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/transaction/{transaction_id}/info`.replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     */
    async getInfo(requestParameters: GetInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.getInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getMessagesRaw(requestParameters: GetMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Message>>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling getMessages.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/transaction/{transaction_id}/messages`.replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MessageFromJSON));
    }

    /**
     */
    async getMessages(requestParameters: GetMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Message>> {
        const response = await this.getMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async newTransactionRaw(requestParameters: NewTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NewTransactionResponse>> {
        if (requestParameters.newTransactionRequest === null || requestParameters.newTransactionRequest === undefined) {
            throw new runtime.RequiredError('newTransactionRequest','Required parameter requestParameters.newTransactionRequest was null or undefined when calling newTransaction.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transaction/new`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewTransactionRequestToJSON(requestParameters.newTransactionRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NewTransactionResponseFromJSON(jsonValue));
    }

    /**
     */
    async newTransaction(requestParameters: NewTransactionOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NewTransactionResponse> {
        const response = await this.newTransactionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async sendMessageRaw(requestParameters: SendMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling sendMessage.');
        }

        if (requestParameters.newMessage === null || requestParameters.newMessage === undefined) {
            throw new runtime.RequiredError('newMessage','Required parameter requestParameters.newMessage was null or undefined when calling sendMessage.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/transaction/{transaction_id}/send_message`.replace(`{${"transaction_id"}}`, encodeURIComponent(String(requestParameters.transactionId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewMessageToJSON(requestParameters.newMessage),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async sendMessage(requestParameters: SendMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.sendMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
