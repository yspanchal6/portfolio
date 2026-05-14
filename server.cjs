"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server/src/app.ts
var import_express2 = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_url = require("url");

// server/src/routes/api.ts
var import_express = require("express");

// server/src/controllers/contactController.ts
var handleContactForm = async (req, res) => {
  try {
    const { name, email, type, message } = req.body;
    console.log(`Contact Form Submission: ${name} (${email}) - ${type}`);
    console.log(`Message: ${message}`);
    res.status(200).json({
      status: "success",
      message: "Transmission received. Verification in progress."
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Protocol failure during transmission"
    });
  }
};

// server/src/controllers/chatbotController.ts
var handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    res.status(200).json({
      status: "success",
      reply: "SYSTEM_STUB: This is a placeholder for the backend-powered AI response."
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Neural link interrupted"
    });
  }
};

// server/src/routes/api.ts
var router = (0, import_express.Router)();
router.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Backend systems operational" });
});
router.post("/chat", handleChat);
router.post("/contact", handleContactForm);
router.get("/profile", (req, res) => {
  res.json({
    name: "Yash Panchal",
    role: "Full-Stack Developer",
    status: "Active"
  });
});
var api_default = router;

// server/src/app.ts
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
async function startServer() {
  const app = (0, import_express2.default)();
  const PORT = 3e3;
  app.use(import_express2.default.json());
  app.use("/api", api_default);
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express2.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
