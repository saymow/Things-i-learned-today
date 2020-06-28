import { QueueOptions } from "bull";

const config: QueueOptions = {
  redis: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT || 0),
  },
};

export default config;
