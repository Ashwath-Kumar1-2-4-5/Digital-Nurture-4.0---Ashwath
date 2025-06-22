package Week_1.Algorithms_Data_Structures;

import java.util.*;

class Book {
    int bookId;
    String title;
    String author;

    public Book(int bookId, String title, String author) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
    }

    public String toString() {
        return bookId + " | \"" + title + "\" by " + author;
    }
}

public class LibraryManagementSystem {

    // Linear Search: No need for sorted list
    public static int linearSearch(Book[] books, String title) {
        for (int i = 0; i < books.length; i++) {
            if (books[i].title.equalsIgnoreCase(title)) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search: List must be sorted
    public static int binarySearch(Book[] books, String title) {
        int left = 0, right = books.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int comparison = books[mid].title.compareToIgnoreCase(title);
            if (comparison == 0) {
                return mid;
            } else if (comparison < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }

    public static void displayBook(Book[] books, int index) {
        if (index != -1) {
            System.out.println("Book Found: " + books[index]);
        } else {
            System.out.println("Book Not Found.");
        }
    }

    public static void main(String[] args) {
        Book[] books = {
                new Book(201, "Ponniyin Selvan", "Kalki Krishnamurthy"),
                new Book(202, "Thirukkural", "Thiruvalluvar"),
                new Book(203, "Veerapandiya Kattabomman", "Sundara Ramaswamy"),
                new Book(204, "Kadal Pura", "Kalki Krishnamurthy"),
                new Book(205, "Sivagamiyin Sabatham", "Kalki Krishnamurthy")
        };

        System.out.println("---- Linear Search ----");
        String searchTitle1 = "Thirukkural";
        int linearResult = linearSearch(books, searchTitle1);
        displayBook(books, linearResult);

        System.out.println("\n---- Binary Search ----");
        // Sort books by title for binary search
        Arrays.sort(books, Comparator.comparing(b -> b.title.toLowerCase()));

        String searchTitle2 = "Kadal Pura";
        int binaryResult = binarySearch(books, searchTitle2);
        displayBook(books, binaryResult);
    }
}
