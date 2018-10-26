import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import DeleteCoursePage from './components/course/DeleteCoursePage';
import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';
import BootstrapTestPage from './components/bootstrap/BootstrapTestPage';
import DeleteAuthorPage from './components/author/DeleteAuthorPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="authors" component={AuthorsPage} />
        <Route path="author" component={ManageAuthorPage}/>
        <Route path="author/:id" component={ManageAuthorPage}/>
        <Route path="deleteauthor/:id" component={DeleteAuthorPage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="course" component={ManageCoursePage} />
        <Route path="course/:id" component={ManageCoursePage} />
        <Route path="deletecourse/:id" component={DeleteCoursePage} />
        <Route path="about" component={AboutPage} />        
        <Route path="bootstrap" component={BootstrapTestPage} />
    </Route>
);