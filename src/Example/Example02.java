package Example;

import java.util.*;
public class Example02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 
	
	int num=(int)(Math.random()*10);//���������
	
	System.out.println("������һ�����֣�10���ڵ�����������");
	Scanner scanner= new Scanner(System.in);
	int n=scanner.nextInt();//��ȡ�������һ����
	
	while(n!=num){
		if(n>num){
			System.out.println("���µô���");
		}else if(n<num){
			System.out.println("���µ�С��");
		}
		System.out.println("������һ�����֣�10���ڵ�����������");
		n=scanner.nextInt();//�´���һѭ��
	}
	
	

		/*do{
			System.out.println("����"+n+"�н���"+num);
			if(n>num){
				System.out.println("���µô���");
			}else if(n<num){
				System.out.println("���µ�С��");
			}
			System.out.println("������һ�����֣�10���ڵ�����������");
			n=scanner.nextInt();//�´���һѭ��
		}while(n==num);
		*/
	
		if(n==num){
			System.out.println("��ϲ���н��ˣ�");
		}
		
		scanner.close();
			
		
}}

