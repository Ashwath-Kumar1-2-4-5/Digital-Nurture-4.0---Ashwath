

import model.Country;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringBootApplication.class,args);
		LOGGER.info("START main()");
		displayCountry();
		LOGGER.info("END main()");
	}

	public static void displayCountry() {
		LOGGER.debug("START displayCountry()");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = context.getBean("country", Country.class);
		LOGGER.info("Country: {}", country);
		LOGGER.info("END displayCountry()");
	}
}
