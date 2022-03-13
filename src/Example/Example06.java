package Example;

public class Example06 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//编写应用程序，输出九九乘法表
		for (int i=1;i<10;i++){
			for(int j=1;j<=i;j++){
				
				System.out.print(j+"*"+i+"="+i*j+";");
			}
			System.out.println();
		}
	}

}
