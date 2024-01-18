import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import styled from 'styled-components';

const StoryListTable = () => {
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');

  return (
    <>
      <FormContainer>
        <Section>
          <Label>Title</Label>
          <TextField
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Section>
      </FormContainer>
      <FormContainer>
        <Section>
          <Label>Story</Label>
          <RichTextEditor value={story} onChange={setStory} />
        </Section>
      </FormContainer>
    </>
  );
};

const RichTextEditor = ({ value, onChange }) => {
  return (
    <QuillWrapper>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={onChange}
        modules={quillModules}
        formats={quillFormats}
      />
    </QuillWrapper>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Section = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const TextField = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 200px;
  }
`;

const quillModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
};

const quillFormats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image',
];

export default StoryListTable;
