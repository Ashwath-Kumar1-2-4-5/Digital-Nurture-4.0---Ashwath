package Week_2.Junit_Testing.Exercise_3_assertions_in_junit;

public class PrimeCheckMain {
    public boolean isPrime(int number) {
        if (number <= 1) return false;
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) return false;
        }
        return true;
    }
}
