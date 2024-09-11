const net = require("net");

const tcpServer = net.createServer((socket) => {
    socket.on("data", (data) => {
        const stringifiedData = data.toString('base64');
        console.log(`[${new Date().toISOString()}] Client ${socket.remoteAddress}:${socket.remotePort} sent:`);
        console.log(`   DATA: ${stringifiedData}`)

        if (data.length === 19 && stringifiedData.endsWith('AA==')) {
            console.log(`   HEARTBEAT back`)
            setTimeout(() => socket.write(data), 100);
        }
    })

    socket.on('end', () => {
        console.log(`[${new Date().toISOString()}] Client ${socket.remoteAddress}:${socket.remotePort} Client disconnected`);
    });

    socket.on('error', (err) => {
        if (err.code === 'ECONNRESET') {
            console.error(`[${new Date().toISOString()}] Connection reset by client: ${socket.remoteAddress}:${socket.remotePort}`);
        } else {
            console.error(`[${new Date().toISOString()}] Socket error from ${socket.remoteAddress}:${socket.remotePort}:`, err);
        }
        socket.destroy();  // Gracefully close the socket on error
    });
});

const port = 4346; // can be changed but then you will also need to change it in MICO UI > Network settings
tcpServer.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}`)
});