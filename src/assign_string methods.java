
class StringMethodes {
    public static void main(String[] args) {
        String mesg = "Hi it's mE taha    ";
        
        //the method endsWith/startsWith returns a boolen value (true/false).
        System.out.println(mesg.endsWith("taha")); //output=true
        System.out.println(mesg.startsWith("me"));//output=false
        
        //length method returns the number of characters.
         System.out.println(mesg.length());//output=15
         
         //indexOf gives the index of each character.
         System.out.println(mesg.indexOf("m"));//output=8
         
         //replace method returns a new string.
         System.out.println(mesg.replace("taha", "taha-yassine"));//output= new string with "taha-yassine" instead of "taha".
         
         //trim method removes the extra space.
         System.out.println(mesg.trim());
         
         //trim method removes the extra space.
         System.out.println(mesg.trim());
         
         //toUpperCase coverts all characters to upper case.
         System.out.println(mesg.toUpperCase());
         
         //toLowerCase coverts all characters to lower case.
         System.out.println(mesg.toLowerCase());
         
        //System.out.println(mesg + ":)");
    }
}