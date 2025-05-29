
# Live Class Timer (Real-Time Sync)

This is a real-time synchronized classroom timer using Node.js, Express, and Socket.IO.

## Features
- ⏱️ Live timer display synced across all clients (students + teacher)
- ▶️ Start, ⏸️ Pause, 🔁 Reset controls
- Works great for projecting and sharing via student Chromebooks

## To Deploy on Render:
1. Create a new public GitHub repository and upload these files.
2. Go to [https://render.com](https://render.com) and click “New → Web Service”.
3. Connect your GitHub repo and choose this project.
4. Use the following settings:
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Port**: `3000`
5. Share the Render-generated URL with your students.

---

This version is simple, lightweight, and built for classroom collaboration!
