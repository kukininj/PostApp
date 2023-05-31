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
 * @interface NewMessage
 */
export interface NewMessage {
    /**
     * 
     * @type {string}
     * @memberof NewMessage
     */
    contents?: string;
}

/**
 * Check if a given object implements the NewMessage interface.
 */
export function instanceOfNewMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewMessageFromJSON(json: any): NewMessage {
    return NewMessageFromJSONTyped(json, false);
}

export function NewMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': !exists(json, 'contents') ? undefined : json['contents'],
    };
}

export function NewMessageToJSON(value?: NewMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': value.contents,
    };
}

