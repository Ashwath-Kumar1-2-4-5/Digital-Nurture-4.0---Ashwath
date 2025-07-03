package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Harry potter");
        bookService.addBook("The Nun");
        bookService.addBook("Psychology of Money");
        bookService.addBook("Brook's Island");
        bookService.addBook("Mahabharatham");
        bookService.addBook("Kalki");
        bookService.addBook("Kambaramayanam");
        bookService.addBook("Agni Siragugal");


    }
}
