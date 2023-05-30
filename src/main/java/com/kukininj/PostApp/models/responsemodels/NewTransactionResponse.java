package com.kukininj.PostApp.models.responsemodels;

import com.kukininj.PostApp.models.Transaction;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public class NewTransactionResponse {
    public Optional<Transaction> transaction;
    public Optional<String> error;

    NewTransactionResponse(Exception e) {
        this.error = Optional.of(e.getMessage());
        this.transaction = Optional.empty();
    }

    NewTransactionResponse(Transaction transaction) {
        this.error = Optional.empty();
        this.transaction = Optional.of(transaction);
    }

    public static ResponseEntity<NewTransactionResponse> Fail(Exception e) {
        return ResponseEntity.ok(new NewTransactionResponse(e));
    }
    public static ResponseEntity<NewTransactionResponse> Success(Transaction transaction) {
        return ResponseEntity.ok(new NewTransactionResponse(transaction));
    }
}
