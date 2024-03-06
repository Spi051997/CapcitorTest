import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'testcapcitor',
  webDir: 'build',
  server: {
     url:'http://192.168.29.253:3000',
     cleartext:true

  }
};

export default config;
