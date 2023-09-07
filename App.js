import React, { useState } from 'react';
import {  Dropdown, Form, Header, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [selectedJobType, setSelectedJobType] = useState(null);
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    location: '',
  });

  const handleJobTypeChange = (_, { value }) => {
    setSelectedJobType(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  return (
    <div className="App">
      <Header as="h1">Job Posting Page</Header>
      <Segment>
        <Header as="h2">Select Job Type</Header>
        <Dropdown
          placeholder="Select Job Type"
          fluid
          selection
          options={[
            { key: 'freelance', text: 'Freelance', value: 'freelance' },
            { key: 'employment', text: 'Employment', value: 'employment' },
          ]}
          onChange={handleJobTypeChange}
        />
        {selectedJobType && (
          <Segment>
            <Header as="h2">
              {selectedJobType === 'freelance'
                ? 'Freelance Job Details'
                : 'Employment Job Details'}
            </Header>
            <Form>
              <Form.Input
                label="Job Title"
                placeholder="Enter job title"
                name="title"
                value={jobDetails.title}
                onChange={handleInputChange}
              />
              <Form.TextArea
                label="Job Description"
                placeholder="Enter job description"
                name="description"
                value={jobDetails.description}
                onChange={handleInputChange}
              />
              <Form.Input
                label="Location"
                placeholder="Enter job location"
                name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
              />
            </Form>
           
          </Segment>
        )}
      </Segment>



      
    </div>



  );
};


  
export default App;