import React, {PropTypes} from 'react';

const DeleteAuthorForm = ({name, deleting, onDelete, onCancel}) => {
    return (
        <form>
            <h3>Delete author {name}?</h3>
            <div className="btn-toolbar">
            <input
                    type="submit"
                    disabled={deleting}
                    value="Delete"
                    className="btn btn-primary"
                    onClick={onDelete} />
                <input
                    type="reset"
                    disabled={deleting}
                    value="Cancel"
                    className="btn btn-default"
                    onClick={onCancel} />
            </div>
        </form>
    );
};

DeleteAuthorForm.propTypes = {
    deleting: PropTypes.bool,
    name: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default DeleteAuthorForm;
