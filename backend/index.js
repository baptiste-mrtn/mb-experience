import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Anti-spam (limite requêtes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});
app.use("/contact", limiter);

// Transporteur OVH SMTP
const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net", // OVH SMTP
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Route contact
app.post("/contact", async (req, res) => {
  const { name, email, message, website } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  if (website) {
    return res.status(400).json({ error: "Spam détecté" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Email invalide" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_USER,
      subject: `Nouveau message de ${name}`,
      html: `
        <h3>Nouveau message</h3>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Email :</b> ${email}</p>
        <p><b>Message :</b><br/>${message}</p>
      `,
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(3001, () => {
  console.log("API contact sur http://localhost:3001");
});
