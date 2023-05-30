package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Message;
import com.kukininj.PostApp.models.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface MessageRepository extends JpaRepository<Message, UUID> {
    List<Message> getMessagesByTransactionOrderByAdded(Transaction transaction);
}
