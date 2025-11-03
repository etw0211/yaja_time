import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "야자타임 - 로그인";
  }, []);

  const goHome = () => navigate("/");
  const handleLogin = () => {
    if (!username || !password) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    alert("로그인 시도: " + username);
    // 여기에 실제 로그인 로직 추가
  };
  const handleSignup = () => navigate("/sign-up");

  const onPasswordKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif; }
        .page-root {
          background: linear-gradient(135deg, #f5f3ef 0%, #e8e4dc 100%);
          min-height: 100vh; display: flex; flex-direction: column;
          align-items: center; justify-content: center; padding: 20px;
        }
        .home-btn { position: absolute; top: 20px; left: 20px; padding: 10px;
          border: 1px solid #d4d4d4; border-radius: 8px; background: #ffffff;
          color: #1a1a1a; cursor: pointer; transition: all 0.2s;
          display: flex; align-items: center; justify-content: center; width: 44px; height: 44px;
        }
        .home-btn:hover { background: #f5f5f5; }
        .home-btn svg { width: 24px; height: 24px; }
        .login-container { background: #ffffff; padding: 40px; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
        .logo { font-size: 32px; font-weight: 600; color: #1a1a1a; text-align: center; margin-bottom: 40px; }
        .input-group { margin-bottom: 20px; }
        label { display: block; font-size: 14px; font-weight: 500; color: #1a1a1a; margin-bottom: 8px; }
        input { width: 100%; padding: 14px; border: 1px solid #d4d4d4; border-radius: 8px; font-size: 16px; transition: all 0.2s; }
        input:focus { outline: none; border-color: #1a1a1a; box-shadow: 0 0 0 3px rgba(26,26,26,0.1); }
        .btn { width: 100%; padding: 14px; border: none; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .btn-primary { background: #1a1a1a; color: #ffffff; margin-bottom: 12px; }
        .btn-primary:hover { background: #2d2d2d; }
        .btn-secondary { background: transparent; color: #1a1a1a; border: 1px solid #d4d4d4; }
        .btn-secondary:hover { background: #f5f5f5; }
        @media (max-width: 480px) {
          .login-container { padding: 30px 20px; }
          .logo { font-size: 28px; }
        }
      `}</style>

      <div className="page-root">
        <button className="home-btn" onClick={goHome} aria-label="홈으로">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </button>

        <div className="login-container">
          <div className="logo">야자타임</div>

          <div className="input-group">
            <label htmlFor="username">아이디</label>
            <input
              id="username"
              type="text"
              placeholder="아이디를 입력하세요"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={onPasswordKeyDown}
            />
          </div>

          <button className="btn btn-primary" onClick={handleLogin}>로그인</button>
          <button className="btn btn-secondary" onClick={handleSignup}>회원가입</button>
        </div>
      </div>
    </div>
  );
}
