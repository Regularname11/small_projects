import java.text.NumberFormat;
import java.util.Scanner;
class mortgage {
    public static void main(String[] args) {
        final byte months_in_year = 12;
        final byte precent = 100;
        
        Scanner sc = new Scanner(System.in);
        
        System.out.println("**** Bank mortgage Calculator ****");
        
         System.out.print("Your Principal: ");
         int principal = sc.nextInt();
         
         System.out.print("Annual Interest Rate: ");
         float annualInterest = sc.nextFloat();
         float montlyInterest = annualInterest / precent / months_in_year;
         
         System.out.print("Period (Years): ");
         byte years = sc.nextByte();
         int numberofPayments  = years * months_in_year;

         double mortgage = principal * (montlyInterest * Math.pow(1 + montlyInterest, numberofPayments)) / (Math.pow(1+ montlyInterest, numberofPayments)-1);
         String mortgageFormatted = NumberFormat.getCurrencyInstance().format(mortgage);
         System.out.println("The Calculated Mortgage is: " + mortgageFormatted);
    }
}