import styled from 'styled-components';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'font': [] }, { 'size': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'align': [] }],
    ['link', 'image']
  ]
};

const formats = [
  'font', 'size', 'bold', 'italic', 'underline', 'strike', 'color', 'background', 'header', 'blockquote', 'code-block', 'list', 'bullet',
  'align', 'link', 'image'
];

const Editor = () => {
  const [text, setText] = useState('');

  const handleChange = (value: any) => {
    setText(value);
  };

  return (
    <EditorWrapper>
      <ReactQuill
        value={text} 
        onChange={handleChange} 
        modules={modules} 
        formats={formats} 
      />
    </EditorWrapper>
  );
};

export default Editor;

const EditorWrapper = styled.div`
  width: 100%;

  .ql-container {
    height: 600px;
  }
`;