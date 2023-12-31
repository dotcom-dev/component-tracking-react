# Context for path tracking

## Installation

```bash
yarn add https://github.com/dotcom-dev/component-tracking-react.git
```

## How to use

```js
import { ContextWrapper } from 'component-tracking-react';

const ParentComponent = () => {
  return (
    <ContextWrapper keyValue='PARENT'>
      <ChildComponent1 />
    </ContextWrapper>
  );
};
```

```js
import { ContextWrapper, useContextPath } from 'component-tracking-react';

const ChildComponent1 = () => {
  const path = useContextPath();

  // log value will be "PARENT"
  console.log('Child 1 ~ path:', path);

  return (
    <ContextWrapper keyValue='CHILD-1'>
      <ChildComponent2 />
    </ContextWrapper>
  );
};
```

```js
import { ContextWrapper, useContextPath } from 'component-tracking-react';

const ChildComponent2 = () => {
  const path = useContextPath();

  // log value will be "PARENT/CHILD-1"
  console.log('Child 2 ~ path:', path);

  return (
    <ContextWrapper keyValue='CHILD-2'>
      <ChildComponent3 />
    </ContextWrapper>
  );
};
```

```js
import { useContextPath } from 'component-tracking-react';

const ChildComponent3 = () => {
  const path = useContextPath();

  // log value will be "PARENT/CHILD-1/CHILD-2"
  console.log('Child 3 ~ path:', path);

  return <Component4 />;
};
```
