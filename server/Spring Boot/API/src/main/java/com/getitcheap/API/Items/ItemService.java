package com.getitcheap.API.Items;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    ItemRepository itemRepository;

    public ItemEntity getItem(Long id) {
       return itemRepository.getItem(id);
    }

    public List<ItemEntity> getAllItems() {
        return itemRepository.getAllItems();
    }

    public boolean newItem(ItemEntity item) {
        return itemRepository.newItem(item);
    }

}
