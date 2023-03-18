package com.kukininj.PostApp.controllers;

import org.springframework.messaging.handler.annotation.MessageExceptionHandler;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;

import java.security.Principal;

// @Controller
// public class WebSocketController {
//
//     @MessageMapping("/hello")
//     @SendToUser("/queue/reply")
//     public String processMessageFromClient(@Payload String messaage, Principal principal) {
//         return "{message:'HI'}";
//     }
//
//
//     @MessageExceptionHandler
//     @SendToUser("/queue/errors")
//     public String handleException(Throwable exception) {
//         return exception.getMessage();
//     }
// }
//