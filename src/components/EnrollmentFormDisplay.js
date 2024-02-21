import React from 'react';

function EnrollmentFormDisplay({ submittedValues }) {
  return (
    <div>
        {submittedValues && (
          <div>
          <div>
            <h2>Enrollment Form</h2>
            <label>Email</label>
            <input type="text" value={submittedValues.email} readOnly />
          </div>
          <div>
            <label>Bio</label>
            <textarea value={submittedValues.bio} readOnly />
          </div>
          <div>
            <label>Course</label>
            <input type="text" value={submittedValues.course} readOnly />
          </div>
          <div>
            <label>Your skillset</label>
            <input type="text" value={submittedValues.skills.join(', ')} readOnly />
          </div>
          <div>
            <label>Course date</label>
            <input type="text" value={submittedValues.courseDate} readOnly />
          </div>
        </div>
      )}
    </div>
  );
}

export default EnrollmentFormDisplay;
