package Week_1.Algorithms_Data_Structures.Exercise_2_E_commerce_Platform_Search_Function;

import java.util.*;
class Product {
    int productId;
    String productName;
    String category;
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
    public String toString() {
        return productId + " - " + productName + " (" + category + ")";
    }
}
public class ECommerceSearch {
    public static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    }
    public static int binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(name);
            if (compare == 0)
                return mid;
            else if (compare < 0)
                left = mid + 1;
            else
                right = mid - 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        Product[] products = {
                new Product(1001, "pepsi", "Beverages"),
                new Product(1002, "kurkure", "Snacks"),
                new Product(1003, "sting", "Beverages"),
                new Product(1004, "lays", "Snacks"),
                new Product(1005, "coke", "Beverages")
        };
        String searchName = "coke";
        int linearIndex = linearSearch(products, searchName);
        System.out.println("Linear Search Result:");
        if (linearIndex != -1)
            System.out.println("Found: " + products[linearIndex]);
        else
            System.out.println("Week_1.Algorithms_Data_Structures.Exercise_2_E_commerce_Platform_Search_Function.Product not found");
        Arrays.sort(products, Comparator.comparing(p -> p.productName));
        int binaryIndex = binarySearch(products, searchName);
        System.out.println("\nBinary Search Result:");
        if (binaryIndex != -1)
            System.out.println("Found: " + products[binaryIndex]);
        else
            System.out.println("Week_1.Algorithms_Data_Structures.Exercise_2_E_commerce_Platform_Search_Function.Product not found");
    }
}