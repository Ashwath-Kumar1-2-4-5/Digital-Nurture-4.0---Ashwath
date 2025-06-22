package Week_1.Algorithms_Data_Structures.Exercise_1_Inventory_Management_System;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

class WarehouseItem {
    int itemCode;
    String itemName;
    int availableUnits;
    double unitCost;

    public WarehouseItem(int itemCode, String itemName, int availableUnits, double unitCost) {
        this.itemCode = itemCode;
        this.itemName = itemName;
        this.availableUnits = availableUnits;
        this.unitCost = unitCost;
    }

    @Override
    public String toString() {
        return itemCode + " - " + itemName + " | Quantity: " + availableUnits + " | Cost: ₹" + unitCost;
    }
}

public class InventoryManagementSystem {
    static Map<Integer, WarehouseItem> inventoryMap = new HashMap<>();
    static Scanner scanner = new Scanner(System.in);

    public static void addNewItem() {
        System.out.print("Enter Item Code: ");
        int code = scanner.nextInt();
        scanner.nextLine(); // Clear buffer
        System.out.print("Enter Item Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Available Units: ");
        int units = scanner.nextInt();
        System.out.print("Enter Unit Cost: ");
        double cost = scanner.nextDouble();

        WarehouseItem item = new WarehouseItem(code, name, units, cost);
        inventoryMap.put(code, item);
        System.out.println("Item added successfully.\n");
    }

    public static void modifyItemDetails() {
        System.out.print("Enter Item Code to Modify: ");
        int code = scanner.nextInt();
        if (inventoryMap.containsKey(code)) {
            System.out.print("Enter Updated Units: ");
            int units = scanner.nextInt();
            System.out.print("Enter Updated Cost: ");
            double cost = scanner.nextDouble();
            WarehouseItem item = inventoryMap.get(code);
            item.availableUnits = units;
            item.unitCost = cost;
            System.out.println("Item details updated.\n");
        } else {
            System.out.println("Item not found in inventory.\n");
        }
    }

    public static void removeItem() {
        System.out.print("Enter Item Code to Remove: ");
        int code = scanner.nextInt();
        if (inventoryMap.remove(code) != null) {
            System.out.println("Item removed from inventory.\n");
        } else {
            System.out.println("Item not found in inventory.\n");
        }
    }

    public static void displayInventory() {
        System.out.println("\nCurrent Inventory Status:");
        if (inventoryMap.isEmpty()) {
            System.out.println("No items in the inventory.\n");
        } else {
            for (WarehouseItem item : inventoryMap.values()) {
                System.out.println(item);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int choice;
        do {
            System.out.println("=== Warehouse Inventory Menu ===");
            System.out.println("1. Add New Item");
            System.out.println("2. Modify Item Details");
            System.out.println("3. Remove Item");
            System.out.println("4. View Inventory");
            System.out.println("0. Exit");
            System.out.print("Choose an option: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1: addNewItem(); break;
                case 2: modifyItemDetails(); break;
                case 3: removeItem(); break;
                case 4: displayInventory(); break;
                case 0: System.out.println("Exiting system."); break;
                default: System.out.println("Invalid choice. Try again.\n");
            }
        } while (choice != 0);
    }
}
