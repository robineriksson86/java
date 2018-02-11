package com.example.Domain;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Quote {

    @NotNull
    @Size(min = 3, max = 60)
    private String quote;

    @NotNull
    private String quoteType;

    private int id;

    public Quote(int id, String quote, String quoteType){
        this.quote=quote;
        this.quoteType=quoteType;
        this.id=id;
    }

    public Quote() {
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }

    public String getQuoteType() {
        return quoteType;
    }

    public void setQuoteType(String quoteType) {
        this.quoteType = quoteType;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
