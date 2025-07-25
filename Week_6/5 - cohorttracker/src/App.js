import React from 'react';
// Import the CohortDetails component.
// Adjust the path if CohortDetails.js is in a different subfolder (e.g., './components/CohortDetails')
import CohortDetails from './CohortDetails';

function App() {
  // Array of dummy cohort data to display in the dashboard
  const cohorts = [
    {
      id: 1,
      name: 'INTADMF10 - .NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled', // This cohort will have a blue name
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      id: 2,
      name: 'ADM21JF014 - Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing', // This cohort will have a green name
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      id: 3,
      name: 'CDBJF21025 - Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing', // This cohort will also have a green name
      coach: 'Aathma',
      trainer: 'John Doe'
    },
    {
      id: 4,
      name: 'INTADMF10 - .NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled', // This cohort will have a blue name
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      id: 5,
      name: 'ADM21JF014 - Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing', // This cohort will have a green name
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      id: 6,
      name: 'CDBJF21025 - Java FSD',    
      startDate: '24-Dec-2021',
      status: 'Ongoing', // This cohort will also have a green name
      coach: 'Aathma',
      trainer: 'John Doe'
    }
  ];

  return (
    <div className="App">
      {/* Main heading for the dashboard */}
      <h1 style={{
        textAlign: 'left',
        marginLeft: '20px',
        fontSize: '2.5rem', // Adjust font size as needed
        fontWeight: 'bold',
        marginBottom: '20px'
      }}>
        Cohorts Details
      </h1>
      {/* Container for the cohort cards, using flexbox for layout */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap', // Allows cards to wrap to the next line if space runs out
        justifyContent: 'flex-start', // Aligns cards to the start of the container
        alignItems: 'flex-start', // Aligns items to the top
        padding: '0 10px' // Add some horizontal padding to the container
      }}>
        {/* Map over the 'cohorts' array to render a CohortDetails component for each cohort */}
        {cohorts.map(cohort => (
          <CohortDetails key={cohort.id} cohort={cohort} /> // 'key' prop is important for React list rendering
        ))}
      </div>
    </div>
  );
}

export default App;
