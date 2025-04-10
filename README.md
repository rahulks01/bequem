# βequem

A basic cab booking service application built with **React**, **Node.js**, **MongoDB**, **Socket.IO**, and the **Google Maps API** for real-time location tracking and ride management.

---

## 🛺 ABOUT βequem:

**βequem** is a real-time cab booking platform that allows users to search for pickup and drop locations, once a ride is requested, nearby captains (drivers) are notified through WebSocket connections established via Socket.IO. Upon a captain accepting the ride, the user confirms by sharing an OTP. After completing the ride, the captain can end the trip, resetting both interfaces to their initial states.

---

## How to Run on Your Machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rahulks01/bequem.git
   cd bequem
   ```

2. **Install dependencies:**

   - In the **backend** directory:
     ```bash
     cd backend
     npm install
     ```

   - In the **frontend** directory:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Set up `.env` files:**

   - In the **backend**, create a `.env` file with the following:
     ```
     PORT=<port_you_want_your_backend_to_run_at; e.g.: 4000>
     DB_URL_LOCAL=<your_mongodb_uri>
     JWT_SECRET=<jwt_secret_key>
     GOOGLE_MAPS_API=<your_google_maps_api>
     ```

   - In the **frontend**, create a `.env` file with the following:
     ```
     VITE_BASE_URL=<address_where_your_backend_is_running; e.g.: http://localhost:4000>
     VITE_GOOGLE_MAPS_API_KEY=<your_google_maps_api>
     ```

4. **Start the application:**

   - **Backend** (in the `backend` directory):
     ```bash
     npx nodemon
     ```

   - **Frontend** (in the `frontend` directory):
     ```bash
     npm run dev
     ```

---

### Port Forwarding for Captain Interface (Important for Google Maps & Sockets):

To ensure proper functioning of the captain interface, especially with **Google Maps** and **Socket.IO**, port `5173` (default Vite dev server) should be publicly accessible rather than using `localhost`.

Here’s how to do it using **VS Code**:

1. Open your project folder in **VS Code**.
2. Run the frontend using:
   ```bash
   npm run dev
   ```
3. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).
4. Search for **“Ports: Focus on Ports View”** and open it.
5. In the Ports tab, find port `5173` (the Vite server).
6. Click the globe icon 🌐 next to it and set **visibility to Public**.

This allows the captain interface to interact seamlessly with APIs and WebSocket events without being blocked by `localhost` limitations.
