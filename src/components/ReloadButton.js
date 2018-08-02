import React from 'react';

class ReloadButton extends React.Component {
render () {
    const {
        label = "More",
        actionToPerform
    } = this.props;
    
return (
    <button onClick={actionToPerform}>{label}</button>
 );
}
}

export default ReloadButton;