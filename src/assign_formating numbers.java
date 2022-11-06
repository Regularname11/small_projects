import java.text.NumberFormat;

class FormatingNumbers {
    public static void main(String[] args) {
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        String result = currency.format(1234567.89);
        System.out.println(result);//Output: $1,234,567.89
    }
}