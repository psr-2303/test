package Example;
//求两数最大公约数
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
	while(n>0) //n=0时停下
	{ 
	 temp=m%n; //t,6
	 m=n;  //m=12
	 n=temp;//
	} //辗转相除法，
	//两个整数的最大公约数等于其中较小的数和两数的差的最大公约数。
	//直至n/temp为零，则剩下m即最大公约数
	
	 System.out.println(m); 
	} 
	}

