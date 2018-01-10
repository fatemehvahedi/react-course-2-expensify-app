import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
    <div>this is edit expense page with {props.match.params.id}</div>
    );
};

export default EditExpensePage;