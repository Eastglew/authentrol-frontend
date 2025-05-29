
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
    <h1>Authentrol Preview</h1>
    <p>This is a live preview of TrustDossier tiles and frontend UI.</p>
    <ul>
      <li>🧼 Sonia the Airbnb Host</li>
      <li>💼 Eric the Job Seeker</li>
      <li>❤️ Thomas the Dater</li>
      <li>🛠️ Jasmin the Task Helper</li>
      <li>🍝 Pasta Room (Restaurant)</li>
      <li>🔧 QuickFix Electric</li>
    </ul>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
