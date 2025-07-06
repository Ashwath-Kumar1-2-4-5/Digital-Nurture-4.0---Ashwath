package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.service.CountryService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        CountryService countryService = context.getBean(CountryService.class);

        // Handson 1 - Get all countries
        System.out.println("Handson 1: Get All Countries");
        List<Country> countries = countryService.getAllCountries();
        countries.forEach(System.out::println);

        // Handson 2 - Find by code
        System.out.println("\nHandson 2: Find Country By Code (IN)");
        Country country = countryService.findCountryByCode("IN");
        System.out.println(country != null ? country : "Country not found");

        // Handson 3 - Add country
        System.out.println("\nHandson 3: Add Country (FR - France)");
        Country newCountry = new Country();
        newCountry.setCode("FR");
        newCountry.setName("France");
        countryService.addCountry(newCountry);
        System.out.println("Added: " + newCountry);

        // Handson 4 - Update country
        System.out.println("\nHandson 4: Update Country (FR -> Republic of France)");
        countryService.updateCountry("FR", "Republic of France");
        Country updatedCountry = countryService.findCountryByCode("FR");
        System.out.println("Updated: " + updatedCountry);

        // Handson 5 - Delete country
        System.out.println("\nHandson 5: Delete Country (FR)");
        countryService.deleteCountry("FR");
        System.out.println("Deleted country with code FR");
    }
}
