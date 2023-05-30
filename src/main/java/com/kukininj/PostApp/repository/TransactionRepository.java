package com.kukininj.PostApp.repository;

import com.kukininj.PostApp.models.Transaction;
import com.kukininj.PostApp.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;
import java.util.UUID;

public interface TransactionRepository extends JpaRepository<Transaction, UUID> {
    @Query("FROM Transaction t WHERE t.id=?1 and ?2 in (t.client, t.merchant)")
    Optional<Transaction> findByIdAndClientOrMerchant(UUID transaction, User client);
}
