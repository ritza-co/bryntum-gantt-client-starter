import { Gantt } from "@bryntum/gantt";
import "@bryntum/gantt/gantt.stockholm.css";

const gantt = new Gantt({
  appendTo: document.body,

  columns: [{ type: "name", width: 250, text: "Tasks" }],
});
