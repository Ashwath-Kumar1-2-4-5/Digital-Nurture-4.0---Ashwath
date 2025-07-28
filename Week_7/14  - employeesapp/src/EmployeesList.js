import React from 'react';
import EmployeeCard from './EmployeeCard';

const employeesData = [
    { id: 1, name: 'John Doe', position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager' },
    { id: 3, name: 'Peter Jones', position: 'UI/UX Designer' },
];

function EmployeeList(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
            {employeesData.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    );
}

export default EmployeeList;