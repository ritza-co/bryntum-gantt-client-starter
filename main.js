import { Gantt } from "@bryntum/gantt";
import "@bryntum/gantt/gantt.stockholm.css";

const gantt = new Gantt({
  appendTo: document.body,
  project: {
    taskStore: {
      autoTree: true,
      transformFlatData: true,
    },
    transport: {
      load: {
        url: "http://localhost:1337/data",
      },
      sync: {
        url: "http://localhost:1337/api",
      },
    },
    autoLoad: true,
    autoSync: true,
    validateResponse: true,
  },

  columns: [{ type: "name", width: 250, text: "Tasks" }],
});
