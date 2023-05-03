// class Api {
//     private static instance: Api;
//     private socket: WebSocket;
// 
//     private constructor() {
//         try {
//             this.socket = new WebSocket("wss://localhost:8080/ws");
//             if (this.socket.OPEN) {
// 
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// 
//     public static getInstance(): Api {
//         if (!Api.instance)
//             Api.instance = new Api();
// 
//         return this.instance;
//     }
// 
//     public sendHello() {
//         let payload = {
//             type: "hello",
//             value: "Hello server!",
//         }
//         this.socket.send(JSON.stringify(payload));
//     }
// }
