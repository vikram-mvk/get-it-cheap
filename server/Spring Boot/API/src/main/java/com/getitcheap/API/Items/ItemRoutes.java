package com.getitcheap.API.Items;

public @interface ItemRoutes {

    String GET_ITEMS = "/items";
    String NEW_ITEM = "/new-item";
    String GET_ITEM = "/item/{id}";
    String USER_ITEM = "/items/:username";

}
