package Week_2.Junit_Testing.Exercise_1_setting_up_junit;


public class Palindrome {

    public boolean isPalindrome(String input) {
        int left = 0;
        int right = input.length() - 1;

        while (left < right) {
            if (input.charAt(left) != input.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    public static void main(String[] args) {
        Palindrome p = new Palindrome();

        String word = "madam";
        if (p.isPalindrome(word)) {
            System.out.println(word + " is a palindrome ✅");
        } else {
            System.out.println(word + " is not a palindrome ❌");
        }
    }
}
