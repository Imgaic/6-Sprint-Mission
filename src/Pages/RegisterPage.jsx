import { Link } from "react-router-dom";
import RegisterFormContainer from "@container/RegisterFormContainer";
import Logo from "@ui/Logo";
import SocialLogin from "@ui/SocialLogin";
import styles from "@styles/auth.module.css";

function RegisterPage() {
  return (
    <div className={styles.layout}>
      <Logo type="auth" />
      <RegisterFormContainer />
      <SocialLogin />
      <div className={styles.phrase}>
        이미 회원이신가요?{" "}
        <Link className={styles.link} to="/login">
          로그인
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
