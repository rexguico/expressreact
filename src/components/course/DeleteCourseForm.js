import React, {PropTypes} from 'react';

const DeleteCourseForm = ({ title, deleting, onDelete, onCancel}) => {
    return (
        <form>
            <h3>Delete {title} course?</h3>
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

DeleteCourseForm.propTypes = {
    deleting: PropTypes.bool,
    title: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default DeleteCourseForm;
