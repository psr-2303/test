package Example;

public class Example01{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//�� 1~100 ���ڵ��桢ż���ͣ�ʹ�� while ѭ������
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
				System.out.println("1~100�ĺ�Ϊ"+sum);
				System.out.println("1~100��ż����Ϊ"+sum1);
				System.out.println("1~100��������Ϊ"+sum2);
			}

	}


