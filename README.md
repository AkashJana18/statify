# Statify

Statify is a minimalistic, theme-based web application designed for seamless role-based authentication and tracking services like websites, APIs, and databases. The application features a clean and intuitive user interface with enhanced user authentication powered by Clerk and database management using Prisma ORM with Neon.

## Features

- **Theme-based UI**: A clean, minimal, and customizable frontend interface.
- **Role-Based Authentication**: Secure authentication and role management using Clerk.
- **Service Tracking (Planned)**: Track websites, APIs, and databases efficiently.
- **Frontend Components**: Includes a responsive navbar, footer, and login functionality.

## Tech Stack

- **Frontend**: React.js (with theme-based styling)
- **Backend**: Node.js (event-driven architecture concepts planned)
- **Database**: Neon (PostgreSQL) with Prisma ORM
- **Authentication**: Clerk (RBAC implementation)

## Setup Instructions

### Prerequisites

Ensure you have the following installed:
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AkashJana18/statify.git
   cd statify
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_neon_database_url
   CLERK_API_KEY=your_clerk_api_key
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
statify/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components (e.g., Navbar, Footer)
│   ├── pages/            # Application pages
│   ├── services/         # API service integrations
│   ├── utils/            # Helper functions
│   └── styles/           # Theme-based styling
├── prisma/               # Prisma schema and migrations
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## Architecture
![image](https://github.com/user-attachments/assets/e21cf52a-9d40-4ee2-b982-b42fb05a13a6)


## Future Roadmap

- **Service Monitoring**: Add functionality to track the uptime and performance of websites, APIs, and databases.
- **Dashboard**: Implement a dashboard for users to view their tracked services.
- **Event-Driven Architecture**: Integrate event-driven concepts for better scalability and responsiveness.
- **Advanced Analytics**: Provide detailed insights into service performance.

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

Please ensure your changes align with the project's coding standards.

## License

Statify is licensed under the [MIT License](LICENSE).

## Acknowledgments

- **Neon**: For providing a modern, serverless PostgreSQL database solution.
- **Clerk**: For simplifying authentication and role management.
- **Prisma**: For seamless database interaction with TypeScript.

