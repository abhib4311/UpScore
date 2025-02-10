import React from "react";

const Borrowings = () => {
  const data = {
    totalLoans: 4,
    positiveAccounts: 4,
    negativeAccounts: 0,
    accounts: [
      {
        bank: "State Bank Of India",
        type: "Education Loan",
        accountNumber: "xxxx1688",
        status: "Open Active",
        isClosed: false,
      },
      {
        bank: "Branch International Financial Services Private Limited",
        type: "Personal Loan",
        accountNumber: "xxxxC1FE",
        status: "Closed",
        isClosed: true,
      },
    ],
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        You have {data.totalLoans} Loan accounts.
      </h2>
      <div className="flex gap-6">
        <div className="bg-green-100 text-green-700 px-6 py-3 rounded-md text-lg font-semibold">
          Positive Accounts: {data.positiveAccounts}
        </div>
        <div className="bg-red-100 text-red-700 px-6 py-3 rounded-md text-lg font-semibold">
          Negative Accounts: {data.negativeAccounts}
        </div>
      </div>

      {/* Account List */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold">Your Positive Account - Open</h3>
        {data.accounts
          .filter((acc) => !acc.isClosed)
          .map((acc, index) => (
            <div key={index} className="bg-gray-50 p-4 mt-2 rounded-md shadow-md flex justify-between">
              <div>
                <p className="font-semibold">{acc.bank}</p>
                <p className="text-gray-600">{acc.type}</p>
              </div>
              <div>
                <p className="text-gray-700">Account Number: {acc.accountNumber}</p>
                <p className="text-green-600">{acc.status}</p>
              </div>
            </div>
          ))}

        <h3 className="mt-6 text-lg font-semibold">Your Positive Account - Closed</h3>
        {data.accounts
          .filter((acc) => acc.isClosed)
          .map((acc, index) => (
            <div key={index} className="bg-gray-50 p-4 mt-2 rounded-md shadow-md flex justify-between">
              <div>
                <p className="font-semibold">{acc.bank}</p>
                <p className="text-gray-600">{acc.type}</p>
              </div>
              <div>
                <p className="text-gray-700">Account Number: {acc.accountNumber}</p>
                <p className="text-red-600">{acc.status}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Borrowings;
