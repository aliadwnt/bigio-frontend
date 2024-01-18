import React from 'react';
import styled from 'styled-components';

const StoryListTable = () => {
  return (
    <>
      <FormContainer>
        <Section>
          <Label>Title</Label>
          <TextField type="text" placeholder="Enter title" />
        </Section>

        <Section>
          <Label>Writer</Label>
          <TextField type="text" placeholder="Enter writer" />
        </Section>
      </FormContainer>
      <FormContainer>
      <Section>
          <Label>Synopsis</Label>
          <TextArea placeholder="Enter synopsis" />
        </Section>
      </FormContainer>

      <FormContainer>
      <Section>
          <Label>Category</Label>
          <Select>
            <option value="financial">Financial</option>
            <option value="technology">Technology</option>
            <option value="health">Health</option>
          </Select>
        </Section>

        <Section>
          <Label>Tags</Label>
          <TextField type="text" placeholder="Enter tags" />
        </Section>
      </FormContainer>
      <FormContainer>
      <Section>
          <Label>Cover Image</Label>
          <FileInput type="file" />
        </Section>

        <Section>
          <Label>Status</Label>
          <Select>
            <option value="draft">Draft</option>
            <option value="publish">Publish</option>
          </Select>
        </Section>
   </FormContainer>
   <FormContainer>
   
   </FormContainer>
    </>
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FileInput = styled.input`
  width: 100%;
  padding: 8px;
`;

export default StoryListTable;
