package Week_1.Design_Patterns_and_Principles.Exercise_1_Implementing_the_Singleton_Pattern;

class Logger {
    private static Logger instance;
    private Logger() {
        System.out.println("Week_1.Design_Patterns_and_Principles.Exercise_1_Implementing_the_Singleton_Pattern.Logger Created and initialized.....!!!");
    }
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }
    public void log(String msg) {
        System.out.println(msg);
    }
}
public class LoggerSingletonExample {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("User logged in...");

        Logger logger2 = Logger.getInstance();
        logger2.log("User clicked a button...");

        if (logger1 == logger2) {
            System.out.println("Same logger is used");
        } else {
            System.out.println("Different logger is used");
        }
    }
}

