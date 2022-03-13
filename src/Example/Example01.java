package Example;

public class Example01{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//求 1~100 以内的奇、偶数和（使用 while 循环）。
				int i=1,sum1=0,sum2=0,sum=0;
				while(i<=100){
					{
						if(i%2==0){
							sum1 += i;
							i++;
							
						}else{
							sum2 += i;
							i++;
						}
						}}
				
				
				sum=sum1+sum2;
				System.out.println("1~100的和为"+sum);
				System.out.println("1~100的偶数和为"+sum1);
				System.out.println("1~100的奇数和为"+sum2);
			}

	}


