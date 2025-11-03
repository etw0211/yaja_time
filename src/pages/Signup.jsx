import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    passwordConfirm: false,
    nickname: false,
  });

  useEffect(() => {
    document.title = "야자타임 - 회원가입";
  }, []);

  const goHome = () => navigate("/");

  const validateEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleNext = () => {
    const nextErrors = {
      email: !email || !validateEmail(email),
      password: !password || password.length < 8,
      passwordConfirm: password !== passwordConfirm,
      nickname: !nickname,
    };
    setErrors(nextErrors);

    const isValid = Object.values(nextErrors).every((v) => v === false);
    if (isValid) {
      alert(`회원가입 정보:\n이메일: ${email}\n닉네임: ${nickname}`);
      // 여기에 실제 회원가입 처리 로직 추가
    }
  };

  const onNicknameKeyDown = (e) => {
    if (e.key === "Enter") handleNext();
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
        .signup-container { background: #ffffff; padding: 40px; border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1); width: 100%; max-width: 400px; }
        .logo { font-size: 32px; font-weight: 600; color: #1a1a1a; text-align: center; margin-bottom: 10px; }
        .subtitle { text-align: center; color: #666; font-size: 14px; margin-bottom: 30px; }
        .input-group { margin-bottom: 20px; }
        label { display: block; font-size: 14px; font-weight: 500; color: #1a1a1a; margin-bottom: 8px; }
        input { width: 100%; padding: 14px; border: 1px solid #d4d4d4; border-radius: 8px; font-size: 16px; transition: all 0.2s; }
        input:focus { outline: none; border-color: #1a1a1a; box-shadow: 0 0 0 3px rgba(26,26,26,0.1); }
        .error-message { color: #e74c3c; font-size: 12px; margin-top: 6px; display: none; }
        .error-message.show { display: block; }
        .btn { width: 100%; padding: 14px; border: none; border-radius: 8px; font-size: 16px; font-weight: 500; cursor: pointer; transition: all 0.2s; background: #1a1a1a; color: #ffffff; margin-top: 10px; }
        .btn:hover { background: #2d2d2d; }
        /* ✅ 추가된 로그인 이동 문구 */
        .login-redirect { text-align: center; margin-top: 20px; font-size: 14px; color: #666; }
        .login-link { color: #1a1a1a; font-weight: 500; text-decoration: none; transition: color 0.2s; }
        .login-link:hover { color: #000; text-decoration: underline; }
        @media (max-width: 480px) {
          .signup-container { padding: 30px 20px; }
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

        <div className="signup-container">
          <div className="logo">야자타임</div>
          <div className="subtitle">회원가입</div>

          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input id="email" type="email" placeholder="example@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className={`error-message ${errors.email ? "show" : ""}`}>올바른 이메일을 입력해주세요.</div>
          </div>

          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input id="password" type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
            <div className={`error-message ${errors.password ? "show" : ""}`}>비밀번호는 8자 이상이어야 합니다.</div>
          </div>

          <div className="input-group">
            <label htmlFor="password-confirm">비밀번호 확인</label>
            <input id="password-confirm" type="password" placeholder="비밀번호를 다시 입력하세요" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
            <div className={`error-message ${errors.passwordConfirm ? "show" : ""}`}>비밀번호가 일치하지 않습니다.</div>
          </div>

          <div className="input-group">
            <label htmlFor="nickname">닉네임</label>
            <input id="nickname" type="text" placeholder="닉네임을 입력하세요" value={nickname} onChange={(e) => setNickname(e.target.value)} onKeyDown={onNicknameKeyDown} />
            <div className={`error-message ${errors.nickname ? "show" : ""}`}>닉네임을 입력해주세요.</div>
          </div>

          <button className="btn" onClick={handleNext}>다음</button>

          {/* ✅ 로그인 페이지로 이동 문구 */}
          <div className="login-redirect">
            이미 계정이 있으신가요?{" "}
            <Link to="/login" className="login-link">로그인하기</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
