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
import type { Post } from './Post';
import {
    PostFromJSON,
    PostFromJSONTyped,
    PostToJSON,
} from './Post';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    id?: string;
    /**
     * 
     * @type {User}
     * @memberof Transaction
     */
    client?: User;
    /**
     * 
     * @type {User}
     * @memberof Transaction
     */
    merchant?: User;
    /**
     * 
     * @type {Post}
     * @memberof Transaction
     */
    post?: Post;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof Transaction
     */
    status?: TransactionStatusEnum;
    /**
     * 
     * @type {Date}
     * @memberof Transaction
     */
    added?: Date;
}


/**
 * @export
 */
export const TransactionStatusEnum = {
    NotViewed: 'NotViewed',
    AwaitingMerchantResponse: 'AwaitingMerchantResponse',
    AwaitingClientResponse: 'AwaitingClientResponse',
    FinishedSuccessfully: 'FinishedSuccessfully',
    Rejected: 'Rejected'
} as const;
export type TransactionStatusEnum = typeof TransactionStatusEnum[keyof typeof TransactionStatusEnum];


/**
 * Check if a given object implements the Transaction interface.
 */
export function instanceOfTransaction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'client': !exists(json, 'client') ? undefined : UserFromJSON(json['client']),
        'merchant': !exists(json, 'merchant') ? undefined : UserFromJSON(json['merchant']),
        'post': !exists(json, 'post') ? undefined : PostFromJSON(json['post']),
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'added': !exists(json, 'added') ? undefined : (new Date(json['added'])),
    };
}

export function TransactionToJSON(value?: Transaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'client': UserToJSON(value.client),
        'merchant': UserToJSON(value.merchant),
        'post': PostToJSON(value.post),
        'notes': value.notes,
        'status': value.status,
        'added': value.added === undefined ? undefined : (value.added.toISOString()),
    };
}

