package com.getitcheap.API.Items;


import com.getitcheap.API.DTO.MessageResponse;
import com.getitcheap.API.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping(ItemRoutes.GET_ITEMS)
    public ResponseEntity<?> getItems(@RequestParam(value = "type", required = false) List<String> itemTypes,
                                      @RequestParam(value = "category", required = false) List<String> categories ) {

        List<ItemEntity> items = itemService.getItems(itemTypes, categories);
        return ResponseEntity.status(200).body(items == null ? new MessageResponse("No Items found") : items);
    }

    @GetMapping(ItemRoutes.SEARCH_ITEMS)
    public ResponseEntity<?> searchItems(@RequestParam(value = "key") String searchKey) {

        List<ItemEntity> items = itemService.searchItems(searchKey);
        return ResponseEntity.status(200).body(items == null ? new MessageResponse("No Items found") : items);
    }

    @GetMapping(ItemRoutes.GET_ITEM)
    public ResponseEntity<?> getItem(@PathVariable Long id) {

        ItemEntity item = itemService.getItem(id);
        return ResponseEntity.ok().body(item == null ? new MessageResponse("Item not found") : item);
    }

    @PostMapping(ItemRoutes.NEW_ITEM)
    public ResponseEntity<?> newItem(@RequestBody ItemEntity item) {

        boolean success = itemService.newItem(item);
        return success ? ResponseEntity.status(200).body(new MessageResponse("Successful")) :
                Utilities.getSomethingWentWrongResponse();
    }

    @GetMapping(ItemRoutes.USER_ITEM)
    public ResponseEntity<?> getUserItems(@PathVariable Long id) {
            List<ItemEntity> userItems = itemService.getUserItems(id);
        return ResponseEntity.status(200).body(userItems == null ? new MessageResponse("This user has not posted any items.")
                : userItems);
    }

}
