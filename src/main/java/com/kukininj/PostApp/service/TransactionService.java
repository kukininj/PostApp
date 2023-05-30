package com.kukininj.PostApp.service;

import com.kukininj.PostApp.models.*;
import com.kukininj.PostApp.repository.MessageRepository;
import com.kukininj.PostApp.repository.PostRepository;
import com.kukininj.PostApp.repository.TransactionRepository;
import com.kukininj.PostApp.repository.UserRepository;
import com.kukininj.PostApp.security.SessionData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionService {
    @Autowired
    MessageRepository messages;

    @Autowired
    TransactionRepository transactions;

    @Autowired
    PostRepository posts;

    @Autowired
    UserRepository users;

    @Autowired
    SessionData session;

    public Transaction createTransaction(
            UUID postId
    ) {
        if (!session.loggedIn()) {
            throw new RuntimeException("you need to be logged in!!!");
        }

        Post post = posts.findById(postId).orElseThrow();
        User merchant = post.creator;
        User client = users.findById(session.getUserID()).orElseThrow();

        if (merchant.id == client.id) {
            throw new RuntimeException("you cant transact with yourself!!");
        }

        Transaction transaction = new Transaction();

        transaction.id = null;
        transaction.client = client;
        transaction.merchant = merchant;
        transaction.post = post;
        transaction.notes = "";
        transaction.status = Transaction.Status.NotViewed;
        transaction.added = LocalDateTime.now();

        return transactions.save(transaction);
    }

    public List<Message> getTransactionMessages(UUID transactionId) {
        User user = users.findById(session.getUserID()).orElseThrow();
        Optional<Transaction> t = transactions.findByIdAndClientOrMerchant(transactionId, user);
        if (t.isPresent()) {
            return messages.getMessagesByTransactionOrderByAdded(t.get());
        } else {
            // could also throw an error...
            return new ArrayList<>();
        }
    }

    public Boolean sendMessage(UUID transactionId, String contents) {
        Transaction t = transactions.findById(transactionId).orElseThrow();
        User user = users.findById(session.getUserID()).orElseThrow();

        Message m = new Message();
        m.id = null;
        m.user = user;
        m.transaction = t;
        m.contents = contents;
        m.added = LocalDateTime.now();

        messages.save(m);
        return true;
    }

    public Optional<Transaction>getTransaction(UUID transactionId) {
        User user = users.findById(session.getUserID()).orElseThrow();
        return transactions.findByIdAndClientOrMerchant(transactionId, user);
    }
}
