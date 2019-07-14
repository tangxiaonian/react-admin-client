import React from 'react';

import { Button } from "antd";

interface HelloProps {
    compiler: string;
    framework: string;
}

class App extends React.Component<HelloProps,{}>{

    render(){

        return (
            <h1>
                Hello from { this.props.compiler } and { this.props.framework }!
                <Button type={"primary"}>Button</Button>
            </h1>
        );

    }
};

export default App;
