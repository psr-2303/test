package Example;

import java.util.Random;
public class Example03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//编写一个类 Example03，使用 Math 类中的 random()方法，仿真一个铜板在连续一
		//百次的投掷中，出现正反面的次数，并将结果在屏幕上输出（使用 for 循环）。 
		System.out.println("一枚硬币一百次随机投掷的结果:");
		
		 Random random = new Random();//生成随机类
		int i=1,sum1=0,sum2=0;
		for(i=1;i<=100;i++){
			int c=random.nextInt(2);//随机生成一个整数，值域[0,2)
			if(c==1){
				sum1++;
			}
			else{
				sum2++;
				
			}
		}
		System.out.println("一百次随机投掷为正面的为"+sum1);
		System.out.println("一百次随机投掷为反面的为"+sum2);
	}

}
