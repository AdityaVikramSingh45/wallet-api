# Expense Tracker App

A beginner-friendly, cross-platform expense tracker app built with React Native and Expo. It features secure Clerk authentication with 6-digit email verification, allowing users to sign up, log in, track income and expenses, view real-time balance updates, delete transactions, and refresh data with pull-to-refresh.

---

## Demo
*Home screen showing balance and recent transactions*

*User signup with Clerk authentication*

---

## Features

- Cross-platform mobile app (iOS & Android) built with React Native and Expo  
- Secure signup/login with Clerk authentication and 6-digit email verification  
- Five screens: Signup, Login, Verify Email, Home, Create Transaction  
- Track income and expenses with live balance updates  
- Delete transactions with a tap  
- Pull-to-refresh gesture to update data  
- Logout functionality for easy account switching  
- Backend built with Express.js, PostgreSQL (Neon-hosted), and Redis for rate limiting  
- Fully cloud deployed for real device testing  
- Uses 100% free tools, no Mac required  

---

## Getting Started

### Prerequisites

- Node.js and npm  
- Expo CLI (`npm install -g expo-cli`)

### Installation

```bash
git clone https://github.com/your-username/expense-tracker-app.git
cd expense-tracker-app
npm install
expo start
