import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the assets folder directly
  app.use('/src/assets', (req, res, next) => {
    const assetPath = path.join(process.cwd(), 'attached_assets', req.path);
    res.sendFile(assetPath, err => {
      if (err) next();
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
