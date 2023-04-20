package com.kukininj.PostApp.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping(path = {
            "/",
            "/login",
            "/account",
            "/search/**",
            "/post/**",
            "/error",
    }, produces = MediaType.TEXT_HTML_VALUE)
    public String getSinglePage() {
        return "/index.html";
    }
}
