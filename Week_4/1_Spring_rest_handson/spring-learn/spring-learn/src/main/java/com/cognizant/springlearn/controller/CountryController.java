package controller;

import model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CountryController {

    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

    @GetMapping("/country")
    public Country getCountry() {
        return context.getBean("country", Country.class);
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return context.getBean("countryList", List.class);
    }
}