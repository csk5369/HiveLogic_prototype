import React, { useState } from 'react';

const STEPS = ['Quote', 'Deposit', 'Schedule', 'Change Orders', 'Invoice'];

export default function Jobs() {
  const [activeStep, setActiveStep] = useState(0);
  const [quoteRef, setQuoteRef] = useState('');
  const [deposit, setDeposit] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [changeOrders, setChangeOrders] = useState([]);
  const [changeDesc, setChangeDesc] = useState('');
  const [changeAmt, setChangeAmt] = useState('');
  const [finalTotal, setFinalTotal] = useState('');
  const [materialCost, setMaterialCost] = useState('');
  const [totalCost, setTotalCost] = useState('');

  const addChangeOrder = () => {
    if (changeDesc && changeAmt) {
      setChangeOrders(prev => [...prev, { desc: changeDesc, amount: changeAmt }]);
      setChangeDesc('');
      setChangeAmt('');
    }
  };

  const saveJob = () => {
    console.log({ quoteRef, deposit, scheduleDate, changeOrders, finalTotal, materialCost, totalCost });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Job Workflow</h2>
      <div className="flex gap-2 mb-6">
        {STEPS.map((step, idx) => (
          <button
            key={step}
            onClick={() => setActiveStep(idx)}
            className={`tab ${activeStep === idx ? 'active' : ''}`}
          >
            {step}
          </button>
        ))}
      </div>

      {activeStep === 0 && (
        <input
          placeholder="Quote Reference"
          value={quoteRef}
          onChange={e => setQuoteRef(e.target.value)}
          className="p-2 mb-4 w-full rounded bg-var(--bg) text-var(--fg)"
        />
      )}

      {activeStep === 1 && (
        <input
          placeholder="Deposit Received ($)"
          value={deposit}
          onChange={e => setDeposit(e.target.value)}
          className="p-2 mb-4 w-full rounded bg-var(--bg) text-var(--fg)"
        />
      )}

      {activeStep === 2 && (
        <input
          type="date"
          value={scheduleDate}
          onChange={e => setScheduleDate(e.target.value)}
          className="p-2 mb-4 w-full rounded bg-var(--bg) text-var(--fg)"
        />
      )}

      {activeStep === 3 && (
        <div>
          <input
            placeholder="Change Description"
            value={changeDesc}
            onChange={e => setChangeDesc(e.target.value)}
            className="p-2 mb-2 w-full rounded bg-var(--bg) text-var(--fg)"
          />
          <input
            placeholder="Amount ($)"
            value={changeAmt}
            onChange={e => setChangeAmt(e.target.value)}
            className="p-2 mb-2 w-full rounded bg-var(--bg) text-var(--fg)"
          />
          <button
            onClick={addChangeOrder}
            className="px-3 py-1 rounded bg-var(--accent)"
          >
            Add Order
          </button>
          <ul className="list-disc ml-5 mt-2">
            {changeOrders.map((co, i) => (
              <li key={i}>
                {co.desc} - ${co.amount}
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeStep === 4 && (
        <div>
          <input
            placeholder="Final Invoice Total ($)"
            value={finalTotal}
            onChange={e => setFinalTotal(e.target.value)}
            className="p-2 mb-2 w-full rounded bg-var(--bg) text-var(--fg)"
          />
          <input
            placeholder="Material Cost ($)"
            value={materialCost}
            onChange={e => setMaterialCost(e.target.value)}
            className="p-2 mb-2 w-full rounded bg-var(--bg) text-var(--fg)"
          />
          <input
            placeholder="Total Job Cost ($)"
            value={totalCost}
            onChange={e => setTotalCost(e.target.value)}
            className="p-2 mb-2 w-full rounded bg-var(--bg) text-var(--fg)"
          />
        </div>
      )}

      <button
        onClick={saveJob}
        className="mt-4 px-4 py-2 rounded bg-var(--accent) text-var(--fg)"
      >
        Save Job Details
      </button>
    </div>
  );
}
