package Week_1.Algorithms_Data_Structures;

import java.util.Scanner;

class Employee {
    int employeeId;
    String name;
    String position;
    double salary;

    public Employee(int employeeId, String name, String position, double salary) {
        this.employeeId = employeeId;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    public String toString() {
        return "ID: " + employeeId + ", Name: " + name + ", Role: " + position + ", Salary: ₹" + salary;
    }
}

public class EmployeeManagementSystem {
    static final int MAX_EMPLOYEES = 50;
    static Employee[] employees = new Employee[MAX_EMPLOYEES];
    static int count = 0;
    static Scanner scanner = new Scanner(System.in);

    public static void addEmployee() {
        if (count >= MAX_EMPLOYEES) {
            System.out.println("Employee database is full.\n");
            return;
        }
        System.out.print("Enter ID: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("Enter Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Position (e.g., Professor, Clerk): ");
        String position = scanner.nextLine();
        System.out.print("Enter Salary: ");
        double salary = scanner.nextDouble();

        employees[count++] = new Employee(id, name, position, salary);
        System.out.println("Employee added successfully.\n");
    }

    public static void searchEmployee() {
        System.out.print("Enter Employee ID to search: ");
        int id = scanner.nextInt();
        boolean found = false;
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                System.out.println("Employee Found: " + employees[i] + "\n");
                found = true;
                break;
            }
        }
        if (!found)
            System.out.println("Employee not found.\n");
    }

    public static void showAllEmployees() {
        if (count == 0) {
            System.out.println("No employees added yet.\n");
            return;
        }
        System.out.println("All College Employees:");
        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
        System.out.println();
    }

    public static void deleteEmployee() {
        System.out.print("Enter Employee ID to delete: ");
        int id = scanner.nextInt();
        boolean deleted = false;
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {
                // Shift elements to the left
                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }
                employees[count - 1] = null;
                count--;
                System.out.println("Employee removed.\n");
                deleted = true;
                break;
            }
        }
        if (!deleted) {
            System.out.println("Employee not found.\n");
        }
    }

    public static void main(String[] args) {
        int choice;
        do {
            System.out.println("=== College Employee Management ===");
            System.out.println("1. Add Employee");
            System.out.println("2. Search Employee");
            System.out.println("3. Show All Employees");
            System.out.println("4. Delete Employee");
            System.out.println("0. Exit");
            System.out.print("Your choice: ");
            choice = scanner.nextInt();

            switch (choice) {
                case 1: addEmployee(); break;
                case 2: searchEmployee(); break;
                case 3: showAllEmployees(); break;
                case 4: deleteEmployee(); break;
                case 0: System.out.println("Exiting..."); break;
                default: System.out.println("Invalid choice.\n");
            }
        } while (choice != 0);
    }
}
