package Example;

import java.util.Random;
public class Example03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//��дһ���� Example03��ʹ�� Math ���е� random()����������һ��ͭ��������һ
		//�ٴε�Ͷ���У�����������Ĵ����������������Ļ�������ʹ�� for ѭ������ 
		System.out.println("һöӲ��һ�ٴ����Ͷ���Ľ��:");
		
		 Random random = new Random();//���������
		int i=1,sum1=0,sum2=0;
		for(i=1;i<=100;i++){
			int c=random.nextInt(2);//�������һ��������ֵ��[0,2)
			if(c==1){
				sum1++;
			}
			else{
				sum2++;
				
			}
		}
		System.out.println("һ�ٴ����Ͷ��Ϊ�����Ϊ"+sum1);
		System.out.println("һ�ٴ����Ͷ��Ϊ�����Ϊ"+sum2);
	}

}
