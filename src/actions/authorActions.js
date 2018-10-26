import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadAuthorsSucess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function deleteAuthorSuccess(authorId) {
    return {type: types.DELETE_AUTHOR_SUCCESS, authorId};
}

export function loadAuthors() {
    return dispatch => {
        dispatch(beginAjaxCall());
        
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSucess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteAuthor(authorId) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());

        return AuthorApi.deleteAuthor(authorId).then(() => {
            dispatch(deleteAuthorSuccess(authorId));
        }).catch(error => {
            dispatch(ajaxCallError());

            throw(error);
        });
    };
}
