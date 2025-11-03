import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MainPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = "야자타임";
  }, []);

  const onSend = () => {
    if (message.trim()) {
      alert("메시지: " + message);
      setMessage("");
    }
  };

  const onInputKeyDown = (e) => {
    if (e.key === "Enter" && message.trim()) {
      alert("메시지: " + message);
      setMessage("");
    }
  };

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; }
        .page-root {
          background: linear-gradient(135deg, #f5f3ef 0%, #e8e4dc 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        header {
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;     
        }
        .logo {
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
        }
        .btn {
          padding: 10px 20px;
          border: 1px solid #d4d4d4;
          border-radius: 8px;
          font-size: 14px;
          background: transparent;
          color: #1a1a1a;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .btn:hover { background: #ffffff; }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          transform: translateY(-50px); /* 👈 전체를 살짝 위로 이동 */
        }
        h1 {
          font-size: 48px;
          font-weight: 400;
          color: #1a1a1a;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 18px;
          color: #666;
          margin-bottom: 40px;
        }
        .chat-input-container {
          width: 100%;
          max-width: 700px;
          position: relative;
        }
        .chat-input {
          width: 100%;
          padding: 18px 60px 18px 20px;
          border: 1px solid #d4d4d4;
          border-radius: 12px;
          font-size: 16px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .chat-input:focus {
          outline: none;
          border-color: #1a1a1a;
        }
        .send-button {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: #1a1a1a;
          color: white;
          border: none;
          border-radius: 8px;
          width: 36px;
          height: 36px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .link-reset {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          h1 { font-size: 36px; }
        }
      `}</style>

      <div className="page-root">
        <header>
          <div className="logo">
            <Link to="/" className="link-reset">yaja time</Link>
          </div>
          <Link to="/login" className="btn link-reset" role="button">
            로그인
          </Link>
        </header>

        <main>
          <h1>야자타임</h1>
          <p className="subtitle">야자타임과 함께 스터디그룹을 만들어 보아요!</p>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="야자타임에게 물어보기"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onInputKeyDown}
            />
            <button className="send-button" onClick={onSend} aria-label="전송">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12L19 12M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
