// first example
let server_logs = [
  { ServerName: "DHCP Server 1", CPU_USAGE: 50, Mem_Usage: 60 },
  { ServerName: "DHCP Server 2", CPU_USAGE: 81, Mem_Usage: 89 },
  { ServerName: "DHCP Server 3", CPU_USAGE: 80, Mem_Usage: 60 },
  { ServerName: "DHCP Server 4", CPU_USAGE: 82, Mem_Usage: 50 },
  { ServerName: "DHCP Server 5", CPU_USAGE: 75, Mem_Usage: 20 },
];

function check_performance(data, callback) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].CPU_USAGE > 80) {
      if (typeof callback === "function") {. //sanity check to ensure that what we are passing is really a function
        callback(data[i]);
      }
    }
  }
}

let result = check_performance(server_logs, (data) => {
  if (data.Mem_Usage > 60) {
    console.log(
      `Server ${data.ServerName} CPU usage is ${data.CPU_USAGE}% and its Memory usage is ${data.Mem_Usage}% , check it out before it bursts \n`
    );
  }
});
