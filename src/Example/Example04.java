package Example;
//���������Լ��
public class Example04 {
	public static void main(String args[]) 
	{ 
	 int m=128,n=136; 
	int temp; 
	if(m<n) 
	{ 
	 temp=m; 
	 m=n; 
	 n=temp; 
	} //m>n
	System.out.println("m"+m+"n"+n);//m,18,n,12
	while(n>0) //n=0ʱͣ��
	{ 
	 temp=m%n; //t,6
	 m=n;  //m=12
	 n=temp;//
	} //շת�������
	//�������������Լ���������н�С�����������Ĳ�����Լ����
	//ֱ��n/tempΪ�㣬��ʣ��m�����Լ��
	
	 System.out.println(m); 
	} 
	}

