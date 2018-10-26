import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import DeleteAuthorForm from './DeleteAuthorForm';
import toastr from 'toastr';

class DeleteAuthorPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            deleting: false
        };

        this.deleteAuthor = this.deleteAuthor.bind(this);
        this.cancelDelete = this.cancelDelete.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    deleteAuthor(event) {
        event.preventDefault();

        this.setState({deleting: true});
        this.props.actions.deleteAuthor(this.props.authorId)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({deleting: false});
            });
    }

    cancelDelete(event){
        event.preventDefault();

        this.redirect();
    }

    redirect() {
        if (this.state.deleting) {
            toastr.success('Author deleted');
            this.setState({deleting: false});    
        }
        
        this.context.router.push('/authors');
    }

    render() {
        return (
            <DeleteAuthorForm 
                name={this.props.name}
                onDelete={this.deleteAuthor}
                onCancel={this.cancelDelete}
                />
        );
    }
}

DeleteAuthorPage.propTypes = {
    authorId: PropTypes.string,
    name: PropTypes.string,
    actions: PropTypes.object.isRequired
};

DeleteAuthorPage.contextTypes = {
    router: PropTypes.object
};

function getAuthorById(authors, id) {
    const author = authors.filter(author => author.id == id);
    if (author) return author[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const authorId = ownProps.params.id; // from the path deleteauthor/:id

    let author = {id: '', name: ''};

    if (authorId && state.authors.length > 0) {
        author = getAuthorById(state.authors, authorId);
    }
    
    return {
        authorId: authorId,
        name: author ? author.firstName + ' ' + author.lastName : ''
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteAuthorPage);
