import * as React from 'react';

interface MyComponentProps {
  greeting: string;
}
interface MyComponentStates {
  count: number;
}

class MyComponent extends React.Component<MyComponentProps, MyComponentStates> {
  constructor(props: MyComponentProps) {
    super(props);
    this.state = {
      count: 1,
    };

    setInterval (
      () => this.countUp(),
      1000
    );
  }

  countUp() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        {this.props.greeting}
        <div>
          count: {this.state.count}
        </div>
      </div>
    );
  }
}

export default MyComponent;
