public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace with your input string
        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        // Create a boolean array to mark the presence of each letter
        boolean[] alphabet = new boolean[26];

        // Convert the input string to lowercase for case-insensitive checking
        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (Character.isLetter(c)) {
                // Mark the corresponding letter as present
                alphabet[c - 'a'] = true;
            }
        }

        // Check if all letters have been marked as present
        for (boolean present : alphabet) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
