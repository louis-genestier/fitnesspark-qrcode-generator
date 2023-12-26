import { Elysia } from "elysia";
import { generateQRCodePayload, getEpochPlusOneMinute } from "./utils/payload";
import QRCode from "qrcode";
import { config } from "./utils/config";

new Elysia()
  .get("/qrcode/:id/:number", async ({ params: { id, number } }) => {
    const payload = generateQRCodePayload(id, number, getEpochPlusOneMinute());
    try {
      await QRCode.toFile(`./public/qrcode-${id}-${number}.png`, payload, {
        width: 205,
        margin: 2,
      });
    } catch (e: any) {
      throw new Error(e.message);
    }
  })
  .get("/image/:id/:number", async ({ params: { id, number } }) =>
    Bun.file(`./public/qrcode-${id}-${number}.png`)
  )
  .listen(
    {
      port: config.port,
      hostname: "0.0.0.0",
    },
    () => console.log(`Listening on port ${config.port}`)
  );
