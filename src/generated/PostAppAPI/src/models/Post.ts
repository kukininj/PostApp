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
import type { Picture } from './Picture';
import {
    PictureFromJSON,
    PictureFromJSONTyped,
    PictureToJSON,
} from './Picture';
import type { PostCategory } from './PostCategory';
import {
    PostCategoryFromJSON,
    PostCategoryFromJSONTyped,
    PostCategoryToJSON,
} from './PostCategory';
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface Post
 */
export interface Post {
    /**
     * 
     * @type {number}
     * @memberof Post
     */
    id?: number;
    /**
     * 
     * @type {User}
     * @memberof Post
     */
    creator?: User;
    /**
     * 
     * @type {Picture}
     * @memberof Post
     */
    picture?: Picture;
    /**
     * 
     * @type {PostCategory}
     * @memberof Post
     */
    category?: PostCategory;
    /**
     * 
     * @type {Date}
     * @memberof Post
     */
    added?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Post
     */
    edited?: Date;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof Post
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof Post
     */
    area?: string;
}

/**
 * Check if a given object implements the Post interface.
 */
export function instanceOfPost(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostFromJSON(json: any): Post {
    return PostFromJSONTyped(json, false);
}

export function PostFromJSONTyped(json: any, ignoreDiscriminator: boolean): Post {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'creator': !exists(json, 'creator') ? undefined : UserFromJSON(json['creator']),
        'picture': !exists(json, 'picture') ? undefined : PictureFromJSON(json['picture']),
        'category': !exists(json, 'category') ? undefined : PostCategoryFromJSON(json['category']),
        'added': !exists(json, 'added') ? undefined : (new Date(json['added'])),
        'edited': !exists(json, 'edited') ? undefined : (new Date(json['edited'])),
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'area': !exists(json, 'area') ? undefined : json['area'],
    };
}

export function PostToJSON(value?: Post | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'creator': UserToJSON(value.creator),
        'picture': PictureToJSON(value.picture),
        'category': PostCategoryToJSON(value.category),
        'added': value.added === undefined ? undefined : (value.added.toISOString()),
        'edited': value.edited === undefined ? undefined : (value.edited.toISOString()),
        'title': value.title,
        'description': value.description,
        'price': value.price,
        'area': value.area,
    };
}

