import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.powerUpTesting.app",
  appName: "PowerUp",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
