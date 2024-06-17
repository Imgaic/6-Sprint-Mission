import { Link } from "react-router-dom";
import LoginFormContainer from "@container/LoginFormContainer";
import Logo from "@ui/Logo";
import SocialLogin from "@ui/SocialLogin";
import styles from "@styles/auth.module.css";

function LoginPage() {
  return (
    <div className={styles.layout}>
      <Logo type="auth" />
      <LoginFormContainer />
      <SocialLogin />
      <div className={styles.phrase}>
        판다마켓이 처음이신가요?{" "}
        <Link className={styles.link} to="/register">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
