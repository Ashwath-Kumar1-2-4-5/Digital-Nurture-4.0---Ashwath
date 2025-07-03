package Week_1.Algorithms_Data_Structures;

class Task {
    int taskId;
    String taskName;
    String status;
    Task next;

    public Task(int taskId, String taskName, String status) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.status = status;
        this.next = null;
    }

    public String toString() {
        return "ID: " + taskId + " | Task: " + taskName + " | Status: " + status;
    }
}

public class TaskManagementSystem {
    private Task head = null;

    // Add task at end
    public void addTask(int id, String name, String status) {
        Task newTask = new Task(id, name, status);
        if (head == null) {
            head = newTask;
        } else {
            Task temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newTask;
        }
        System.out.println("Task added: " + name);
    }

    // Traverse and show all tasks
    public void showTasks() {
        if (head == null) {
            System.out.println("No tasks available.\n");
            return;
        }
        Task temp = head;
        System.out.println("\n--- Task List ---");
        while (temp != null) {
            System.out.println(temp);
            temp = temp.next;
        }
        System.out.println();
    }

    // Search task by ID
    public void searchTask(int id) {
        Task temp = head;
        while (temp != null) {
            if (temp.taskId == id) {
                System.out.println("Found: " + temp);
                return;
            }
            temp = temp.next;
        }
        System.out.println("Task not found.\n");
    }

    // Delete task by ID
    public void deleteTask(int id) {
        if (head == null) {
            System.out.println("No tasks to delete.");
            return;
        }
        if (head.taskId == id) {
            System.out.println("Task deleted: " + head.taskName);
            head = head.next;
            return;
        }

        Task prev = head;
        Task current = head.next;

        while (current != null) {
            if (current.taskId == id) {
                prev.next = current.next;
                System.out.println("Task deleted: " + current.taskName);
                return;
            }
            prev = current;
            current = current.next;
        }

        System.out.println("Task ID not found.");
    }

    public static void main(String[] args) {
        TaskManagementSystem manager = new TaskManagementSystem();

        // Sample college tasks
        manager.addTask(101, "Submit Lab Record", "Pending");
        manager.addTask(102, "Attend Department Meeting", "Completed");
        manager.addTask(103, "Update Class Schedule", "In Progress");
        manager.addTask(104, "Review Project Proposals", "Pending");

        manager.showTasks();

        manager.searchTask(103);
        manager.deleteTask(102);

        manager.showTasks();
    }
}
