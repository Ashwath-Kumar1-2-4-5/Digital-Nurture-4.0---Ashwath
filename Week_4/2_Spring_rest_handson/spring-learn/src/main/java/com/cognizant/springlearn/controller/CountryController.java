package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {

    @RequestMapping("/country")
    public Country getCountryIndia() {
        return new Country("IN", "India");
    }
}
