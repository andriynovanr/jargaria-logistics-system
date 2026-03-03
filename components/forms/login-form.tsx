"use client"

// components/forms/login-form.tsx
// Login Form Component — Neo-Brutalism Style

import { useState } from "react"
import Image from "next/image"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"
import { APP_NAME, APP_SUBTITLE, APP_YEAR } from "@/lib/constants"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Neo-Brutalism style tokens
  const neo = {
    border: "border-[3px] border-black",
    shadow: "shadow-[5px_5px_0_0_#000]",
    shadowSm: "shadow-[3px_3px_0_0_#000]",
    press: "active:translate-x-[5px] active:translate-y-[5px] active:shadow-none",
    pressSm: "active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1C110A 0%, #2A1A10 25%, #231510 50%, #1A0E08 75%, #0F0906 100%)",
      }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ==================== LOGIN CARD ==================== */}
      <div className="relative z-10 w-full max-w-[480px] mx-4">
        
        {/* Card with Neo-Brutalism + golden accent border */}
        <div className={`bg-[#FFF8E7] ${neo.border} ${neo.shadow} relative`}>
          
          {/* Golden inner border accent */}
          <div className="absolute inset-[6px] border-[2px] border-[#D4A843] pointer-events-none" />

          <div className="p-8 pt-10 relative">
            
            {/* ===== LOGO & TITLE ===== */}
            <div className="text-center mb-8">
              {/* Logo */}
              <div className="flex justify-center mb-5">
                <Image
                  src="/logo-jargaria.png"
                  alt="Jargaria Ekspedisi"
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title */}
              <h1 className="text-[26px] font-extrabold text-[#2C1810] tracking-wide uppercase leading-tight">
                {APP_NAME}
              </h1>
              <p className="text-sm font-medium text-[#8B6914] mt-1 tracking-widest uppercase">
                {APP_SUBTITLE}
              </p>
            </div>

            {/* ===== FORM ===== */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-extrabold text-[#2C1810] uppercase tracking-wider block">
                  Email
                </label>
                <div className={`flex items-center bg-white ${neo.border} ${neo.shadowSm} h-[48px] transition-all focus-within:translate-x-[-2px] focus-within:translate-y-[-2px] focus-within:shadow-[5px_5px_0_0_#000]`}>
                  <div className="pl-3 pr-2 flex items-center">
                    <Mail className="w-[18px] h-[18px] text-[#8B6914]" strokeWidth={2.5} />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="admin@jargaria.com"
                    className="flex-1 h-full bg-transparent outline-none text-[15px] text-[#2C1810] placeholder:text-[#B8A080] font-medium pr-4"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-xs font-extrabold text-[#2C1810] uppercase tracking-wider block">
                  Password
                </label>
                <div className={`flex items-center bg-white ${neo.border} ${neo.shadowSm} h-[48px] transition-all focus-within:translate-x-[-2px] focus-within:translate-y-[-2px] focus-within:shadow-[5px_5px_0_0_#000]`}>
                  <div className="pl-3 pr-2 flex items-center">
                    <Lock className="w-[18px] h-[18px] text-[#8B6914]" strokeWidth={2.5} />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="flex-1 h-full bg-transparent outline-none text-[15px] text-[#2C1810] placeholder:text-[#B8A080] font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="pr-3 pl-2 flex items-center cursor-pointer hover:opacity-70 transition-opacity"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-[18px] h-[18px] text-[#8B6914]" strokeWidth={2.5} />
                    ) : (
                      <Eye className="w-[18px] h-[18px] text-[#8B6914]" strokeWidth={2.5} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-5 h-5 border-[2.5px] border-black flex items-center justify-center cursor-pointer transition-colors ${
                      rememberMe ? "bg-[#D4A843]" : "bg-white"
                    }`}
                  >
                    {rememberMe && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="black" strokeWidth="2.5" strokeLinecap="square" />
                      </svg>
                    )}
                  </div>
                  <span className="text-sm font-bold text-[#2C1810]">Ingat Saya</span>
                </label>

                <button type="button" className="text-sm font-bold text-[#8B6914] hover:text-[#2C1810] cursor-pointer transition-colors underline decoration-2 underline-offset-2">
                  Lupa Password?
                </button>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full h-[52px] bg-[#D4A843] hover:bg-[#C49A3A] ${neo.border} ${neo.shadow} ${neo.press} text-[#2C1810] text-base font-extrabold uppercase tracking-wider cursor-pointer transition-all duration-100 flex items-center justify-center gap-2`}
                >
                  Masuk
                  <ArrowRight className="w-5 h-5" strokeWidth={3} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <p className="relative z-10 text-center text-xs text-[#8B7355] mt-8 font-medium tracking-wide">
        © {APP_YEAR} {APP_NAME}. Internal Use Only.
      </p>
    </div>
  )
}
