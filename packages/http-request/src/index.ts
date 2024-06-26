import { Auth, GetTokenOptions, RemoteStore, Request } from "../lib";

const request = new Request(
  new Auth({
    username: "admin",
    password: "111111",
  }),
  {
    baseURL: "http://192.168.111.172:9000",
  }
);
async function bootstrap() {
  await request.init();
  const app = await request.get("/api/my/profile?app=hispro&device=desktop");
  console.log(`app`, app);
}
bootstrap();
