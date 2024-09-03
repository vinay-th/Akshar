import '../components/Login.css';

const Login = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-[1200px] flex items-center justify-center relative">
        <a href="/" className="absolute left-[-50px] top-[-50px]">
          <button className="login-back cursor-pointer border-gray-100 border-[2px] border-solid py-px px-0.5 bg-white w-48 rounded-2xl box-border flex flex-row items-center justify-start gap-[11px]">
            <img
              className="h-12 w-[47px] relative rounded-xl"
              alt=""
              src="/login-back.svg"
            />
            <div className="w-[110px] flex flex-col items-start justify-center">
              <span className="login-back-txt self-stretch relative text-xl leading-[28px] font-semibold font-title text-center mix-blend-normal mq450:text-base mq450:leading-[22px]">
                Go Back
              </span>
            </div>
          </button>
        </a>
        <div className="flex items-center justify-center">
          <div className="card login-gradient">
            <span className="login">
              <i class="fa-solid fa-right-to-bracket"></i>&nbsp; Login
            </span>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Username</span>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
            </div>
            <button className="enter">Enter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
