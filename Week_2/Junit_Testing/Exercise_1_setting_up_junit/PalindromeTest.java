package Week_2.Junit_Testing.Exercise_1_setting_up_junit;

import org.junit.Test;
import static org.junit.Assert.*;

public class PalindromeTest {

    @Test
    public void testPalindromeTrue() {
        Palindrome p = new Palindrome();
        assertTrue(p.isPalindrome("racecar"));
    }

    @Test
    public void testPalindromeFalse() {
        Palindrome p = new Palindrome();
        assertFalse(p.isPalindrome("hello"));
    }
}
