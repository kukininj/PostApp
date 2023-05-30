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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof Message
     */
    added?: Date;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    contents?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    transactionId?: string;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'added': !exists(json, 'added') ? undefined : (new Date(json['added'])),
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
    };
}

export function MessageToJSON(value?: Message | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'added': value.added === undefined ? undefined : (value.added.toISOString()),
        'contents': value.contents,
        'userId': value.userId,
        'transactionId': value.transactionId,
    };
}

