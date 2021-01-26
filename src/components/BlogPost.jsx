import { PinDropSharp } from '@material-ui/icons';
import Markdown from 'markdown-to-jsx';
import React from 'react';

export default function Post(props) {
  return (
    <>
      <Markdown>Hi</Markdown>
      {/* <Markdown>{props.markedPost}</Markdown> */}
    </>
  );
}
