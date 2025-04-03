# Statify 🖥️

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

https://github.com/user-attachments/assets/9a8ac213-e240-4898-9dcb-91d7e31c0683

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

## Project Structure 📂

```
statify/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── components/       # Reusable UI components (e.g., Navbar, Footer)
│   ├── pages/            # Application pages (e.g., Dashboard, Login)
│   ├── services/         # API service integrations
│   ├── utils/            # Helper functions (e.g., authentication helpers)
│   └── styles/           # Theme-based styling (e.g., light/dark mode)
├── prisma/               # Prisma schema and migrations
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## Future Roadmap 🛤️

- **Service Monitoring**: Add functionality to track the uptime and performance of websites, APIs, and databases ⏱️.
- **Dashboard**: Implement a dashboard for users to view their tracked services 📊.
- **Event-Driven Architecture**: Integrate event-driven concepts for better scalability and responsiveness ⚡.
- **Advanced Analytics**: Provide detailed insights into service performance 📈.

## Contributing 🤝

Contributions are welcome! To get started:

1. Fork the repository 🍴.
2. Create a new branch for your feature or bug fix 🧑‍💻.
3. Commit your changes and push the branch 🚀.
4. Submit a pull request ✨.

Please ensure your changes align with the project's coding standards.
# Statify 🚀

[![GitHub Repo stars](https://img.shields.io/github/stars/vkoushik15/statify?style=social)](https://github.com/vkoushik15/statify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/vkoushik15/statify?style=social)](https://github.com/vkoushik15/statify/network/members)
[![GitHub issues](https://img.shields.io/github/issues/vkoushik15/statify)](https://github.com/vkoushik15/statify/issues)
[![GitHub license](https://img.shields.io/github/license/vkoushik15/statify)](https://github.com/vkoushik15/statify/blob/main/LICENSE)

## 📌 Contributors ✨

Thanks to these amazing contributors:

<a href="https://github.com/vkoushik15/statify/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vkoushik15/statify" />
</a>

## 🌟 Stargazers  

[![Stargazers repo roster](https://reporoster.com/stars/vkoushik15/statify)](https://github.com/vkoushik15/statify/stargazers)



## Acknowledgments 🙏

- **Neon**: For providing a modern, serverless PostgreSQL database solution 🌟.
- **Clerk**: For simplifying authentication and role management 🔐.
- **Prisma**: For seamless database interaction with TypeScript 💻.


# Statify 🚀

[![GitHub Repo stars](https://img.shields.io/github/stars/AkashJana18/statify?style=social)](https://github.com/AkashJana18/statify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/AkashJana18/statify?style=social)](https://github.com/AkashJana18/statify/network/members)
[![GitHub issues](https://img.shields.io/github/issues/AkashJana18/statify)](https://github.com/AkashJana18/statify/issues)
[![GitHub license](https://img.shields.io/github/license/AkashJana18/statify)](https://github.com/AkashJana18/statify/blob/main/LICENSE)

## 📌 Contributors ✨

Thanks to these amazing contributors:

<a href="https://github.com/AkashJana18/statify/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AkashJana18/statify" />
</a>

## 🌟 Stargazers  

[![Stargazers repo roster](https://reporoster.com/stars/AkashJana18/statify)](https://github.com/AkashJana18/statify/stargazers)

---

### How to Contribute?
Want to contribute? Feel free to fork the repo, make changes, and submit a PR! 🚀

---
