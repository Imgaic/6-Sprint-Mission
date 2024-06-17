import SnsLink from "@ui/SnsLink";
import styles from "./styles.module.css";

function SocialLogin() {
  return (
    <div className={styles.layout}>
      <div className={styles.phrase}>간편 로그인하기</div>
      <div className={styles.snsLinks}>
        <SnsLink type="google" page="auth" />
        <SnsLink type="kakaotalk" page="auth" />
      </div>
    </div>
  );
}

export default SocialLogin;
