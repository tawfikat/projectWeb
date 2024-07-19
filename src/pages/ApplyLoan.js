import React from 'react';
import './ApplyLoan.css'

const LoanPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="container">
      <div className="loan-application">
        <h1>Apply for Loan</h1>
        <form onSubmit={handleSubmit}>



          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input type="number" id="loanAmount" name="loanAmount" required />
          </div>
          <div className="form-group">
            <label htmlFor="loanPurpose">Loan Purpose</label>
            <textarea id="loanPurpose" name="loanPurpose" rows="4" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="timeToReturn">Time to Return</label>
            <input type="date" id="timeToReturn" name="timeToReturn" required />
          </div>
          <div className="form-group">
            <input type="submit" value="Apply" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanPage;
