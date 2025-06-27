package Week_2.Junit_Testing.Exercise_4_aaa_pattern;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class SorterTest {

    Sorter sorter;

    @Before
    public void setUp() {
        sorter = new Sorter();
        System.out.println("Setup complete.");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown done.\n");
    }

    @Test
    public void testSortedArray() {
        int[] arr = {1, 2, 3, 4, 5};
        boolean result = sorter.isSorted(arr);
        assertTrue(result);
    }

    @Test
    public void testUnsortedArray() {
        int[] arr = {5, 3, 2, 1};
        boolean result = sorter.isSorted(arr);
        assertFalse(result);
    }

    @Test
    public void testSingleElementArray() {
        int[] arr = {10};
        boolean result = sorter.isSorted(arr);
        assertTrue(result);
    }

    @Test
    public void testEmptyArray() {
        int[] arr = {};
        boolean result = sorter.isSorted(arr);

        assertTrue(result);
    }
}
