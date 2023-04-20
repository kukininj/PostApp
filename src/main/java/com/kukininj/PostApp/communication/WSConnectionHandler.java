package com.kukininj.PostApp.communication;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.kukininj.PostApp.communication.messages.IMessage;
import com.kukininj.PostApp.communication.messages.MessageType;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * ws2 = new WebSocket("ws://localhost:8080/ws")
 * ws2.onmessage=console.log
 * ws = new WebSocket("ws://localhost:8080/ws")
 * ws.onmessage=console.log
 * message = {
 * type: "hello",
 * body: {
 * value: 123,
 * }
 * }
 * ws2.send(JSON.stringify(message))
 */

@Component
public class WSConnectionHandler extends TextWebSocketHandler {

    Set<WebSocketSession> sessions = new HashSet<>();
    ObjectMapper mapper = new ObjectMapper();

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message)
            throws InterruptedException, IOException {
        String payload = message.getPayload();

        try {
            IMessage messageObj = IMessage.dispatchMessage(mapper.readTree(payload));
            System.out.println(messageObj);
            if (messageObj.getType() == MessageType.HELLO) {
                notifyActiveSessions(messageObj);
            }
        } catch (JsonProcessingException e) {
            session.sendMessage(new TextMessage("Invalid JSON"));
            // throw new RuntimeException(e);
        }
    }

    void notifyActiveSessions(IMessage message) throws IOException {
        for (WebSocketSession webSocketSession : sessions) {
            JsonNode response = message.toJson(mapper);
            String payload = mapper.writeValueAsString(response);
            System.out.println(payload);
            webSocketSession.sendMessage(new TextMessage(payload));
        }
    }
    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session,
                                      CloseStatus closeStatus)
            throws Exception {
        sessions.remove(session);
    }
}
