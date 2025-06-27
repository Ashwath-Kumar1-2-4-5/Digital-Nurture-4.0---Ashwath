package Week_2.Junit_Testing.Exercise_3_assertions_in_junit;

import org.junit.Test;
import static org.junit.Assert.*;

public class PrimeCheckTest {

    @Test
    public void TestIsPrime() {
        PrimeCheckMain checker = new PrimeCheckMain();
        assertTrue(checker.isPrime(2));
        assertTrue(checker.isPrime(7));
        assertTrue(checker.isPrime(13));
        assertFalse(checker.isPrime(1));
        assertFalse(checker.isPrime(0));
        assertFalse(checker.isPrime(9));
        assertFalse(checker.isPrime(-3));
    }
}
