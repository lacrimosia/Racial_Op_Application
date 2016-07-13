import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
    }

    reloadPage() {
        location.reload();
    }

    render() {
        return <div > Menu < /div>;
    }
}

export default Menu;
