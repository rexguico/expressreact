import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import DeleteCourseForm from './DeleteCourseForm';
import toastr from 'toastr';

class DeleteCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            deleting: false
        };

        this.deleteCourse = this.deleteCourse.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    deleteCourse(event) {
        event.preventDefault();

        this.setState({deleting: true});
        this.props.actions.deleteCourse(this.props.courseId)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({deleting: false});
            });
    }

    cancelDelete(event) {
        event.preventDefault();

        this.redirect();
    }

    redirect() {
        if (this.state.deleting) {
            toastr.success('Course deleted');
            this.setState({deleting: false});    
        }
        
        this.context.router.push('/courses');
    }    

    render() {
        return (
            <DeleteCourseForm
                title={this.props.title}
                onDelete={this.deleteCourse}
                onCancel={this.cancelDelete}
            />
        );
    }
}

DeleteCoursePage.propTypes = {
    courseId: PropTypes.string,
    title: PropTypes.string,
    actions: PropTypes.object.isRequired
};

DeleteCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; // from the path deletecourse/:id

    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

    if (courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }
    
    return {
        courseId: courseId,
        title: course ? course.title : ''
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCoursePage);
