import { useState } from "react";
import { useForm } from "react-hook-form";

// ── SVG Icons ────────────────────────────────────────────────────
const UserIcon = () => (
  <svg className="w-[18px] h-[18px] text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg className="w-[18px] h-[18px] text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 7l10 7 10-7"/>
  </svg>
);

const EyeIcon = ({ open }) => open ? (
  <svg className="w-[18px] h-[18px] text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
) : (
  <svg className="w-[18px] h-[18px] text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-9 h-9 text-green-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
  </svg>
);

// ── Reusable Input Field ─────────────────────────────────────────
function Field({ label, placeholder, type = "text", icon, registration, error }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-gray-600 tracking-wide">{label}</label>
      <div className={`
        flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-gray-50
        border transition-all duration-200
        ${error ? "border-red-400 bg-red-50/60" : "border-gray-200 focus-within:border-[#1e2d5e] focus-within:bg-white focus-within:shadow-sm"}
      `}>
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none"
          {...registration}
        />
        {icon}
      </div>
      {error && (
        <p className="text-[11px] text-red-500 flex items-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
}

// ── Password Field with show/hide ────────────────────────────────
function PasswordField({ label, placeholder, registration, error }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-gray-600 tracking-wide">{label}</label>
      <div className={`
        flex items-center gap-2.5 px-3.5 py-3 rounded-xl bg-gray-50
        border transition-all duration-200
        ${error ? "border-red-400 bg-red-50/60" : "border-gray-200 focus-within:border-[#1e2d5e] focus-within:bg-white focus-within:shadow-sm"}
      `}>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-[14px] text-gray-800 placeholder-gray-400 outline-none"
          {...registration}
        />
        <button type="button" onClick={() => setShow(s => !s)} className="flex-shrink-0 hover:text-[#1e2d5e] transition-colors">
          <EyeIcon open={show} />
        </button>
      </div>
      {error && (
        <p className="text-[11px] text-red-500 flex items-center gap-1">
          <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
}

// ── Left Decorative Panel ────────────────────────────────────────
function LeftPanel() {
  return (
    <div className="hidden lg:flex w-[45%] bg-[#1e2d5e] flex-col items-center justify-center gap-8 p-12 relative overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-white/5"/>
      <div className="absolute bottom-[-60px] right-[-60px] w-[250px] h-[250px] rounded-full bg-white/5"/>
      <div className="absolute top-[40%] right-[-40px] w-[150px] h-[150px] rounded-full bg-[#e9a825]/10"/>

      {/* Illustration */}
      <div className="w-64 h-64 rounded-full bg-[#f4f3f0] shadow-2xl flex items-center justify-center overflow-hidden relative z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <circle cx="100" cy="100" r="100" fill="#f4f3f0"/>
          {/* Window frame */}
          <rect x="55" y="25" width="75" height="85" rx="5" fill="#d5dce8"/>
          <rect x="55" y="25" width="75" height="85" rx="5" fill="none" stroke="#b0bcd0" strokeWidth="1.5"/>
          <line x1="92" y1="25" x2="92" y2="110" stroke="#b0bcd0" strokeWidth="1.5"/>
          <line x1="55" y1="66" x2="130" y2="66" stroke="#b0bcd0" strokeWidth="1.5"/>
          {/* Window pane highlights */}
          <rect x="58" y="28" width="31" height="35" rx="2" fill="#e8edf5" opacity="0.7"/>
          <rect x="95" y="28" width="32" height="35" rx="2" fill="#e8edf5" opacity="0.5"/>
          {/* Person legs */}
          <path d="M88 170 L84 195" stroke="#2a3a7a" strokeWidth="7" strokeLinecap="round"/>
          <path d="M112 170 L116 195" stroke="#2a3a7a" strokeWidth="7" strokeLinecap="round"/>
          {/* Person body */}
          <ellipse cx="100" cy="158" rx="24" ry="18" fill="#2a3a7a"/>
          {/* Shirt collar */}
          <path d="M90 145 Q100 152 110 145" stroke="white" strokeWidth="1.5" fill="none"/>
          {/* Person neck */}
          <rect x="95" y="128" width="10" height="12" rx="2" fill="#f4a58a"/>
          {/* Person head */}
          <circle cx="100" cy="120" r="17" fill="#f4a58a"/>
          {/* Hair */}
          <path d="M83 116 Q84 103 100 101 Q116 103 117 116 Q116 108 100 106 Q84 108 83 116Z" fill="#3d2518"/>
          {/* Face features */}
          <circle cx="95" cy="119" r="1.5" fill="#3d2518"/>
          <circle cx="105" cy="119" r="1.5" fill="#3d2518"/>
          <path d="M96 125 Q100 128 104 125" stroke="#c27a5a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* Left arm holding paper */}
          <path d="M78 148 Q62 138 64 122" stroke="#f4a58a" strokeWidth="7" strokeLinecap="round" fill="none"/>
          {/* Right arm */}
          <path d="M122 148 Q138 138 136 122" stroke="#f4a58a" strokeWidth="7" strokeLinecap="round" fill="none"/>
          {/* Paper / document */}
          <rect x="52" y="112" width="26" height="34" rx="3" fill="white" transform="rotate(-12 65 129)" stroke="#ddd" strokeWidth="1"/>
          <line x1="56" y1="124" x2="73" y2="119" stroke="#ccc" strokeWidth="1.5"/>
          <line x1="56" y1="130" x2="73" y2="125" stroke="#ccc" strokeWidth="1.5"/>
          <line x1="57" y1="136" x2="68" y2="132" stroke="#ccc" strokeWidth="1.5"/>
          {/* Speech bubble */}
          <ellipse cx="150" cy="72" rx="34" ry="24" fill="white" opacity="0.92"/>
          <polygon points="128,82 120,92 135,85" fill="white" opacity="0.92"/>
          <text x="138" y="77" fontSize="13" fontWeight="800" fill="#1e2d5e" fontFamily="Georgia, serif">SAPP</text>
          {/* Leaf decorations */}
          <ellipse cx="40" cy="85" rx="14" ry="7" fill="#b8c4a8" opacity="0.6" transform="rotate(-30 40 85)"/>
          <ellipse cx="32" cy="95" rx="10" ry="5" fill="#b8c4a8" opacity="0.4" transform="rotate(-50 32 95)"/>
        </svg>
      </div>

      {/* Text content */}
      <div className="text-center relative z-10">
        <h2 className="text-white font-bold text-2xl tracking-tight mb-2" style={{fontFamily: "Georgia, serif"}}>
          Welcome Aboard
        </h2>
        <p className="text-blue-200/80 text-sm leading-relaxed">
          Just a couple of clicks and we start
        </p>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-2.5 relative z-10">
        <span className="w-3 h-3 rounded-full bg-white shadow-sm"/>
        <span className="w-2.5 h-2.5 rounded-full bg-white/35"/>
        <span className="w-2 h-2 rounded-full bg-white/20"/>
      </div>
    </div>
  );
}

// ── Main Sign Up Component ────────────────────────────────────────
export default function RegisterComponent() {
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const password = watch("password");

  const onSubmit = async (data) => {
    await new Promise(r => setTimeout(r, 900));
    console.log("✅ Submitted:", data);
    setDone(true);
  };

  return (
    <div className="flex min-h-screen" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* ── Left Panel ── */}
      <LeftPanel />

      {/* ── Right Panel ── */}
      <div className="flex-1 bg-white flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-[440px]">

          {/* ── Success Screen ── */}
          {done ? (
            <div className="flex flex-col items-center gap-5 text-center py-12 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center shadow-sm">
                <CheckIcon />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1e2d5e] mb-1" style={{fontFamily: "Georgia, serif"}}>
                  Account Created!
                </h2>
                <p className="text-gray-500 text-sm">Welcome aboard. You're ready to sign in.</p>
              </div>
              <button
                onClick={() => setDone(false)}
                className="mt-2 text-sm text-[#e9a825] font-semibold hover:underline"
              >
                ← Back to Sign Up
              </button>
            </div>

          ) : (
            /* ── Form ── */
            <>
              <div className="mb-8">
                <h1 className="text-[38px] font-extrabold text-[#1e2d5e] leading-tight tracking-tight" style={{fontFamily: "Georgia, serif"}}>
                  Create Account
                </h1>
                <p className="text-gray-400 text-sm mt-1">Fill in the details below to get started</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">

                {/* Row: First + Last Name */}
                <div className="grid grid-cols-2 gap-3">
                  <Field
                    label="First Name"
                    placeholder="John"
                    icon={<UserIcon />}
                    registration={register("firstName", {
                      required: "First name required",
                      minLength: { value: 2, message: "Min 2 characters" },
                    })}
                    error={errors.firstName}
                  />
                  <Field
                    label="Last Name"
                    placeholder="Doe"
                    icon={<UserIcon />}
                    registration={register("lastName", {
                      required: "Last name required",
                      minLength: { value: 2, message: "Min 2 characters" },
                    })}
                    error={errors.lastName}
                  />
                </div>

                {/* Email */}
                <Field
                  label="Email"
                  placeholder="johndoe@gmail.com"
                  type="email"
                  icon={<MailIcon />}
                  registration={register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  error={errors.email}
                />

                {/* Row: Password + Confirm */}
                <div className="grid grid-cols-2 gap-3">
                  <PasswordField
                    label="Password"
                    placeholder="••••••••••••••"
                    registration={register("password", {
                      required: "Password required",
                      minLength: { value: 8, message: "Min 8 characters" },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*\d)/,
                        message: "Need 1 uppercase & 1 number",
                      },
                    })}
                    error={errors.password}
                  />
                  <PasswordField
                    label="Confirm Password"
                    placeholder="••••••••••••••"
                    registration={register("confirmPassword", {
                      required: "Please confirm",
                      validate: val => val === password || "Passwords don't match",
                    })}
                    error={errors.confirmPassword}
                  />
                </div>

                {/* Google */}
                <button
                  type="button"
                  className="mt-2 w-full flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl py-3 text-[14px] font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-[0.99] transition-all duration-150 shadow-sm"
                >
                  <GoogleIcon />
                  Sign up with Google
                </button>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#e9a825] hover:bg-[#d49520] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-[15px] py-3.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Creating Account...
                    </>
                  ) : "Sign Up"}
                </button>

                {/* Footer link */}
                <p className="text-center text-[13px] text-gray-500 mt-1">
                  Already a member?{" "}
                  <a href="/login" className="text-[#e9a825] font-bold hover:underline">
                    Sign In
                  </a>
                </p>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}