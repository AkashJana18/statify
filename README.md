# Statify 🖥️
[![GitHub Repo stars](https://img.shields.io/github/stars/AkashJana18/statify?style=social)](https://github.com/AkashJana18/statify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AkashJana18/statify?style=social)](https://github.com/AkashJana18/statify/network/members)
[![GitHub issues](https://img.shields.io/github/issues/AkashJana18/statify)](https://github.com/AkashJana18/statify/issues)
[![GitHub license](https://img.shields.io/github/license/AkashJana18/statify)](https://github.com/AkashJana18/statify/blob/main/LICENSE)

Statify is a minimalistic, theme-based web application designed for seamless role-based authentication and tracking services like websites, APIs, and databases. The application features a clean and intuitive user interface with enhanced user authentication powered by **Clerk** and database management using **Prisma ORM** with **Neon**.

## Features ✨

- **Theme-based UI**: A clean, minimal, and customizable frontend interface 🎨.
- **Role-Based Authentication**: Secure authentication and role management using **Clerk** 🔐.
- **Service Tracking (Planned)**: Track websites, APIs, and databases efficiently 🌐.
- **Frontend Components**: Includes a responsive navbar, footer, login functionality, charts, table and other creative components 🧩.

## Tech Stack 🛠️

- **Frontend**: Next.js | Tailwindcss | Shadcn (with theme-based styling) ⚛️
- **Backend**: Node.js (event-driven architecture concepts planned) 💻
- **Database**: Neon (PostgreSQL) with Prisma ORM 🗃️
- **Authentication**: Clerk (RBAC implementation) 🔑


## Architecture 🏗️

![Architecture](https://github.com/user-attachments/assets/e21cf52a-9d40-4ee2-b982-b42fb05a13a6)

## Look & Feel

https://github.com/user-attachments/assets/08f546e6-b0c8-4174-94ed-6d84c77f1f1

## Setup Instructions 📋

### Prerequisites 🖥️

Ensure you have the following installed:

- Node.js (v16+)
- npm or yarn

### Installation 🔧

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



##  Contributors 📌

**Thanks to these amazing contributors:**

<a href="https://github.com/AkashJana18/statify/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AkashJana18/statify" />
</a>

##  Stargazers 🌟

[![Stargazers repo roster](https://reporoster.com/stars/AkashJana18/statify)](https://github.com/AkashJana18/statify/stargazers)


## Future Roadmap 🛤️

- **Service Monitoring**: Add functionality to track the uptime and performance of websites, APIs, and databases ⏱️.
- **Dashboard**: Implement a dashboard for users to view their tracked services 📊.
- **Event-Driven Architecture**: Integrate event-driven concepts for better scalability and responsiveness ⚡.
- **Advanced Analytics**: Provide detailed insights into service performance 📈.
