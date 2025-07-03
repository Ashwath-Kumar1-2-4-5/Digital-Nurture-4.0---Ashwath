package Week_1.Algorithms_Data_Structures.Exercise_3_Sorting_Customer_Orders;

class Order {
    int orderId;
    String customerName;
    String foodItem;
    double totalPrice;

    public Order(int orderId, String customerName, String foodItem, double totalPrice) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.foodItem = foodItem;
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return orderId + " | " + customerName + " ordered " + foodItem + " | ₹" + totalPrice;
    }
}

public class SortingCustomerOrders {

    // Bubble Sort: High to Low by totalPrice
    public static void bubbleSort(Order[] orders) {
        for (int i = 0; i < orders.length - 1; i++) {
            for (int j = 0; j < orders.length - i - 1; j++) {
                if (orders[j].totalPrice < orders[j + 1].totalPrice) {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Quick Sort: High to Low by totalPrice
    public static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pi = partition(orders, low, high);
            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }

    public static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].totalPrice;
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (orders[j].totalPrice >= pivot) {
                i++;
                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }
        Order temp = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp;
        return i + 1;
    }

    public static void displayOrders(Order[] orders) {
        for (Order order : orders) {
            System.out.println(order);
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Order[] orders = {
                new Order(101, "Gokul", "Thalapakatti Biryani", 360.0),
                new Order(102, "Meena", "Chettinad Chicken Curry", 310.0),
                new Order(103, "Ravi", "Idli with Vada Curry", 120.0),
                new Order(104, "Divya", "Kambu Koozh Combo", 80.0),
                new Order(105, "Vijay", "Kothu Parotta", 190.0)
        };

        System.out.println("Original Orders:");
        displayOrders(orders);

        // Bubble Sort
        bubbleSort(orders);
        System.out.println("Orders Sorted using Bubble Sort:");
        displayOrders(orders);

        // Reset orders
        Order[] newOrders = {
                new Order(101, "Gokul", "Thalapakatti Biryani", 360.0),
                new Order(102, "Meena", "Chettinad Chicken Curry", 310.0),
                new Order(103, "Ravi", "Idli with Vada Curry", 120.0),
                new Order(104, "Divya", "Kambu Koozh Combo", 80.0),
                new Order(105, "Vijay", "Kothu Parotta", 190.0)
        };

        // Quick Sort
        quickSort(newOrders, 0, newOrders.length - 1);
        System.out.println("Orders Sorted using Quick Sort:");
        displayOrders(newOrders);
    }
}
