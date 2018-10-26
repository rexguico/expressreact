import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) => {
    return (
        <tr>
            <td><Link to={'/deleteauthor/' + author.id}>Delete</Link></td>
            <td><Link to={'/author/' + author.id}>{author.firstName}&nbsp;{author.lastName}</Link></td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired
};

export default AuthorListRow;
