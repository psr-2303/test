package Example;

import java.util.*;
public class Example05 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//输入一个 3 位数，计算该数的各个数位上的数字之和，并在屏幕上输出，
		//如：输入 123，则输出 6；输入 245，则输出 11。 
		System.out.println("请输入一个三位数：");
		Scanner scan=new Scanner(System.in);
		int n=scan.nextInt();
		int n1=n/1%10;//个
		int n2=n/10%10;//十
		int n3=n/100%10;//百
		int sum= n1+n2+n3;
		System.out.println(+sum);
	}

}
