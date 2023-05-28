package com.kukininj.PostApp.models.requestmodels;

import java.math.BigDecimal;

public class FilteredFindRequest {
    public String query;
    public String category;
    public String area;
    public BigDecimal minPrice;
    public BigDecimal maxPrice;
}
