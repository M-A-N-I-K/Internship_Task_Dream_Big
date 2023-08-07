import React, { useState, useEffect } from 'react';

const BillingCounter = ({ counterNumber, items }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-300 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-4">
        <span className="text-xl font-bold">{counterNumber}</span>
      </div>
      <span>{items} items</span>
    </div>
  );
};

const Customer = ({ items }) => {
  return (
    <div className="bg-blue-500 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
      <span className="text-white text-xl font-bold">{items}</span>
    </div>
  );
};

const Queue = ({ queue }) => {
  return (
    <div className="flex items-center space-x-4">
      {queue.map((customer, index) => (
        <Customer key={index} items={customer} />
      ))}
    </div>
  );
};

const App = () => {
  const [queue, setQueue] = useState([3, 5, 2, 4, 1]);
  const [counters, setCounters] = useState([
    { number: 'C1', items: 5 },
    { number: 'C2', items: 3 },
    { number: 'C3', items: 4 },
    { number: 'C4', items: 8 },
    { number: 'C5', items: 2 },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (queue.length === 0) {
        clearInterval(timer);
        return;
      }

      // Reduce items in queue
      const updatedQueue = queue.map((customer) => {
        if (customer > 0) {
          return customer - 1;
        }
        return customer;
      });

      // Remove customers with 0 items from queue
      const filteredQueue = updatedQueue.filter((customer) => customer > 0);

      // Find counter with least items
      const counterWithLeastItems = counters.reduce((acc, counter) => {
        if (counter.items < acc.items) {
          return counter;
        }
        return acc;
      }, counters[0]);

      // Increment items for the counter with least items
      const updatedCounters = counters.map((counter) => {
        if (counter.number === counterWithLeastItems.number) {
          return { ...counter, items: counter.items + queue[0] };
        }
        return counter;
      });

      setQueue(filteredQueue);
      setCounters(updatedCounters);
    }, 1000);

    return () => clearInterval(timer);
  }, [queue, counters]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <h1 className="text-4xl font-bold">Billing Counters</h1>
      <div className="flex space-x-4 sm:space-x-8">
        {counters.map((counter) => (
          <BillingCounter
            key={counter.number}
            counterNumber={counter.number}
            items={counter.items}
          />
        ))}
      </div>
      <Queue queue={queue} />
    </div>
  );
};

export default App;