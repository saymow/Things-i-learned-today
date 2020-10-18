import { IncomingMessage } from "http";

export default function parseBody(req: IncomingMessage): Promise<any> {
  return new Promise((res, rej) => {
    try {
      let body = "";
      req.on("data", (chunk: Buffer) => {
        body += chunk.toString();
      });
      req.on("end", () => res(JSON.parse(body)));
    } catch (err) {
      rej(err);
    }
  });
}
