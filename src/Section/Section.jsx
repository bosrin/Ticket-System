import { useState } from "react";
import { CalendarDays } from "lucide-react";

const Section = ({ setInProgress, setResolved, inProgress }) => {

  const ticketsData = [
    { id: 1001, title: "Login Issues - Can't Access Account", desc: "Customer is unable to log in to their account.", priority: "High", status: "Open", name: "John Smith", date: "1/15/2024" },
    { id: 1002, title: "Payment Failed - Card Declined", desc: "Payment keeps failing despite sufficient balance.", priority: "High", status: "Open", name: "Sarah Johnson", date: "1/16/2024" },
    { id: 1003, title: "Unable to Download Invoice", desc: "Invoice not downloading from billing section.", priority: "Medium", status: "In-Progress", name: "Michael Brown", date: "1/17/2024" },
    { id: 1004, title: "Incorrect Billing Address", desc: "Wrong city still displaying after update.", priority: "Low", status: "Open", name: "Emily Davis", date: "1/18/2024" },
    { id: 1005, title: "App Crash on Launch", desc: "Mobile app crashes immediately upon opening.", priority: "High", status: "Open", name: "David Wilson", date: "1/19/2024" },
    { id: 1006, title: "Refund Not Processed", desc: "Refund requested but not received yet.", priority: "Medium", status: "In-Progress", name: "Sophia Taylor", date: "1/20/2024" },
    { id: 1007, title: "Two-Factor Authentication Issue", desc: "Customer not receiving 2FA codes.", priority: "High", status: "Open", name: "James Anderson", date: "1/21/2024" },
    { id: 1008, title: "Unable to Update Profile Picture", desc: "Upload failed error when updating picture.", priority: "Low", status: "Open", name: "Olivia Martinez", date: "1/22/2024" },
    { id: 1009, title: "Subscription Auto-Renewal Issue", desc: "Auto-renew toggle disabled for subscription.", priority: "Medium", status: "In-Progress", name: "Liam Thomas", date: "1/23/2024" },
    { id: 1010, title: "Missing Order Confirmation Email", desc: "Order placed but no confirmation email received.", priority: "Medium", status: "Open", name: "Isabella Garcia", date: "1/24/2024" },
  ];

  const [tasks, setTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  const addTask = (ticket) => {
    if (!tasks.find(t => t.id === ticket.id)) {
      setTasks([...tasks, ticket]);
      setInProgress(inProgress + 1);
    }
  };

  const completeTask = (ticket) => {
    setTasks(tasks.filter(t => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);

    setInProgress(prev => prev - 1);
    setResolved(prev => prev + 1);
  };

  const priorityColor = (priority) => {
    if (priority === "High") return "text-red-500";
    if (priority === "Medium") return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-6">

        {/* LEFT SIDE */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>

          <div className="grid md:grid-cols-2 gap-4">
            {ticketsData.map(ticket => (
              <div
                key={ticket.id}
                onClick={() => addTask(ticket)}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{ticket.title}</h2>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-600">
                    {ticket.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mt-2">{ticket.desc}</p>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <div>
                    <p>#{ticket.id}</p>
                    <p className={priorityColor(ticket.priority)}>
                      {ticket.priority.toUpperCase()} PRIORITY
                    </p>
                  </div>

                  <div className="text-right">
                    <p>{ticket.name}</p>
                    <div className="flex items-center gap-1 justify-end">
                      <CalendarDays size={14} />
                      {ticket.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Task Status</h2>

          <div className="bg-white p-4 rounded-xl shadow mb-6">
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-sm">Select a ticket</p>
            ) : (
              tasks.map(task => (
                <div key={task.id} className="mb-4">
                  <p className="font-medium mb-2">{task.title}</p>
                  <button
                    onClick={() => completeTask(task)}
                    className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-lg"
                  >
                    Complete
                  </button>
                </div>
              ))
            )}
          </div>

          <h2 className="text-xl font-bold mb-3">Resolved Task</h2>

          <div className="bg-white p-4 rounded-xl shadow">
            {resolvedTasks.length === 0 ? (
              <p className="text-gray-500 text-sm">No resolved tasks yet.</p>
            ) : (
              resolvedTasks.map(task => (
                <div
                  key={task.id}
                  className="bg-indigo-100 text-indigo-800 p-2 rounded mb-2"
                >
                  {task.title}
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section;