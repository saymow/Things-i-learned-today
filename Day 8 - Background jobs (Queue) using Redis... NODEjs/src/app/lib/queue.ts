import Queue from "bull";
import redisConfig from "../../config/redis";

import * as Jobs from "../jobs";

const queues = Object.values(Jobs).map((job) => ({
  bull: new Queue(job.key, redisConfig),
  name: job.key,
  handle: job.handle,
  options: job.options,
}));

export default {
  queues,
  add(name: string, data: {}) {
    const queue = this.queues.find((queue) => queue.name === name);

    return queue?.bull.add(data, queue.options);
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job) => {
        console.log("Job failed", queue.name, job.data);
      });
    });
  },
};
