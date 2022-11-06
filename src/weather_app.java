import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

 class Weather{

public static void main(String[] args) {

ArrayList<Integer> temperature= new ArrayList<Integer>();

int values;

Scanner sc= new Scanner (System.in);

int i = 1;

do {
System.out.println("type temperature of day "+(i));
values = sc.nextInt();
temperature.add(values);
}

while(values!=1000&& i<temperature.size());
for( i=0; i<temperature.size();i++) {
System.out.println("Day temperature "+(i+1)+" is:"+temperature.get(i));
}

  double sum = 0, average=0;

  for (i=0; i< temperature.size(); i++)

  { 
    sum += temperature.get(i); 
  } 
  average=sum / temperature.size(); 
  System.out.println("The average is:"+average);

  int max=0;
  max=Collections.max(temperature);
  System.out.println("the highest temperature is" + max);
}
}