import { Button } from 'antd';
import React, { type FC } from 'react';

const Foo: FC<{ title: string }> = (props) =>
<Button type="primary">{props.title}</Button>;

export default Foo;
