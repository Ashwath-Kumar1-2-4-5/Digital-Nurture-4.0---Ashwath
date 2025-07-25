CONTROL STRUCTURES

Apply 1% Discount for Customers Age > 60

BEGIN
  FOR cust IN (
    SELECT c.CustomerID, l.LoanID, l.InterestRate,
           FLOOR(MONTHS_BETWEEN(SYSDATE, c.DOB)/12) AS age
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
  ) LOOP
    IF cust.age > 60 THEN
      UPDATE Loans
      SET InterestRate = InterestRate - 1
      WHERE LoanID = cust.LoanID;
    END IF;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('Interest rates updated for senior citizens.');
END;
/
--------------------------------------------------------------------------


Set IsVIP = 'Y' for Balance > 10,000

BEGIN
  FOR cust IN (
    SELECT CustomerID, Balance FROM Customers
  ) LOOP
    IF cust.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'Y'
      WHERE CustomerID = cust.CustomerID;
    END IF;
  END LOOP;
  DBMS_OUTPUT.PUT_LINE('VIP customers flagged.');
END;
/

--------------------------------------------------------------------------
Remind Customers with Loans Ending in 30 Days

BEGIN
  FOR loan IN (
    SELECT l.LoanID, c.Name, l.EndDate
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID ||
                         ' for ' || loan.Name || ' is due on ' || TO_CHAR(loan.EndDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/

-----------------------------------------------------------------------

STORED PROCEDURES

Process Monthly Interest for Savings Accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
  FOR acc IN (
    SELECT AccountID, Balance
    FROM Accounts
    WHERE AccountType = 'Savings'
  ) LOOP
    UPDATE Accounts
    SET Balance = Balance + (acc.Balance * 0.01),
        LastModified = SYSDATE
    WHERE AccountID = acc.AccountID;
  END LOOP;

  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to savings accounts.');
END;
/
-----TO EXECUTE-----
BEGIN
  ProcessMonthlyInterest;
END;
/

------------------------------------------------------------------------
 Bonus Scheme for Employees by Department

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus_percent IN NUMBER
) IS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_bonus_percent / 100)
  WHERE Department = p_department;

  DBMS_OUTPUT.PUT_LINE('Bonus applied to department: ' || p_department);
END;
/
----- TO EXECUTE -----
BEGIN
  UpdateEmployeeBonus('IT', 10);  -- 10% bonus to IT department
END;
/
------------------------------------------------------------------------
Fund Transfer Between Accounts

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_id IN NUMBER,
    p_target_id IN NUMBER,
    p_amount IN NUMBER
) IS
  v_balance NUMBER;
BEGIN
  -- Check balance
  SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_source_id;

  IF v_balance < p_amount THEN
    DBMS_OUTPUT.PUT_LINE('Insufficient balance.');
  ELSE
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_source_id;

    -- Add to target
    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_target_id;

    DBMS_OUTPUT.PUT_LINE('Transferred ' || p_amount || ' from Account ' || p_source_id || ' to Account ' || p_target_id);
  END IF;
END;
/
------ TO EXECUTE -----
BEGIN
  TransferFunds(1, 2, 200);  -- Transfer 200 from account 1 to 2
END;
/
-----------------------------------------------------------------------
