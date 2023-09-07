import React, { useState } from 'react';
import { Button, Dropdown, Form, Header, Segment } from 'semantic-ui-react';
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
      <Header as="h1">Describe your Job</Header>
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
                ? 'Describe your job'
                : 'Describe your job'}
            </Header>
            <Form>
              <Form.Input
                label="Job Title/Discription"
                placeholder="Enter job title"
                name="title"
                value={jobDetails.title}
                onChange={handleInputChange}
              />
              <Form.TextArea
                label="Job Position"
                placeholder="Enter job description"
                name="description"
                value={jobDetails.description}
                onChange={handleInputChange}
              />

              <Form.TextArea
                label="Skills section "
                placeholder="Enter your skills that you have achived so far "
                name="description"
                value={jobDetails.description}
                onChange={handleInputChange}
              />

            <h1 class="ui header">Project Conditions</h1>
              <Form.Input
                label="Project length"
                 placeholder=""
                 name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
                
              />
              <Form.Input
                label="Payment"
                 placeholder="Minimum"
                 
                name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
                
              />
              <Form.Input
                label=""
                 placeholder="Miximum"
                 
                name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
                
              />
          
              
              <Form.Input
                label="Working Hours"
                 placeholder=""
                 name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
                
              />
<h1 class="ui header">Experience</h1>
             <Form.Input
                label=""
                 placeholder="Experience In"
                 name="location"
                value={jobDetails.location}
                onChange={handleInputChange}
                
              /> <Form.Input
              label=" "
              placeholder="For atleast"
               name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              
            /> 


            </Form>
            <Button primary>Post job</Button>
          </Segment>
        )}
      </Segment>



      
    </div>



  );
};


  
export default App;