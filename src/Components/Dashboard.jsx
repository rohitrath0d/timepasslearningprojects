function Dashboard() {
    return (
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Financial Health Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Income vs. Expenses</h3>
            <p className="mt-2 text-gray-600">Overview of your income and expenses.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Savings Progress</h3>
            <p className="mt-2 text-gray-600">Track how close you are to your savings goals.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">Debt Status</h3>
            <p className="mt-2 text-gray-600">Current status of your debts and payoffs.</p>
          </div>
        </div>
      </section>
    );
  }
  
  export default Dashboard;
  