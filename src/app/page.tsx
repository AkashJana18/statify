// File: src/app/page.tsx


const services = [
    { name: 'Service A', status: 'Operational', details: 'All systems operational', color: 'bg-green-500' },
    { name: 'Service B', status: 'Partial Outage', details: 'Some issues reported', color: 'bg-yellow-500' },
    { name: 'Service C', status: 'Major Outage', details: 'Currently down', color: 'bg-red-500' },
];

const incidents = [
    { title: 'Incident 1', description: 'Service B experiencing issues', status: 'Open', timestamp: '2025-01-16 08:00' },
    { title: 'Incident 2', description: 'Service C is down', status: 'Resolved', timestamp: '2025-01-15 12:00' },
];

const HomePage = () => {
    return (
        <div className="font-sans bg-gray-100 min-h-screen">
            <main className="p-4">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Service Status Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className={`p-4 rounded-lg shadow ${service.color} text-white`}>
                                <h3 className="font-bold">{service.name}</h3>
                                <p>{service.details}</p>
                                <a href="#" className="underline">View Details</a>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Incident Updates</h2>
                    <div className="space-y-4">
                        {incidents.map((incident, index) => (
                            <div key={index} className="p-4 border rounded-lg bg-white shadow">
                                <h3 className="font-bold">{incident.title}</h3>
                                <p>{incident.description}</p>
                                <p className={`text-sm ${incident.status === 'Open' ? 'text-red-500' : 'text-green-500'}`}>
                                    Status: {incident.status}
                                </p>
                                <p className="text-gray-500 text-sm">Last updated: {incident.timestamp}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
