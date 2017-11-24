import * as React from 'react';

interface MyFuncComponentProps {
    greeting: string;
}

function MyFuncComponent(props: MyFuncComponentProps) {
  return (
    <div>
      {props.greeting}
    </div>
  );
}

const MyFuncComponent2 = (props: MyFuncComponentProps) => (
  <div>
    {props.greeting}
  </div>
);
export {MyFuncComponent, MyFuncComponent2};
