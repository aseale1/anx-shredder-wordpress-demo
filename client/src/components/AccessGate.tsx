import { useState, useEffect } from "react";

const ACCESS_CODE = "anxshred";

export default function AccessGate({ children }: { children: React.ReactNode }) {
    const [authorized, setAuthorized] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("demo_access");
        if (saved === "granted") {
            setAuthorized(true);
        }
    }, []);

    const handleSubmit = () => {
        if (input === ACCESS_CODE) {
            localStorage.setItem("demo_access", "granted");
            setAuthorized(true);
        } else {
            alert("Incorrect access code.");
        }
    };

    if (!authorized) {
        return (
            <div style={{ padding: "2rem", textAlign: "center" }}>
                <h2>Enter Access Code</h2>
                <input
                    type="password"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{ padding: "8px", marginBottom: "10px" }}
                    />
                <button onClick={handleSubmit} style={{ padding: "8px 16px" }}>
            Enter
            </button>
      </div>
    );
  }

  return <>{children}</>;
}