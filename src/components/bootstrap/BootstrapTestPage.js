import React from 'react';

const BootstrapTestPage = ({}) => {
    return (
        <div>
            <aside className="container">
                <section className="mySection d-flex flex-row">
                    <div className="myCellDiv p-4">My Flex Thing</div>
                    <div className="myCellDiv p-4">My Flex Thing</div>
                    <div className="myCellDiv p-4">My Flex Thing</div>
                </section>
            </aside>

            <div className="myDiv bg-primary"></div>
            <hr/>
            <div className="container">
                <div className="myDiv bg-primary"></div>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="myDiv bg-primary"></div>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    <div className="myRow col bg-success"></div>
                    <div className="myRow col bg-warning"></div>
                    <div className="myRow col bg-danger"></div>
                </div>
                <div className="row">
                    <div className="myRow col bg-primary"></div>
                    <div className="myRow col bg-info"></div>
                </div>
            </div>
        </div>        
    );
};

export default BootstrapTestPage;
