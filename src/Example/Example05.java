package Example;

import java.util.*;
public class Example05 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//����һ�� 3 λ������������ĸ�����λ�ϵ�����֮�ͣ�������Ļ�������
		//�磺���� 123������� 6������ 245������� 11�� 
		System.out.println("������һ����λ����");
		Scanner scan=new Scanner(System.in);
		int n=scan.nextInt();
		int n1=n/1%10;//��
		int n2=n/10%10;//ʮ
		int n3=n/100%10;//��
		int sum= n1+n2+n3;
		System.out.println(+sum);
	}

}
