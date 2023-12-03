import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.drs.apptemplate',
  appName: 'apptemplate',
  webDir: 'dist',
  server: {
    hostname: 'apptemplate',
    androidScheme: 'https'
  }
};

export default config;
