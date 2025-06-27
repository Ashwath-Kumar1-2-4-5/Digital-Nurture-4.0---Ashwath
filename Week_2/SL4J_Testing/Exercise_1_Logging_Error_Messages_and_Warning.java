package Week_2.SL4J_Testing;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
public class Exercise_1_Logging_Error_Messages_and_Warning {
    private static final Logger logger = LoggerFactory.getLogger(Exercise_1_Logging_Error_Messages_and_Warning.class);
    public static void main(String[] args) {
        logger.error("This is an error message");
        logger.warn("This is a warning message");
        logger.info("This is an informational message");
    }
}
