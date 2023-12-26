import crypto from "crypto";

interface QRCodePayload {
  id: string;
  sg: string;
  t: number;
  v: "QR2";
}

const generateSignature = (exp: number, id: string, number: string): string => {
  const { createHmac } = crypto;
  const hmac = createHmac("sha256", number);
  const payload = `QR2+${exp}+${id}`;

  return hmac.update(payload).digest("hex").slice(0, 6);
};

export const generateQRCodePayload = (
  id: string,
  number: string,
  exp: number
): string => {
  const payload: QRCodePayload = {
    id,
    sg: generateSignature(exp, id, number),
    t: exp,
    v: "QR2",
  };

  return JSON.stringify(payload);
};

export const getEpochPlusOneMinute = (): number => {
  return Number(String(Date.now()).slice(0, -3)) + 60;
};
