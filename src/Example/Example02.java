package Example;

import java.util.*;
public class Example02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 
	
	int num=(int)(Math.random()*10);//生成随机数
	
	System.out.println("请输入一个数字（10以内的正整数）：");
	Scanner scanner= new Scanner(System.in);
	int n=scanner.nextInt();//读取输入的下一个数
	
	while(n!=num){
		if(n>num){
			System.out.println("您猜得大了");
		}else if(n<num){
			System.out.println("您猜得小了");
		}
		System.out.println("请输入一个数字（10以内的正整数）：");
		n=scanner.nextInt();//猜错下一循环
	}
	
	

		/*do{
			System.out.println("输入"+n+"中奖数"+num);
			if(n>num){
				System.out.println("您猜得大了");
			}else if(n<num){
				System.out.println("您猜得小了");
			}
			System.out.println("请输入一个数字（10以内的正整数）：");
			n=scanner.nextInt();//猜错下一循环
		}while(n==num);
		*/
	
		if(n==num){
			System.out.println("恭喜您中奖了！");
		}
		
		scanner.close();
			
		
}}

